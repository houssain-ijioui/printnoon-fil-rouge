import React from 'react'
import picture from "../assets/image2.png"

const Card = ({ nom, createdAt }) => {
  const date = new Date(createdAt)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return (
    <div className='flex flex-col border border-thirdBlue bg-slate-200 rounded-xl'>
        <img className='h-9/12 self-center border border-b-thirdBlue rounded-xl w-full p-3' src={picture}/>
        <div className='p-3'>
          <h2 className='font-semibold text-firstBlue'>{nom} </h2>
          <h4 className='font-light'>{`${year}-${month}-${day}`}</h4>
        </div>
    </div>
  )
}

export default Card