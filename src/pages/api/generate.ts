import { OpenAI } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

const openai = new OpenAI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: process.env.NEXT_PUBLIC_API_URL,
      optionsSuccessStatus: 200,
    });

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
      model: "gpt-3.5-turbo",
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