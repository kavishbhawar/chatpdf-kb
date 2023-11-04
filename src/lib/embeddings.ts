import { OpenAIApi, Configuration } from "openai-edge";

const apiKey = process.env.OPENAI_API_KEY;

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {

    try {
        const openai = new OpenAIApi(config);
        const response = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: "Tiktoken library For Tokenization In OpenAI API",
        });
        const result = await response.json();
        return result.data[0].embedding as number[];
    } catch (error) {
        console.log("error calling openai embeddings api", error);
        throw error;
    }

}