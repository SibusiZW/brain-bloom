import ChatInteface from "@/components/chat-interface";
import { getMessages } from "@/server/messages";

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const messages = await getMessages(id);

    return (
        <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
            <ChatInteface messages={messages} conversationId={id}/>
        </div>
        
    )
}