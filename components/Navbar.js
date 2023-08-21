import React, { useState } from 'react';
import Image from 'next/image';
// import { useState } from 'react';
import Link from 'next/link';
import merake from "../components/asset/merake.png"
//import merake from '../asset/merake.png';
// import accountContext from './context';
// import { Home } from './pages/Home';
// import { useMoralis } from 'react-moralis';
// import { useEffect } from 'react';
// import { ConnectButton } from 'web3uikit';
import { ConnectWallet } from "@thirdweb-dev/react";






//bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800


function Navbar() {
    
  
 

// const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 } = useMoralis()


// useEffect(() => {
//   if (isWeb3Enabled) return
// console.log(isWeb3Enabled)
// if(typeof window !== "undefined") {
//   if (window.localStorage.getItem("connected")) {
//    enableWeb3()
//   }
  
// }
// }, [isWeb3Enabled])

// useEffect(() => {
// Moralis.onAccountChanged((account) => {
//   console.log(`Account changed to ${account}`)
//   if (account == null ) {
//     window.localStorage.removeItem("connected")
//     deactivateWeb3()
//     console.log("null account found")
//   }
// })
// }, [])
//   const [account, setAccount] = useState('');
// const [provider, setProvider] = useState(null);

//   const initConnection = async () => {
//     if(typeof window.ethereum !== "undefined"){
//       console.log("you have metamask");
//    const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//      });
//     // const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
//      //setProvider(tempProvider);
//      setAccount(accounts[0]);  //[0]
//      console.log(accounts);
//     }
//     else {
//       console.log('please install metamask');
//       return (
//         <div>Install metamask</div>
//       )
//     }
    
//   };
//const [showNavSecond, setShowNavSecond] = useState(false);

    const [navbar, setNavbar] = useState(false);
  //console.log{ConnectWallet}
    return (
        <div className='relative'>
      <nav className="fixed w-full bg-gradient-to-r from-indigo-600 to-pink-300 via-purple-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                    <Link href="#home" scroll={false} className="flex items-center  sm:mb-0">
                    <Image src={merake} alt='mera' className="h-1o w-10 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-100">Merakee Hive</span>
        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link 
                                href="#home"
                                scroll={false}                                 
                                 >Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link 
                                href="#about"
                                scroll={false}
                                >About</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link 
                                href="#details"
                                scroll={false}
                                >Details</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link 
                                href="#map"
                                scroll={false}
                                >Map</Link>
                            </li>
                           
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                 
                  <ConnectWallet/>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                   
                  <ConnectWallet/>
                </div>
            </div>
        </nav>
        </div>
  )
}



export default Navbar;


//       <div>
// <ConnectWallet  />
// </div>