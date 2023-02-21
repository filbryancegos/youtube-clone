import React, { useRef, useEffect, } from 'react'
import { profile } from '../../assets';
import { MdSupervisedUserCircle, MdPlayCircleFilled } from "react-icons/md"

const Dropdwon = ({ handleClose }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose && handleClose()
      } 
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
    document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ handleClose ]);

  return (
    <div ref={ref} className='profile__dropdown'>
      <div className='header flex gap-2 p-4'>
        <img className='profile__logo' src={profile} alt="" />
        <div className='flex flex-col'>
          <span>Bogulz TV</span>
          <span>@bogulztv8554</span>
          <a href="#"><span>Manage your Google Account</span></a>
        </div>
      </div>
      <div className='container mt-6 border-t p-4'>
        <div className="flex gap-6 items-center text-lg mb-3">
          <span><MdSupervisedUserCircle className='text-2xl' /></span>
          <span>Your channel</span>
        </div>
        <div className="flex gap-6 items-center text-lg mb-3">
          <span><MdPlayCircleFilled className='text-2xl' /></span>
          <span>Your channel</span>
        </div>
      </div>
    </div>
  )
}

export default Dropdwon
