import ethers from "ethers";
import NetworkConfig from "../../subgraph-web3calender/networks.json";
import { abi } from "../../contracts-web3calender/artifacts/contracts/EventFactory.sol/EventFactory.json";
import { uploadToIpfs } from "../utils/ipfs";

export async function createEvent(
    signer: ethers.Signer,
    walletAddress: string,
    {
        startTime,
        endTime,
        attendees,
        title,
        description,
    }: {
        startTime: number;
        endTime: number;
        attendees: string[];
        title: string;
        description: string;
    }
) {
    const contract = new ethers.Contract(
        NetworkConfig.mumbai.EventFactory.address,
        abi,
        signer
    );
    const metadata = await uploadToIpfs({
        title: title,
        description: description,
    });
    await contract.createEvent(startTime, endTime, metadata, attendees);
}
