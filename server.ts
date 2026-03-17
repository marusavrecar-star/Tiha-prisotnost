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
      // Using Formspree as the "system" to send the email
      // We send it to your email: alex.marinc92@gmail.com
      const response = await fetch("https://formspree.io/f/alex.marinc92@gmail.com", {
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
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        res.status(500).json({ success: false, message: "Sistemu ni uspelo poslati sporočila. Prosimo, poskusite ponovno." });
      }
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ success: false, message: "Sistemu ni uspelo poslati sporočila. Prosimo, poskusite ponovno." });
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
