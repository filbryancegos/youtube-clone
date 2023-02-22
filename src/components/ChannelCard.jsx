import React from 'react'
import { MdCheck } from "react-icons/md";

export default function ChannelCard({ channelDetail, marginTop }) {
  return (
    <>
      <div className='flex flex-col'>
        <img className='rounded-lg h-52 object-cover' src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt="" />
        <h5 className="mt-3 font-medium text-lg">{channelDetail?.snippet?.title}</h5>
        <div className="flex gap-2 items-center">
        <h6 className="mt-1 font-medium text-md text-gray-500">{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')}</h6>
        <span className='bg-gray-700 h-4 w-4 flex items-center rounded-full justify-center mt-2'><MdCheck className='text-white' style={{fontSize: '12px'}} /></span>
        </div>
      </div>
    </>
  )
}
