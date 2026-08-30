import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI SDK securely on server
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Neural-Link Bio AI Assistant API Endpoint
  app.post("/api/ai/neural-chat", async (req, res) => {
    try {
      const { messages, sectorContext, compareContext } = req.body;
      const ai = getGeminiClient();

      const lastMessage = messages?.[messages.length - 1]?.text || "";

      if (!ai) {
        return res.json({
          reply: `[Demo Mode] I'm your AI Real Estate Research Assistant. (Add GEMINI_API_KEY to enable). Based on your query "${lastMessage}", my recommendation is to look at ${sectorContext || 'properties in Lonavala or Bangalore'} for the best value in 2024.`,
        });
      }

      const contents = messages.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: contents,
        config: {
          systemInstruction: `You are NOVA, an objective and knowledgeable Indian Real Estate Research Assistant.
Your job is to provide unbiased, research-backed insights about properties in India. You help users understand location benefits, risks, legal considerations, connectivity, and investment potential.
Never push the user to buy. Instead, present balanced pros and cons and let them make informed decisions.
Keep answers concise (3-5 sentences max), factual, and relevant to the user's query.
Current property in focus: ${sectorContext || 'Indian Real Estate Market'}.
${compareContext ? `The user is comparing these properties: ${compareContext}. Help them weigh the options objectively.` : ''}`,
        },
      });

      return res.json({ reply: response.text || "Neural connection established." });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({
        error: "Neural link disruption",
        details: err?.message || "Unknown error",
        reply: "Neural link signal experienced quantum interference. Please re-initiate synchronization.",
      });
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
    console.log(`ECO-EXPEDITIONS server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
