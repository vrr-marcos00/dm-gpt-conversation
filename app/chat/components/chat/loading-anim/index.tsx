'use client'

import s from './style.css'

import type { FC } from 'react'
import React from 'react'

export type ILoaidingAnimProps = {
  type: 'text' | 'avatar'
}

const LoaidingAnim: FC<ILoaidingAnimProps> = ({
  type,
}) => {
  return (
    <div className={`${s['dot-flashing']} ${s[type]}`}></div>
  )
}
export default React.memo(LoaidingAnim)
