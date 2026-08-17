import ChatInteface from "@/components/chat-interface";
import { getMessages } from "@/server/messages";

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const messages = await getMessages(id);

    return (
        <div className="min-h-screen">
            <div className="flex flex-col min-h-screen items-center justify-center">
                <ChatInteface messages={messages} conversationId={id}/>
            </div>
        </div>
    )
}