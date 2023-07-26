import React from 'react'
import Image from 'next/image'
import collage from "../components/asset/collage.jpg"
//import collage from '../../asset/collage.jpg'

export const Details = () => {
    
    return(
        <div className='h-full p-10 bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800 md:flex sm:grid justify-between overflow-hidden py-6 sm:py-12'>
            <div className='justify-center md:ml-14 '>
                <Image className='h-550px w-550px mx-auto' src={collage} alt='col' />
            </div>
            <br/>
            <br/>
            <div className=' text-blue-950 justify-center md:mt-10 text-center text-white'>
                <div className='lg:mr-12 sm:mt-7'>
                <h1 className=' text-blue-950 font-black text-2xl '>Merakee Hive NFT: Mint Details</h1>
                </div>
                <div className=' text-blue-950 lg:mr-9 mt-8'>
                    <ul className='grid gap-3.5'>
                        <li>
                            <h1 className='font-bold text-xl'>Free Mint</h1>
                    
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>Whitelist Sale: 2 per Wallet</h1>
                       
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>public Sale: 1 per Wallet</h1>
                        
                    </li>
                    <li>
                        <h1 className='font-bold text-xl'>No Discord </h1>

                     </li>
                     <li>
                        <h1 className='font-bold text-xl'>No RoadMap</h1>
                        
                     </li>
                     <li>
                        <h1 className='font-bold text-xl'>10% Royalties</h1>
                        
                     </li>
                     <li>
                        <h1 className='font-bold text-xl'>200 Reserved For Team</h1>
                        
                     </li>
                     <li>
                        <h1 className='font-black text-2xl ml-6'>Total Supply: 3,333</h1>
                        
                     </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}