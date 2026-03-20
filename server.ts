import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const formId = process.env.FORMSPREE_FORM_ID;

    // If no Formspree, we can't send a direct email notification easily
    if (!formId) {
      console.error("FORMSPREE_FORM_ID is missing. Contact form cannot send emails.");
      return res.status(500).json({ 
        success: false, 
        message: "Sistem za pošiljanje e-pošte ni nastavljen. Prosimo, kontaktirajte nas direktno na email." 
      });
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `Novo sporočilo s spletne strani: ${subject}`
        })
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ success: false });
      }
    } catch (error) {
      res.status(500).json({ success: false });
    }
  });

  // API route for quiz submissions (Mailchimp integration)
  app.post("/api/quiz", async (req, res) => {
    const { email, score, resultTitle, answers } = req.body;
    
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    let serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const formId = process.env.FORMSPREE_FORM_ID;

    // If server prefix is missing but API key is present, try to extract it (e.g., "key-us19" -> "us19")
    if (!serverPrefix && apiKey && apiKey.includes("-")) {
      serverPrefix = apiKey.split("-")[1];
    }

    let mailchimpSuccess = false;
    let mailchimpError = null;

    try {
      // 1. Attempt Mailchimp (Optional)
      if (apiKey && listId && serverPrefix) {
        const mcResponse = await fetch(`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`, {
          method: "POST",
          headers: {
            "Authorization": `apikey ${apiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: email.split('@')[0],
              LNAME: "Vprašalnik",
            },
            tags: ["Vprašalnik", resultTitle]
          })
        });
        
        const mcData = await mcResponse.json();
        
        if (mcResponse.ok || mcData.title === "Member Exists") {
          mailchimpSuccess = true;
        } else {
          mailchimpError = mcData.detail || mcData.title;
          console.error("Mailchimp error:", mcData);
        }
      }

      // 2. Send email notification via Formspree (This will be your primary way to get the email)
      let formspreeSuccess = false;
      if (formId) {
        try {
          const fsResponse = await fetch(`https://formspree.io/f/${formId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
              email,
              score,
              resultTitle,
              answers: JSON.stringify(answers),
              _subject: `Nov rešen vprašalnik: ${resultTitle} (${email})`
            })
          });
          if (fsResponse.ok) {
            formspreeSuccess = true;
          }
        } catch (fsError) {
          console.error("Formspree notification error:", fsError);
        }
      }

      // Return success anyway since we have Firebase on the client as a fallback
      return res.status(200).json({ 
        success: true, 
        mailchimpSynced: mailchimpSuccess,
        formspreeSynced: formspreeSuccess
      });
    } catch (error) {
      console.error("Quiz submission error:", error);
      res.status(500).json({ success: false, error: error instanceof Error ? error.message : String(error) });
    }
  });

  // API route for AI logging
  app.post("/api/log-ai", async (req, res) => {
    const { message, response } = req.body;
    const formId = process.env.FORMSPREE_FORM_ID;

    if (!formId) return res.status(200).json({ success: true });

    try {
      await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          userMessage: message,
          aiResponse: response,
          _subject: "AI Klepet: Novo vprašanje"
        })
      });
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
