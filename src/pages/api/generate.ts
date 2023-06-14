import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req:NextApiRequest, res:NextApiResponse) {
  // Run the cors middleware
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  });

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured",
      }
    });
    return;
  }

  const messages = req.body.messages || [];
  if (messages.length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid array of messages",
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
    if (completion.data && completion.data.choices && completion.data.choices.length > 0 && completion.data.choices[0].message) {
      res.status(200).json({ result: completion.data.choices[0].message.content });
    }
  } catch(error:any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}