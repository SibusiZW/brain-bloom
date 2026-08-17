'use server';

import { OpenRouter } from '@openrouter/sdk';
import axios from 'axios';

export async function generateTitle(prompt: string) {
    const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! });

    const response = await client.chat.send({
        chatRequest: {
            messages: [
                { role: 'system', content: "Your job is to generate a title of a chat based on the prompt... You should provide a short and concise title for the chat based on the prompt you have received from the user.. You are to only accept the prompt on its own.. You should only give output of the title of the chat on its own don't return any other text.. Use plain text not Markdown" },
                { role: 'user', content: prompt }

            ],
            model: 'google/gemma-4-31b-it'
        }
    });

    return (response as any).choices[0].message.content ?? "Error";
}

export async function generateResponse(query: string, sessionId: string) {
    interface ApiResponse {
        human: string,
        ai: string,
        sessionId: string
    };

    const response = await axios.get<ApiResponse>(`${process.env.BASE_API_URL}/run?query=${query}&session_id=${sessionId}`);
    
    return response.data;
}