import React from 'react';


const AuthButton = ({ text, onClick }) => {
  return (
    <h1 className='text-white font-medium rounded-3xl w-4/5 min-w-96 bg-thirdBlue py-3 px-4 text-center cursor-pointer' onClick={onClick}>{text}</h1>
  )
}


export default AuthButton;