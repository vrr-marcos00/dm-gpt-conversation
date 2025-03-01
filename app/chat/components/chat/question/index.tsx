'use client'

import s from '../style.css'

import type { FC } from 'react'
import React from 'react'
import type { IChatItem } from '../type'

import { Markdown } from '../../base/markdown'
import ImageGallery from '../../base/image-gallery'

type IQuestionProps = Pick<IChatItem, 'id' | 'content' | 'useCurrentUserAvatar'> & {
  imgSrcs?: string[]
}

const Question: FC<IQuestionProps> = ({ id, content, useCurrentUserAvatar, imgSrcs }) => {
  const userName = ''
  return (
    <div className='flex items-start justify-end pb-[20px]' key={id}>
      <div>
        <div className={`${s.question} relative text-sm text-gray-900`}>
          <div
            className={'mr-2 py-3 px-4 bg-white rounded-tl-2xl rounded-b-2xl'}
          >
            {imgSrcs && imgSrcs.length > 0 && (
              <ImageGallery srcs={imgSrcs} />
            )}
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Question)
