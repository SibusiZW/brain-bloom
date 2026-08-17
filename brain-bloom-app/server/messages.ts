'use server';

import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function createMessage(conversationId: string, aiMessage: string, humanMessage: string) {
    await db.insert(messages).values({ conversationId: conversationId, aiMessage: aiMessage, humanMessage: humanMessage });
}

export async function getMessages(conversationId: string) {
    const allMessages = await db.select().from(messages).where(eq(messages.conversationId, conversationId));
    return allMessages;
}