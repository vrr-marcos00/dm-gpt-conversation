'use client'

import React from 'react'

import './styles/globals.css'
import './styles/markdown.scss'

import { SidebarProvider } from "@/components/ui/sidebar"

import { AppSidebar } from '@/components/sidebar-main'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main style={{ width: '100%', height: '100%' }}>
            <Header />
            <div className="min-h-[calc(100vh_-_128px)] max-h-[calc(100vh_-_128px)]">
              {children}
            </div>
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

