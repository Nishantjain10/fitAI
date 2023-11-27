import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import Container from '@/app/form/Container';
import useFormOneStore from '@/store/formStore';


// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const state = useFormOneStore();
  const prompt = Container();

  const completion = await openai.createChatCompletion({
    model: "text-davinci-003",
    stream: true,
    messages: [
      {
        role: 'user',
        content: `${prompt}`
      },
    ],// Text prompt to generate continuation from, passed in as a request body parameter
    temperature: 1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256, // Maximum number of tokens to generate in the output text
  });

  const stream = OpenAIStream(completion);
  // Respond with the stream
  return new StreamingTextResponse(stream);
};
