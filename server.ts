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

    try {
      // 1. Add to Mailchimp (Mandatory for lead collection)
      if (apiKey && listId && serverPrefix) {
        // Mailchimp uses MD5 hash of lowercase email for member identification in some endpoints,
        // but for simple POST to /members, we just send the email.
        // To handle "already subscribed", we can use the "Add or update" endpoint (PUT)
        // but that requires MD5. For simplicity and to avoid extra dependencies, 
        // we'll stick to POST but handle the 400 error gracefully if it's "Member Exists".
        
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
        
        if (!mcResponse.ok) {
          // If member already exists, we might want to update their tags
          if (mcData.title === "Member Exists") {
            console.log("Member already exists in Mailchimp, skipping add.");
          } else {
            console.error("Mailchimp error:", mcData);
            // Return specific Mailchimp error to frontend for debugging
            return res.status(400).json({ 
              success: false, 
              error: `Mailchimp: ${mcData.detail || mcData.title || 'Neznana napaka'}` 
            });
          }
        }
      } else {
        const missing = [];
        if (!apiKey) missing.push("API_KEY");
        if (!listId) missing.push("LIST_ID");
        if (!serverPrefix) missing.push("SERVER_PREFIX");
        
        console.warn("Mailchimp credentials missing or incomplete. Skipping Mailchimp sync.", { missing });
        return res.status(400).json({ 
          success: false, 
          error: `Manjkajoči podatki za Mailchimp: ${missing.join(", ")}` 
        });
      }

      // 2. Send email notification via Formspree (Optional, so Alex knows someone solved it)
      if (formId) {
        try {
          await fetch(`https://formspree.io/f/${formId}`, {
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
        } catch (fsError) {
          console.error("Formspree notification error:", fsError);
        }
      }

      res.status(200).json({ success: true });
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
