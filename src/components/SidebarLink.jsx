import React from 'react'
import { Link } from 'react-router-dom'


const SidebarLink = ({ link, text }) => {
  return (
    <div className='hover:bg-thirdBlue px-1 py-2 rounded-lg lg:w-7/12 md:w-10/12 sm:8/12 w-52'>
        <Link className='font-semibold text-firstBlue' to={link}>{text}</Link>
    </div>
  )
}

export default SidebarLink;
