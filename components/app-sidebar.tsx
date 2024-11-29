"use client"
import * as React from "react" 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem, 
} from "@/components/ui/sidebar"
import { sidebarData } from "@/data/sidebar-data"
import { usePathname } from "next/navigation"
import Link from "next/link"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const isActive =(url:string) => {
    return pathname === url;
  }
  return (
    <Sidebar {...props} className="mt-14">
      <SidebarHeader/> 
      <SidebarContent className="no-scrollbar">
        <SidebarGroup>
          <SidebarMenu>
            {sidebarData.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="font-medium pointer-events-none"> 
                    {item.title} 
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={isActive(item.url)}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent> 
    </Sidebar>
  )
}
