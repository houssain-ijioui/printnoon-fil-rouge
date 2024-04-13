import React from 'react'
import pic from "../assets/image3.png";
import PrimaryButton from './PrimaryButton';
import CommandDetail from './CommandDetail';
import { Link } from 'react-router-dom';

const CommandeCard = ({ nom, dimensions, papier, grammage, orientation, createdAt, fileUrl }) => {
  return (
    <div className='flex border justify-between border-thirdBlue text-firstBlue'>
        <div className='p-10'>
            <h1 className='text-xl font-semibold mb-3'>{nom}</h1>
            <div>
                <CommandDetail title={"Dimensions"} description={dimensions} />
                <CommandDetail title={"Papier"} description={papier} />
                <CommandDetail title={"Grammage"} description={grammage} />
                <CommandDetail title={"Orientation"} description={orientation} />
                <CommandDetail title={"Date de creation"} description={createdAt} />
            </div>
            <div className='flex mt-3'>
                <Link target='_blank' to={fileUrl} className='text-white bg-firstBlue text-center w-5/12 sm:w-36 h-10 rounded-3xl mr-4 pt-2'>Ouvrir le fichier</Link>
                <button className='bg-white text-firstBlue w-5/12 sm:w-32 h-10 rounded-3xl border border-thirdBlue'>Supprimer</button>
            </div>
        </div>
    </div>
  )
}

export default CommandeCard