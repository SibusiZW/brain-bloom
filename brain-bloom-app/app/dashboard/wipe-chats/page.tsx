import WipeDialog from "@/components/dialogs/wipe-dialog";

export default function WipeChats() {
    return (
        <div className="min-h-screen flex flex-col text-center items-center justify-center">
            <div className="p-4 p-4 w-full max-w-[450px]">
                <h1 className="font-serif text-3xl mb-4"><span className="text-red-500">Delete</span> Chats</h1>
                <WipeDialog />
            </div>
        </div>
    )
}