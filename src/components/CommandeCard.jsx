import React from 'react'
import pic from "../assets/image3.png";
import PrimaryButton from './PrimaryButton';
import CommandDetail from './CommandDetail';

const CommandeCard = () => {
  return (
    <div className='flex border justify-between border-thirdBlue text-firstBlue'>
        <div className='p-10'>
            <h1 className='text-xl font-semibold mb-3'>Cartes de visite standard</h1>
            <div>
                <CommandDetail title={"Dimensions"} description={"Standard (85 x 55 mm)"} />
                <CommandDetail title={"Papier"} description={"Mate"} />
                <CommandDetail title={"Grammage"} description={"Standard"} />
                <CommandDetail title={"Retour"} description={"Verso en couleur"} />
                <CommandDetail title={"Coins"} description={"Arrondi"} />
                <CommandDetail title={"Orientation"} description={"Horizontale"} />
                <CommandDetail title={"Date de creation"} description={"23-07-2023"} />
                <CommandDetail title={"N° d'identification"} description={"b4a25180-2816-4c50-a093-5b7013637ed0"} />
            </div>
            <div className='flex mt-3'>
                <button className='text-white bg-firstBlue w-5/12 sm:w-32 h-10 rounded-3xl mr-4'>Modifier</button>
                <button className='bg-white text-firstBlue w-5/12 sm:w-32 h-10 rounded-3xl border border-thirdBlue'>Supprimer</button>
            </div>
        </div>
        <div className='bg-slate-300'>
            <img className='h-full hidden lg:block' src={pic}/>
        </div>
    </div>
  )
}

export default CommandeCard