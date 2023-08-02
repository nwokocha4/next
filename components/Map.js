import React from 'react';
import Image from 'next/image';
import map from "../components/asset/map.png"

export const Map = () => {
    
    return(
        <div className='h-full md:h-screen mx-auto justify-center content-center bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800'>
            
              <h1 className=' text-center text-gray-900 font-black text-3xl'></h1>
            <div className=' md:pt-32  p-5 '>
              
            <Image src={map} className=' justify-center mx-auto md:h-80 w-auto md:p-12 bg-sky-500 ' alt='map' />
            
            </div>
        </div>
    )
}