import React from 'react'
import { useYouTubeContext } from '../context/Context'
import { Videos } from './'

export default function Feed() {
  const { state } = useYouTubeContext();
  return (
    <>
      <Videos />
    </>
  )
}

