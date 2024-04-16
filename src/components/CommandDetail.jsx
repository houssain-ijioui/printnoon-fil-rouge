import React from 'react'

const CommandDetail = ({ title, description }) => {
  return (
    <div className="flex mt-3 md:mt-0">
        <h1 className='font-semibold mr-2'>{title}:</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default CommandDetail;
