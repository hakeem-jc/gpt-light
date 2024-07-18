import { OpenAI } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

const openai = new OpenAI();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  });

  const messages = req.body.messages || [];
  if (messages.length === 0) {
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
  res.status(200).json({ result: completion.choices[0]});
}