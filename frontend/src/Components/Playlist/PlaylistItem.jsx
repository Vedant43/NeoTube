import React from 'react'
import { getTimeAgo } from '../../utils/formattingTime'

export const PlaylistItem = ( {id, title, views, channelName, createdAt, thumbnailUrl, videoUrl } ) => {
  return (
    <div 
        className='flex gap-3 mb-2 border border-solid border-zinc-300 rounded-md'
    >
      <div
        className='flex items-center justify-center'
      >  
        <img 
            src={thumbnailUrl}
            className='object-cover rounded-md h-24 w-56'
        />
      </div>

      <div
        className='flex flex-col justify-evenly'
      >
        <div
            className='text-base'
        >
            {title}
        </div>

        <div 
            className='flex gap-2 text-gray-500 text-sm'
        >
            <span 
                className='text-gray-500'
            >
                {views} views
            </span>
            <span>
                &#8226;
            </span>
            <span>
              {getTimeAgo(createdAt)}
            </span>
        </div>

        <div
            className='text-sm'
        >
            {/* {channelName} */}
        </div>
      </div>

    </div>
  )
}