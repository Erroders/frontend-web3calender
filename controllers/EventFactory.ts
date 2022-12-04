import ethers from "ethers";
import NetworkConfig from "../../subgraph-web3calender/networks.json";
import { abi } from "../../contracts-web3calender/artifacts/contracts/EventFactory.sol/EventFactory.json";

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
        startTime: string;
        endTime: string;
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
    const metadata = "";
    await contract.createEvent(startTime, endTime, metadata, attendees);
}
