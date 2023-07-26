import React, { useState } from "react"
 import { networkConfigs, useNotification } from "web3uikit"
import { useContract, useContractRead, useContractWrite, useAddress } from "@thirdweb-dev/react";
//import { getProofForAddress } from "../lib/whitelist";
//import { walletAddress } from "../../constants";
//import { Link } from "react-router-dom";
//import { walletAddress } from "../lib/constants/"
//import { walletAddress } from "@/constants";
import { walletAddress } from "@/pages/constant";
import { getProofForAddress } from "@/lib/whitelist";
//import { getProofForAddress } from "../lib/whitelist"
import Link from "next/link";




export const MintContainer = () => {
  // const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
  // const chainId = parseInt(chainIdHex)
  //  console.log(`ChainId is ${chainId}`)
  // const raffleAddress = chainId in contractAddress ? contractAddress[chainId][0] : null
  // console.log(raffleAddress)

  // const [mintFee, setMintFee] = useState("")
  //const [maxSupply, setMaxSupply] = useState("")
  
 

  // const { runContractFinction: whitelistMint,
  //   data: enterTxResponse,
  //   isLoading,
  //   isFetching,
  // } = useWeb3Contract({
  //   abi: abi,
  //   contractAddress: contractAddress,
  //   functionName: "whitelistMint",
  //   msgValue: mintFee,
  //   param: {}
  // })

  // const { runContractFunction: price } = useWeb3Contract({
  //   abi: abi,
  //   contractAddress: raffleAddress,
  //   functionName: "price",
  //   params: {},
  // })

  //  



  // async function updateUIValues() {
  //   const mintFeeCall = (await setCost())
  //   console.log(mintFee);
  //   const maxSupplyCall = (await totalSupply()).toString()
  //   const whitelistMintcall = (await whitelistMint())
  //   setMintFee(mintFeeCall)
  //   setMaxSupply(maxSupplyCall)


  

//   useEffect(() => {
//     if (isWeb3Enabled) {
//        async function updateUIValues() {
//        const mintcall = (await price())
//        setMintFee(mintcall)
//         console.log(mintFee)
//       }
//       updateUIValues()
//     }
// }, [isWeb3Enabled])
// const getChainID = async () => {
  
//   if (chainId !== 1 || 5) {
//     console.log("change network to eth")
//   }
// }





const { contract } = useContract("0x9E57705d4b9927A53D4E87baFcCF40937D844D10");


// Notification using web3uikit
const dispatch = useNotification()

const [whitelisted, setWhitelisted] = useState(walletAddress);


//const connectionStatus = useConnectionStatus();
const Waddress = useAddress();



const { data: whitelististClaimed } = useContractRead(contract,
  "whitelistClaimed",
  [
       Waddress  
  ]
  )
//console.log(whitelististClaimed)


  

const { data: cost } = useContractRead(contract, "cost");
const realData = parseInt(cost);
//console.log(realData);



const { data: maxSupply } = useContractRead(contract, "maxSupply")
const supply = parseInt(maxSupply)
//console.log(supply)



const { data: totalSupply } = useContractRead(contract, "totalSupply")
const totalMinted = parseInt(totalSupply)
//console.log(totalMinted)


const {data: maxMintAmountPerTx } = useContractRead(contract, "maxMintAmountPerTx")
const _mintAmount = parseInt(maxMintAmountPerTx)
//console.log(_mintAmount)

const _merkleProof = getProofForAddress(Waddress)
 //console.log(_merkleProof)

 const { data: whitelistMintEnabled } = useContractRead(contract, "whitelistMintEnabled")
//console.log(whitelistMintEnabled);

// const setMintEnable = () => {
//   if(whitelistMintEnabled !== false) {
//     return(<div className="h-5 w-10 bg-green-500">Live</div>)
//   }
//   {
//     return(<div className="h-5 w-10 bg-red-500">Live</div>)
//   }
// }


 // CHECKS IF WALLET IS WHITELISTED
 const isFound = whitelisted.some(element => {
  if (element === Waddress) {
      return true;
  } 
})




         // Whitelist MINT
const { mutateAsync: whitelistMint, isLoading } = useContractWrite(contract, "whitelistMint");

const call = async () => {
   if (isFound !== true ) {
    walletNotWhitelisted()
   } else 
   
   {

  try {
  
    const data = await whitelistMint({ args: [_mintAmount, _merkleProof] });

    

   // console.log(data.receipt.transactionHash);
    const goerliLink = `https://goerli.etherscan.io/tx/${data.receipt.transactionHash}`;
    const mainnetLink =`https://etherscan.io/tx/${data.receipt.transactionHash}`;

    const goerliNotification = () => {
      dispatch({
        type: "info",
        message: (
          <Link to={goerliLink} target="_blank" rel="noopener noreferrer">
           {goerliLink}
          </Link>
        ),
        title: "Mint Successful (Goerli)",
        position: "topR",
        icon: "bell",
      })
    }

    const mainnetNotification = () => {
      dispatch({
        type: "info",
        message: (
          <Link to={mainnetLink} target="_blank" rel="noopener noreferrer">
           {mainnetLink}
          </Link>
        ),
        title: "Mint Successful",
        position: "topR",
        icon: "bell",
      })
    }

   

   // generateTransaction(data.receipt.transactionHash);
    
   goerliNotification()
    
  }
  catch (err) {
    console.error("contract call failure", err)
  }
   }
};

    // Notification

const addressClaimed = () => {
  dispatch({
    type: "info",
    message: "Adress already claimed, wait for publicSale",
    title: "Notification",
    position: "topR",
    icon: "bell",
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

const handleClaim = () => {
  if(whitelististClaimed === true) {
    addressClaimed()
  }
  {
    console.log("claim nft")
  }
}

const handleNotification = () => {
  dispatch({
    type: "info",
    message: generateTransaction(),
    title: "Transaction Notification",
    position: "topR",
    icon: "bell",
  })
}

const generateTransaction = (transactionHash) => {
 return networkConfigs.blockExplorerUrl.generateTransactionUrl(transactionHash)
}

// const mintStatus = () => {
//   if (whitelistMint === open) {
//     return(
//       <div className="bg-red">Live</div>
//     )
//   }
//   {
//     return(<div className="bg-green">Live</div>)
//   }
// }

// const handleSuccess = async () => {
//   try {
//     await tx.wait(1)
    

//     handleNotification(tx)
//   }
//   catch (error) {
//     console.log(error)
//   }
// }



    return(
        <div className="container max-w-screen-lg md:mx-auto">
             <div className="h-fully rounded-md justify-center mb-5 text-center">
             <br/>
             <br/>
                    
                    <h1 className="font-black text-xl text-gray-950">Merakee Hive NFT Collection</h1>                                               
                    
                    <br/>
                  
                    <h1 className="font-black text-gray-950 text-2xl">MINT is <span>
                     {whitelistMintEnabled !== false  ? (<span className="h-5 w-13 bg-green-500 rounded-md ">Live</span>) : (<span className="h-5 w-10 bg-red-500">Not Live</span>)}
                     </span> 
                    </h1>
                    <br/>
                    
                     <h1 className="font-black text-xl text-gray-950">Price: {realData} ETH</h1>
                    <br/>
                    <h1 className="font-black text-xl text-gray-950 ">Max Mint per Wallet:<span> {_mintAmount} </span></h1>
                    
                    <br/>
                    <h1 className="text-xl font-black text-gray-950"> {totalMinted} / {supply} MINTED</h1>
                    <br/>
                    <button onClick={async () => { 
                      
                      if(whitelististClaimed !== true ) {
                     await call()
                    } 
                    {                    
                    handleClaim()
                    }
                  } 
                    
                  
                  }
                  className="text-white h-10 w-32 justify-self-auto content-center bg-purple-900 hover:bg-blue-800 focus:ring-4 rounded-lg  mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none font-black text-2xl"
                    >MINT</button>
                    <br/>
                    
                  
                    
                    
                
                </div>
        </div>
    )
}