"use client"

import { usePathname, useRouter } from "next/navigation"
import { Image, LayoutDashboard, Brain } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  { name: "Image", icon: Image, path: "/" },
  { name: "Management", icon: LayoutDashboard, path: "/management" },
  { name: "AI", icon: Brain, path: "/ai" },
]

export default function SidebarComponent() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Sidebar className="w-64 border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-lg font-semibold">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    onClick={() => router.push(item.path)}
                    isActive={pathname === item.path}
                    className="w-full px-4 py-2 text-left"
                  >
                    <item.icon className="w-5 h-5 mr-3 inline-block" />
                    {item.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

