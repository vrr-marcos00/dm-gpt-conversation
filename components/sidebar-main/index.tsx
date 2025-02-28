"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./components/nav-main"
import { NavProjects } from "./components/nav-projects"
import { NavUser } from "./components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
          url: "#",
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
    {
      title: "Documentos",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Documentos 1",
          url: "#",
        },
        {
          title: "Documentos 2",
          url: "#",
        },
        {
          title: "Documento 3",
          url: "#",
        },
        {
          title: "Documento 4",
          url: "#",
        },
      ],
    },
    {
      title: "Ajuda",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Falar com suporte",
          url: "#",
        },
        {
          title: "Enviar reclação",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "High Club 1",
      url: "#",
      icon: Frame,
    },
    {
      name: "High Club 2",
      url: "#",
      icon: PieChart,
    },
    {
      name: "High Club 3",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
