"use client";

import { ArrowUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/lib/db/schema";
import { useState } from "react";
import { toast } from "./ui/toast";
import { generateResponse } from "@/server/ai";
import { createMessage } from "@/server/messages";
import { useRouter } from "next/navigation";
import ReactMarkdown from 'react-markdown';

export default function ChatInteface({ messages, conversationId }: { messages: Message[], conversationId: string }) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleMessaging() {
    if (!message.trim()) {
      toast.add({
        title: 'Please enter prompt',
        type: 'error'
      })
      return
    }

    setLoading(true);

    const res = await generateResponse(message, conversationId)
    await createMessage(conversationId, res.ai, res.human)

    setLoading(false);
    setMessage("");
    router.refresh()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Chat area */}
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pb-40 pt-16">
        <div className="space-y-8">
          {messages.map((m) => <div key={m.id}>
            <UserMessage content={m.humanMessage} />
            <AssistantMessage content={m.aiMessage}/>
          </div>)}
        </div>
      </main>

      {/* Composer */}
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-10">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-[28px] border shadow-sm transition-shadow focus-within:shadow-md">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What's next??"
              rows={1}
              className="min-h-[120px] resize-none border-0 px-5 pb-16 pt-5 pr-16 text-[15px] focus-visible:ring-0"
            />

            {/* ONLY BUTTON IN THE COMPOSER */}
            <Button
              size="icon"
              className="absolute bg-blue-500 hover:bg-blue-300 bottom-4 right-4 h-10 w-10 rounded-full"
              disabled={loading}
              onClick={handleMessaging}
            >
              { loading ? <Loader2 className="h-5 w-5 animate-spin"/> : <ArrowUp className="h-5 w-5" />}
            </Button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            &copy; tafadzwa sibanda {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- User message ---------------- */

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[75%] rounded-2xl bg-blue-300 px-4 py-3 text-sm text-blue-700">
        {content}
      </div>
    </div>
  );
}

/* ---------------- Assistant message ---------------- */

function AssistantMessage({ content }: { content: string }) {
  return (
    <div className="flex gap-4">
      <div className="min-w-0 flex-1">

        <div className="text-[15px] leading-7 text-foreground">
          <ReactMarkdown
          >
            {content}
          </ReactMarkdown>
        </div>

      </div>
    </div>
  );
}