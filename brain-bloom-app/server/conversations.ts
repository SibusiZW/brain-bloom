'use server';

import { db } from "@/lib/db";
import { getSession } from "./auth";
import { conversations } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function createConversation(title: string) {
    const session = await getSession();
    const userId = session?.user.id

    if (userId) {
        const [conservation] = await db.insert(conversations).values({ title: title, userId: userId }).returning();
        return conservation
    }
}

export async function getConversations() {
    const session = await getSession();
    const userId = session?.user.id;

    if (userId) {
        const allConversations = await db.select().from(conversations).where(eq(conversations.userId, userId));
        return allConversations;
    }
}

export async function deleteConversation(id: string) {
    await db.delete(conversations).where(eq(conversations.id, id));
}