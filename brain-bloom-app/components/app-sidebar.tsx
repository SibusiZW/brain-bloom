import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Brander } from "@/components/brander"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon } from "lucide-react"
import { getConversations } from "@/server/conversations"

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const conversations = await getConversations();

  const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Manage chats",
          url: "/dashboard/manage-chats",
        },
        {
          title: "Wipe conversation history",
          url: "/dashboard/wipe-chats",
        },
      ],
    },
    {
      title: "Conversations",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: conversations?.map((c) => c ? { title: c.title, url: `/dashboard/chat/${c.id}` } : c),
    },
  ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Brander />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
