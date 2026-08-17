import DeleteChatDialog from "@/components/dialogs/delete-chat-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getConversations } from "@/server/conversations"
import Link from "next/link";

export default async function ManageChats() {

    const conversations = await getConversations();

    return (
        <div className="flex flex-col w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {conversations?.map((c) => <TableRow key={c.id}>
                        <TableCell>
                            <Link href={`/dashboard/chat/${c.id}`}>
                                {c.title}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <DeleteChatDialog id={c.id}/>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}