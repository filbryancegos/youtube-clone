import React from 'react'
import { useYouTubeContext } from '../context/Context'
import { VideoCard } from './'


export default function Videos() {
  const { state } = useYouTubeContext();
  const { videos } = state;

  console.log(videos);
  return (
    <>
      <h1 className='text-2xl font-bold'>New <span className='text-gray-500'>videos </span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-4'>
        {videos?.map((item, idx) =>
          <div key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
          </div>
        )}
        
      </div>
    </>
  )
}
