import ethers from "ethers";
import { abi } from "../../contracts-web3calender/artifacts/contracts/Event.sol/Event.json";

enum RSVPResponse {
    YES = 1,
    NO = 2,
    MAYBE = 3,
}

export async function modifyStartTime(
    contractAddr: string,
    signer: ethers.Signer,
    time: string
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.modifyStartTime(time);
}
export async function modifyEndTime(
    contractAddr: string,
    signer: ethers.Signer,
    time: string
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.modifyStartTime(time);
}

export async function modifyEvent(
    contractAddr: string,
    signer: ethers.Signer,
    {
        title,
        description,
    }: {
        title: string;
        description: string;
    }
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    const metadataCid = "";
    await contract.modifyStartTime(metadataCid);
}

export async function invite(
    contractAddr: string,
    signer: ethers.Signer,
    attendeeAddr: string
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.invite(attendeeAddr);
}

export async function uninvite(
    contractAddr: string,
    signer: ethers.Signer,
    attendeeAddr: string
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.uninvite(attendeeAddr);
}

export async function rsvp(
    contractAddr: string,
    signer: ethers.Signer,
    response: RSVPResponse
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.rsvp(response);
}

export async function addComment(
    contractAddr: string,
    signer: ethers.Signer,
    comment: string
) {
    const contract = new ethers.Contract(contractAddr, abi, signer);
    await contract.addComment(comment);
}
