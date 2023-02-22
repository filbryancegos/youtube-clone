import React, { useEffect } from 'react'
import ReactPlayer from "react-player";
import { MdCheck } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useYouTubeContext } from '../context/Context'

export default function VideoDetail() {
  const { getVedioDetailsId, state } = useYouTubeContext();
  const { id } = useParams();
  
  useEffect(() => {
    getVedioDetailsId(id)
  }, [id])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pr-32'>
      <div className='col-span-1 md:col-span-2'>
        <ReactPlayer style={{width: '100%'}} url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        <h5 className="mt-3 font-medium text-lg">{state.videoDetails[0]?.snippet?.title}</h5>
        <div className="flex gap-2 items-center">
        <h6 className="mt-1 font-medium text-md text-gray-500">{state.videoDetails[0]?.snippet?.channelTitle}</h6>
        <span className='bg-gray-700 h-4 w-4 flex items-center rounded-full justify-center mt-2'><MdCheck className='text-white' style={{fontSize: '12px'}} /></span>
        </div>
      </div>
      <div className='col-span-1'>
        {state.videos?.map((item, id) =>
           <>
           <Link to={item.snippet?.channelId ? `/video/${item.snippet?.channelId}` : `/video/cV2gBU6hKfY`}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><img className='rounded-lg h-52 object-cover w-full' src={item.snippet?.thumbnails?.high?.url} alt="" /></div>
              <div className='flex flex-col'>
                <h4 className='font-bold'> {item.snippet?.title.slice(0, 60)}</h4>
                <span className='mt-2'>{item.snippet?.channelTitle.slice(0, 60)}</span>
              </div>
            </div>
            </Link>
            </>
        )}
      </div>
    </div>
  )
}
