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

    try {
      const response = await fetch("https://formspree.io/f/marusavrecar@gmail.com", {
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
        res.status(200).json({ success: true, message: "Sporočilo uspešno poslano." });
      } else {
        res.status(500).json({ success: false, message: "Napaka pri pošiljanju." });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Napaka na strežniku." });
    }
  });

  // API route for quiz submissions
  app.post("/api/quiz", async (req, res) => {
    const { email, score, resultTitle, answers } = req.body;

    try {
      // Send result to Alex via Formspree
      await fetch("https://formspree.io/f/marusavrecar@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email,
          score,
          resultTitle,
          answers: JSON.stringify(answers),
          _subject: `Nov rešen vprašalnik: ${resultTitle} (${email})`
        })
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Quiz error:", error);
      res.status(500).json({ success: false });
    }
  });

  // API route for AI logging (optional, but good for Alex to see questions)
  app.post("/api/log-ai", async (req, res) => {
    const { message, response } = req.body;

    try {
      // Log to Formspree so Alex gets an email with the conversation
      // (Note: This might be a lot of emails if many people use it)
      await fetch("https://formspree.io/f/marusavrecar@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
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
