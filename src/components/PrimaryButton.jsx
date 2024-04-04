import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";

const PrimaryButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='bg-firstBlue text-white font-semibold flex w-28 h-10 pl-3 items-center rounded-3xl'>
            {text} <FaCirclePlus className='w-5 h-5 ml-2' color='white' />
        </button>
    )
}

export default PrimaryButton;
