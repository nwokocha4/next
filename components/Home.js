import React from "react";
import { useState, useEffect } from "react";
//import { MintContainer } from "../pages/mintContainer";
import { MintContainer } from "./mintContainer";
//import { useNotification } from 'web3uikit';
import { useNotification } from "web3uikit";
import { useConnectionStatus, useAddress, useChainId } from "@thirdweb-dev/react";
//import { walletAddress } from "../../constants";
//import { walletAddress } from "@/constants";
import { walletAddress } from "@/pages/constant";

export const Homes = () => {
    const [isShown, setIsshown] = useState(false);

    const [whitelisted, setWhitelisted] = useState(walletAddress);

    const connectionStatue = useConnectionStatus()

    const dispatch = useNotification();

    const Waddress = useAddress();

    const chainId = useChainId();
    //console.log(chainId);

    
    
    
   
    

    const connectWallet = () => {
        dispatch({
          type: "info",
          message: "Connect Metamask!!!",
          title: "Notification",
          position: "topR",
        
        })
      }

      const walletNotWhitelisted = () => {
        dispatch({
          type: "info",
          message: "wallet is not whitelisted",
          title: "Notification",
          position: "topR",
        
        })
      }

      const getChainIDNoti = () => {
        dispatch({
            type: "info",
            message: "wrong network",
            title: "Notification",
            position: "topR",
             
        })
    }

    if (connectionStatue === "connected") {
        if (chainId === undefined) {
           console.log("connect wallet")
        } else {
            if (chainId !== 5 && chainId !== 1) {
                getChainIDNoti();
            }
        }
    }

    // if (connectionStatue === "connected") {
    //     if (chainId !== 5) {
    //         getChainIDNoti()
    //     } else {
            
    //     }
    // }

    const isFound = whitelisted.some(element => {
        if (element === Waddress) {
            return true;
        } 
    })


    const handleClick = event => {
        if (connectionStatue === "connected") { 
        setIsshown(true)
        if (isFound !== true) {
            walletNotWhitelisted()
        }
       
        } else
        {
            connectWallet()
        }
    
        //(current => !current)
    }

    useEffect(() => {
        if (connectionStatue !== "connected") {
          setIsshown(false)
        }
            
        
    }, [connectionStatue])
    // if( ConnectButton !== true) {
    //    return(<MintContainer/> == false)
    //    //search on how to use an if statement to render a component
    // } 
    // {
    //     return(<MintContainer/> == true)
    // }
        // const accounts = useContext(accountContext);
        // if (accounts !== '') {
        //     return (
        //         <div>home</div>
        //     )
        // } else
        // {
        //     return(
        //         <div>connect wallet</div>
        //     )
        // }
    

    return(
        <div className="h-screen place-items-center  bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800 ">
           
            <div className="grid sm:mx-auto content-end place-items-center h-screen">
                <div className="pb-3">
            {isShown && (
                
                <MintContainer />
                
            )}
            </div>
            <button onClick={handleClick} 
            type="button" 
            class="text-white h-20 w-72 justify-self-auto bg-purple-300 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 mb-28 md:mb-20 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none font-black text-2xl dark:focus:ring-blue-800">MINT NOW</button>
            
            </div>
        </div>
    )
}