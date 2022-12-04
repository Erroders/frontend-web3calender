import { ethers } from "ethers";

export async function resolveWalletAddress(
  searchValue: string
): Promise<String> {
  let result: String | null = "";

  if (searchValue.endsWith(".eth")) {
    result = await resolveENSDomain(searchValue);
  }

  return result ?? searchValue;
}

async function resolveENSDomain(domain: string): Promise<string | null> {
  try {
    const provider = ethers.getDefaultProvider();
    const address = await provider.resolveName(domain);
    return address;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function reverseResolveAddress(
  searchValue: string
): Promise<String> {
  let result: String | null = "";

  if (searchValue.startsWith("0x")) {
    result = await reverseEesolveENSDomain(searchValue);
  }

  console.log(result);

  return result ?? searchValue;
}

async function reverseEesolveENSDomain(ens: string): Promise<string | null> {
  const network = "homestead";

  try {
    const provider = ethers.getDefaultProvider(network, {
      alchemy: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    });
    const address = await provider.lookupAddress(ens);
    return address;
  } catch (error) {
    console.error(error);
  }
  return null;
}
