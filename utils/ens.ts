import { ethers } from "ethers";

export default async function resolveWalletAddress(
  searchValue: string
): Promise<String> {
  let result: String | null = "";

  if (searchValue.endsWith(".eth")) {
    result = await resolveENSDomain(searchValue);
  }

  return result ?? searchValue;
}

export async function resolveENSDomain(domain: string): Promise<string | null> {
  try {
    const provider = ethers.getDefaultProvider();
    const address = await provider.resolveName(domain);
    return address;
  } catch (error) {
    console.error(error);
  }
  return null;
}
