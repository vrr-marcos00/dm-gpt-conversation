import React from 'react'

import { useSidebar } from "@/components/ui/sidebar"

export function Footer() {
  const { isMobile } = useSidebar();

  return (
    <footer style={{ backgroundImage: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(29,29,29,1) 58%, rgba(17,17,17,0.8883928571428571)' }} className="shrink-0 flex items-center justify-between h-[64px] pt-[10px] pb-[10px]">
      <div />

      <div className='flex justify-center items-center'>

        {isMobile ? (
          <p className='font-sans font-bold text-xl text-white pl-[15px]'>Destruindo Metas</p>
        ) : (
          <>
            <img src="https://destruindometas.com.br/wp-content/uploads/2021/09/Logos-Destruindo-Metas_Simbolo-Amarelo-1024x1024.png.webp" alt="destruindo-metas-logo" width={35} />
            <p className='font-sans font-bold text-xl text-white pl-[15px]'>Transformando famílias e vidas através das vendas</p>
          </>
        )}
      </div>

      <div />
    </footer>
  )
}