"use client";

import { useState } from "react";
import {
  ArrowUp,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "./ui/toast";
import { useRouter } from "next/navigation";
import { generateResponse, generateTitle } from "@/server/ai";
import { createConversation } from "@/server/conversations";
import { createMessage } from "@/server/messages";


export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSend() {
    if (!message.trim()) {
      toast.add({
        type: 'warning',
        title: 'Please enter prompt'
      });

      return;
    }

    setLoading(true);

    const title = await generateTitle(message);
    const conversation = await createConversation(title);

    const conversationId = conversation?.id;

    if (conversationId) {

      const response = await generateResponse(message, conversationId);

      await createMessage(conversationId, response.ai, response.human);
      setLoading(false);
      setMessage("");
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <h1 className="text-center mb-3 text-4xl font-serif">Time to <span className="text-blue-500">lock</span> in!</h1>
      {/* Chat Input */}
      <div className="rounded-[28px] border border-gray-200 shadow-sm transition-all focus-within:border-gray-300 focus-within:shadow-md">
        <div className="relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Drop your one-liner here!!"
            className="
              min-h-[180px]
              w-full
              resize-none
              border-0
              bg-transparent
              px-6
              pt-6
              pb-20
              text-[16px]
              shadow-none
              outline-none
              focus-visible:ring-0
              placeholder:text-gray-400
            "
          />

          {/* Send Button */}
          <Button
            onClick={handleSend}
            disabled={loading}
            size="icon"
            className="
              absolute
              bottom-5
              right-5
              h-11
              w-11
              rounded-full
              bg-blue-500
              text-white
              hover:bg-blue-300
              disabled:pointer-events-none
              disabled:opacity-50
            "
          >
            { loading ? <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.5} /> : <ArrowUp className="h-5 w-5" strokeWidth={2.5} /> }
          </Button>
        </div>
      </div>

      </div>
  );
}