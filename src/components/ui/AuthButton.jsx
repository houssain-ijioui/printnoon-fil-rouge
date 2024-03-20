import React from 'react';


const AuthButton = ({ text, onClick }) => {
  return (
    <button type='submit' className='text-white font-medium rounded-3xl w-4/5 min-w-96 bg-thirdBlue py-3 px-4 text-center cursor-pointer' onClick={onClick}>{text}</button>
  )
}


export default AuthButton;