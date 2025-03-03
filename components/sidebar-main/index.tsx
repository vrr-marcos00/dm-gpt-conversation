"use client"

import * as React from "react"
import {
  Bot,
  Instagram,
  Youtube,
  Linkedin,
  TvMinimal
} from "lucide-react"

import { NavMain } from "./components/nav-main"
import { NavProjects } from "./components/nav-projects"
import { NavUser } from "./components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Giovanne Saraiva",
    email: "giovanne-teste@gmail.com",
    avatar: "https://yt3.googleusercontent.com/cpQRoWdrV4eCmtJJtlcN9YIKAZ0hWzkII9QoUyr4HI66A6wr7jbISpxyLBHrLM5Q1qzhqhkA8qA=s900-c-k-c0x00ffffff-no-rj",
  },
  navMain: [
    {
      title: "Chatbots",
      url: "#",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Contorno de objeções",
          url: "/chat?type=CHAT_JORDAN",
        },
        {
          title: "Chatbot 2",
          url: "#",
        },
        {
          title: "Chatbot 3",
          url: "#",
        },
      ],
    },
  ],
  socialMedia: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/destruindometas.br",
      icon: Instagram,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/c/GiovanneSaraiva",
      icon: Youtube,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/destruindo-metas/?originalSubdomain=br",
      icon: Linkedin,
    },
    {
      name: "Site - Destruindo Metas",
      url: "https://destruindometas.com.br",
      icon: TvMinimal,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarContent >
        <NavMain items={data.navMain} />
        <NavProjects projects={data.socialMedia} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
