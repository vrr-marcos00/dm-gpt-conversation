import React from 'react'


import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header style={{ backgroundImage: 'linear-gradient(31deg, #F6BE00 50%, #FFDE6F 100%)' }} className="shrink-0 flex items-center justify-between h-[64px] pt-[10px] pb-[10px]">
      <div className="w-[50px]">
        <SidebarTrigger />
      </div>

      <div>
        <img src="https://destruindometas.com.br/wp-content/uploads/2024/05/rodape-obj1.png.webp" width={140} />
      </div>

      <div className="w-[50px]"></div>
    </header>
  )
}