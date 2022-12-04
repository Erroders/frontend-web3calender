import { useEffect } from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/navbar";
import { executeQuery } from "../utils/apolloClient";
import { fetchWeb3Events } from "../utils/queries/fetchWeb3Events";
import Calendar from "./calendar";

export default function Home() {
  //

  const { address, isConnected } = useAccount();

  useEffect(() => {
    // isConnected &&
    //   address != null &&
    executeQuery(
      fetchWeb3Events({
        creatorId: "0xb7d0e7f7d2bc77a3793e5ef39f4f4f2d2a8c3d42",
      })
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address, isConnected]);

  return (
    <div>
      <Navbar />
      <main>
        {/* 
      
        */}

        <Calendar />
      </main>
    </div>
  );
}
