import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.data.choices[0].message?.content;
    res.status(200).json({ reply });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}