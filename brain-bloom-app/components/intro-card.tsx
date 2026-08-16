'use client';

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Brain, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function IntroCard() {

    const { data: session } = authClient.useSession();
    const router = useRouter();

    return (
        <div className="w-full max-w-[450px] bg-white rounded-md p-4">
            <h1 className="text-3xl font-serif mb-4">Brain<span className="text-blue-500">Bloom</span></h1>
            { session ? <Button className={'mb-3 bg-blue-500 w-full'}></Button> : <Button onClick={() => router.push('/auth')} className={'mb-3 bg-blue-500 w-full'}><LogIn /> Log in now!</Button> }
            <p className="text-gray-500">&copy; tafadzwa sibanda {new Date().getFullYear()}</p>
        </div>
    )
}