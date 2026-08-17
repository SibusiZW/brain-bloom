'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { deleteConversation } from "@/server/conversations";
import { useRouter } from "next/navigation";

export default function DeleteChatDialog({ id }: { id: string }) {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleDelete() {
        setLoading(true);

        await deleteConversation(id);

        setLoading(false);
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'ghost'}><Trash2 /></Button>
            </DialogTrigger>

            <DialogContent className={'text-center'}>
                <DialogDescription>Deletes a conversation</DialogDescription>

                <Button onClick={handleDelete} variant={'destructive'}>{loading ? <Loader2 className="animate-spin"/> : <><Trash2 /> Delete now!!</>}</Button>
            </DialogContent>
        </Dialog>
    )
}