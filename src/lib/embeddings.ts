import { OpenAIApi, Configuration } from "openai-edge";

const apiKey = process.env.OPENAI_API_KEY;

console.log("API Key is 1 " + apiKey);


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
    console.log("Open API Key is " + process.env.OPENAI_API_KEY);

    try {
        const openai = new OpenAIApi(config);
        const response = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: "Tiktoken library For Tokenization In OpenAI API",
        });
        const result = await response.json();
        console.log("result " + result)
        return result.data;
    } catch (error) {
        console.log("error calling openai embeddings api", error);
        throw error;
    }

}