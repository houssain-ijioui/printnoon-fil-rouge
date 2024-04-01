import React from 'react'

const CommandDetail = ({ title, description }) => {
  return (
    <div className="flex">
        <h1 className='font-semibold mr-2'>{title}:</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default CommandDetail;
