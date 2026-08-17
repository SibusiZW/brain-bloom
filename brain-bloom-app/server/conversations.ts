'use server';

import { db } from "@/lib/db";
import { getSession } from "./auth";
import { conversations } from "@/lib/db/schema";

export async function createConversation(title: string) {
    const session = await getSession();
    const userId = session?.user.id

    if (userId) {
        const [conservation] = await db.insert(conversations).values({ title: title, userId: userId }).returning();
        return conservation
    }
}