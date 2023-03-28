import { OpenAIStream, OpenAIStreamPayload } from "./OpenAiStream";

if (!process.env.OPEN_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

export const config = {
  runtime: "edge",
};


const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "text-davinci-003",
    messages: [{ role: "user", content: prompt }],
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256,
    stream: true,
    n: 3,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export default handler;