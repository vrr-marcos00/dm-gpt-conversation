import type { FC } from 'react'
import React from 'react'

import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'

import AppIcon from '../../app/chat/components/base/app-icon'

import { SidebarTrigger } from "@/components/ui/sidebar"

export type IHeaderProps = {
  isMobile?: boolean
  onCreateNewChat?: () => void
}

export function Header({ isMobile, onCreateNewChat }: IHeaderProps) {
  return (
    <header style={{ height: '100%', padding: '10px 0px', backgroundImage: 'linear-gradient(31deg, #F6BE00 50%, #FFDE6F 100%)' }} className="shrink-0 flex items-center justify-between h-12 px-3">
      {isMobile
        ? (
          <>
            <SidebarTrigger />
            <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
              onClick={() => onCreateNewChat?.()}
            >
              <PencilSquareIcon className="h-4 w-4 text-gray-500" />
            </div>
          </>

        )
        : (
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <SidebarTrigger />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://destruindometas.com.br/wp-content/uploads/2024/05/rodape-obj1.png.webp" width={150} />
              {/* <AppIcon size="small" />
                <div className=" text-sm text-gray-800 font-bold ml-2">{title}</div> */}
            </div>

            <div>
              <h1>Testeee</h1>
            </div>
          </div>
        )}
    </header>
  )
}