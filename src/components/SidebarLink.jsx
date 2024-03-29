import React from 'react'
import { Link } from 'react-router-dom'


const SidebarLink = ({ link, text }) => {
  return (
    <div className='hover:bg-thirdBlue py-2 rounded-lg lg:w-10/12 md:w-11/12 sm:8/12 w-44 pl-2'>
        <Link className='font-semibold text-firstBlue text-xs md:text-base' to={link}>{text}</Link>
    </div>
  )
}

export default SidebarLink;
