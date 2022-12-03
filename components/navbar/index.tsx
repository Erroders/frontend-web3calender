import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="/">
              <span className="text-2xl font-semibold">Cal3</span>
              <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </a>
          </div>
          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <ConnectButton
              chainStatus={"full"}
              label={"Connect Wallet"}
              showBalance={false}
              accountStatus={"full"}
            />
          </div>
          <div className="lg:hidden">
            <ConnectButton
              chainStatus={"icon"}
              label={"Connect Wallet"}
              showBalance={false}
              accountStatus={"avatar"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
