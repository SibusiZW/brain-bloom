import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getSession } from "@/server/auth"
import HomePage from "../page";
import { AppSidebar } from "@/components/app-sidebar";

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {

    const session = await getSession();

    return (
        <>
            { session ? <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col w-full p-3">
                    <SidebarTrigger />
                    {children}
                </div>
            </SidebarProvider> : <HomePage /> }
        </>
    )
}