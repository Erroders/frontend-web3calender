/// only used for creating your custom paymaster
import { IPaymasterAPI, ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { ethers } from "ethers";

export async function initSmartContract(
    provider: ethers.providers.Web3Provider,
    address: string
) {
    let activeChainId = ChainId.POLYGON_MUMBAI;
    const supportedChains = [ChainId.POLYGON_MUMBAI];

    let options = {
        activeNetworkId: activeChainId,
        supportedNetworksIds: supportedChains,
        // Network Config.
        // Link Paymaster / DappAPIKey for the chains you'd want to support Gasless transactions on
        networkConfig: [
            {
                chainId: ChainId.POLYGON_MUMBAI,
                dappAPIKey: "<DAPP_API_KEY>",
                // check in the beginning of the page to play around with testnet common keys
                // customPaymasterAPI: <IPaymaster Instance of your own Paymaster>
            },
        ],
    };

    let smartAccount = new SmartAccount(provider, options);
    smartAccount = await smartAccount.init();
    return smartAccount;
}

export async function execGassless(
    functionCall: string,
    callName: string,
    args: string[],
    contractAddr: string
) {
    const callInterface = new ethers.utils.Interface([functionCall]);

    // Encode an ERC-20 token transfer to recipient of the specified amount
    const data = callInterface.encodeFunctionData(callName, [...args]);

    const tx1 = {
        to: contractAddr,
        data,
    };

    // Transaction subscription

    smartAccount.on("txHashGenerated", (response: any) => {
        console.log("txHashGenerated event received via emitter", response);
        showSuccessMessage(`Transaction sent: ${response.hash}`);
    });

    smartAccount.on("txMined", (response: any) => {
        console.log("txMined event received via emitter", response);
        showSuccessMessage(`Transaction mined: ${response.hash}`);
    });

    smartAccount.on("error", (response: any) => {
        console.log("error event received via emitter", response);
    });

    // Sending transaction

    // Gasless
    const txResponse = await smartAccount.sendGasLessTransaction({
        transaction: tx1,
    });
}
// Initialize the Smart Account
