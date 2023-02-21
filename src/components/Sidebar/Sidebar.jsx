import React, { useRef, useEffect, useState } from 'react'
import './Sidebar.css';
import { logo } from '../../assets';
import { MdMenu, MdHome } from "react-icons/md";
import { useYouTubeContext } from '../../context/Context'
import { categories  } from '../../utils/constants';

export default function Sidebar() {
  const ref = useRef(null)
  const { state, handleCloseSidebar, setSelectedCategory } = useYouTubeContext();
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseSidebar && handleCloseSidebar()
        setSelectedMenu(null)
      } 
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
    document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ handleCloseSidebar ])

  const categoryItems = categories.map((item, id) => 
    <>
      <div
        onClick={() => setSelectedCategory(item.name)} key={id} 
        className={`hover:bg-gray-100 rounded-lg cursor-pointer ${state.category === item.name && 'bg-gray-100'}`}>
        <div className='flex items-center gap-8 px-3 py-3'>
          <span>{item.icon}</span>
          <span className='text-xl'>{item.name}</span>
        </div>
      </div>
      {id === 2 && <hr />}
      {id === 6 && <hr />}
    </>
  );

  const menuItems = categories.slice(0, 7).map((item, id) =>
    <>
      <div 
        key={id}
        onClick={() => setSelectedCategory(item.name)}
        className={`flex justify-center hover:bg-gray-200 py-4 sidebar__wrap_left-menu cursor-pointer ${selectedMenu === item.name && 'bg-gray-100'}`}>
          <div className='flex items-center flex-col'>
            {item.icon}
            <div className='text-sm'>{item.name}</div>
          </div>
      </div>
    </>
  );
 
  return (
    <>
      <div ref={ref} className={`sidebar__wrap py-2 px-4 ${state.isSideBar ? 'open' : ''}`}>
        <div className='sidebar__wrap_header flex'>
          <div className="flex gap-6 items-center">
            <div onClick={handleCloseSidebar} className="sidebar__wrap_header-burger"><MdMenu className='text-3xl' /></div>
            <a href='/'>
              <img className='w-28' src={logo} alt="" />
            </a>
          </div>
        </div>
        <div className='flex justify-start flex-col'>
          {categoryItems}
        </div>
      </div>

      <div className='sidebar__wrap_left py-5 ml-2 flex flex-col gap-1'>
        {menuItems}
      </div>
    </>
    
  )
}



