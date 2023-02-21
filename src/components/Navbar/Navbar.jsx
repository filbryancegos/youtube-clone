import React, { useState, useEffect, useRef } from 'react'
import { logo, profile } from '../../assets';
import { MdMenu, MdOutlineSearch, MdHome } from "react-icons/md";
import './Navbar.css'
import Dropdwon from './Dropdwon';
import { useYouTubeContext } from '../../context/Context'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { handleOpenSidebar } = useYouTubeContext();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className='top__bar flex justify-between bg-white p-4 text-black items-center'>
        <div className="flex gap-6 items-center pl-3">
          <div onClick={handleOpenSidebar} className="header-burger"><MdMenu className='text-3xl' /></div>
          <a href='/'>
            <img className='w-28' src={logo} alt="" />
          </a>
        </div>

        <div className='flex items-center w-1/2'>
          <div className='border bg-transparent p-2 search__button w-full flex shadow-lg shadow-gray-200/50'>
            <input className='w-full focus:outline-none' type="text" name="" placeholder='Search' id="" />
          </div>
          <button className='search__button_icon border px-12 shadow-lg shadow-gray-200/50'><MdOutlineSearch className='text-2xl' /></button>
        </div>
    
        <div onClick={handleOpen}>
          <img className='profile__logo' src={profile} alt="" />
        </div>
        { open && 
          <Dropdwon handleClose={handleClose} />
        }
      </div>
    </>
    
  )
}

export default Navbar
