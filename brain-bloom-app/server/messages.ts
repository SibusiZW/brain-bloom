'use server';

import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";

export async function createMessage(conversationId: string, aiMessage: string, humanMessage: string) {
    await db.insert(messages).values({ conversationId: conversationId, aiMessage: aiMessage, humanMessage: humanMessage });
}