"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronsUpDownIcon, Flower, PlusIcon } from "lucide-react"
import Link from "next/link"

export function Brander() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground" size={'lg'}>
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-sidebar-primary-foreground">
            <Link href={'/dashboard'}>
              <Flower />
            </Link>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">BrainBloom</span>
        </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
