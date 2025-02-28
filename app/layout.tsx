import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

import { SidebarProvider } from "@/components/ui/sidebar"

import { AppSidebar } from '../components/sidebar-main'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        <SidebarProvider>
          <AppSidebar />
          <main style={{ width: '100%', height: '100%' }}>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

