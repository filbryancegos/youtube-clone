import React from 'react'
import { MdCheck } from "react-icons/md";

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <>
      <div className='flex flex-col'>
        <img className='rounded-lg h-52 object-cover' src={snippet?.thumbnails?.high?.url} alt="" />
        <h5 className="mt-3 font-medium text-lg">{snippet?.title.slice(0, 60)}</h5>
        <div className="flex gap-2 items-center">
        <h6 className="mt-1 font-medium text-md text-gray-500">{snippet?.channelTitle}</h6>
        <span className='bg-gray-700 h-4 w-4 flex items-center rounded-full justify-center mt-2'><MdCheck className='text-white' style={{fontSize: '12px'}} /></span>
        </div>
      </div>
    </>
  )
}
