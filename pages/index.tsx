import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <ConnectButton
          chainStatus={"icon"}
          label={"Connect Wallet"}
          showBalance={false}
          accountStatus={"full"}
        />
      </div>
    </div>
  );
}
