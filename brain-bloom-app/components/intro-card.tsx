'use client';

import { Button } from "./ui/button";
import { Brain, LogIn } from "lucide-react";

export default function IntroCard() {
    return (
        <div className="w-full max-w-[450px] bg-white rounded-md p-4">
            <h1 className="text-3xl font-serif mb-4">Brain<span className="text-blue-500">Bloom</span></h1>
            
            <p className="text-gray-500">&copy; tafadzwa sibanda {new Date().getFullYear()}</p>
        </div>
    )
}