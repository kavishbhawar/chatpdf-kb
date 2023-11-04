import { OpenAIApi, Configuration } from "openai-edge";

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

export async function getEmbeddings(text: string) {
    console.log("Open API Key is " + process.env.OPENAI_API_KEY);

    try {
        const response = await openai.createEmbedding({
            model: "text-embedding-ada-002",
            input: text.replace(/\n/g, " "),
        });
        const result = await response.json();
        return result.data[0].embedding as number[];
    } catch (error) {
        console.log("error calling openai embeddings api", error);
        throw error;
    }

}