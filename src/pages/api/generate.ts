import { OpenAI } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const messages = req.body.messages || [];
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({
        error: {
          message: "Please enter a valid array of messages",
        }
      });
      return;
    }

    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-4o-2024-05-13",
    });

    res.status(200).json({ result: completion.choices[0] });

  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({
      error: {
        message: "Internal server error",
      }
    });
  }
}