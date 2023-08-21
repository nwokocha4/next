import React from 'react'
import Image from 'next/image'
import collage from "../components/asset/collage.jpg"

export const About = () => {

    return(
        
        <div className='h-full  bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800 md:flex sm:grid justify-between overflow- bl-4 p-10 py-6 sm:py-12'>
            
            <div className=' justify-center md:mt-16 md:ml-20 sm:ml-8 text-white '>
                <div className=' text-indigo-200 lg:mr-12 text-center'>
                <h1 className='font-black text-2xl md:text-center '>Merakee Hive NFT collection Intro</h1>
                <p className='font-bold text-xl'>Merakee Hive NFT is an exclusive collection of <br /> 10,000 NFT masterpiece that enhanced the alpha boss spirit in you.   </p>
                </div>
                <div className=' text-indigo-200 lg:mr-9 mt-8 text-center'>
                    <ul className='grid gap-5.5 '>
                        <li>
                            <h1 className='font-bold text-xl'>You Are The Boss</h1>
                    <p className='font-semibold text-base'>Your decision is of utmost importance in the family.</p>
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>Family First</h1>
                        <p className='font-semibold text-base'>The family comes before everything and anything.</p>
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>Be Faithful Unto Death</h1>
                        <p className='font-semibold text-base'>Live for the family, die for the Family.</p>
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>Be a Man/Woman of Honour </h1>
                    <p className='font-semibold text-base'>Nahners Maketh Nah
                    <br />
                     like the secret agent said. </p>
                     </li>
                     <li>
                        <h1 className='font-bold text-xl'>Be Honest And Good</h1>
                        <p className='font-semibold text-base'>One`s action determines their character.</p>
                     </li>
                    </ul>
                </div>
            </div>
            <br/>
            <br/>
            <div className='justify-center md:mr-14 '>
                <Image className='h-550px w-550px mx-auto sm:mt-5' src={collage} alt='col'/>
            </div>
        </div>
    )
}