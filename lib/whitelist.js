//import { walletAddress } from "../../constants";
//import { walletAddress } from "../constants/walletAddress.json"
import { walletAddress } from "@/pages/constant";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";




function getMerkleTree() {
const leafNodes = walletAddress.map(addr => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

return merkleTree
}

function getProofForAddress(address) {
    return getMerkleTree().getHexProof(keccak256(address))
}

export { getProofForAddress }