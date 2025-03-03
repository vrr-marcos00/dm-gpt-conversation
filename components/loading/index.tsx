import React from 'react';

export function Loading() {
  return (
    <div className="w-screen min-h-[calc(100vh_-_128px)] bg-white absolute flex justify-center items-center">
      <div className="w-[90px] h-[90px] bg-white flex justify-center items-center rounded-full border-black overflow-hidden relative">
        <div className="w-[90px] h-[90px] absolute inset-0 border-t-[3px] rounded-[50%] border-black animate-spin"></div>

        <img
          src="https://destruindometas.com.br/wp-content/uploads/2021/09/Logos-Destruindo-Metas_Simbolo-Amarelo-1024x1024.png.webp"
          alt="destruindo-metas-logo"
          width={35}
          className="relative"
        />
      </div>
    </div>
  )
}