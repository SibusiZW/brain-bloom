'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { wipeConversations } from "@/server/conversations";
import { useRouter } from "next/navigation";

export default function WipeDialog() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleDelete() {
        setLoading(true);

        await wipeConversations();

        setLoading(false);
        router.push('/dashboard')
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className={'bg-red-500 hover:bg-red-300'}><Trash2 /> Wipe all conversations</Button>
            </DialogTrigger>

            <DialogContent className={'text-center'}>
                <DialogDescription>This deletes all your conversations</DialogDescription>

                <Button onClick={handleDelete} className={'w-full'} variant={'destructive'}>
                    {
                        loading ? <Loader2 className="animate-spin"/> : 
                        <>
                            <Trash2 />
                            delete everything :)
                        </>
                    }
                </Button>
            </DialogContent>
        </Dialog>
    )
}