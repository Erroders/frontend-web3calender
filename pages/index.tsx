import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/navbar";
import { executeQuery } from "../utils/apolloClient";
import { fetchWeb3Events } from "../utils/queries/fetchWeb3Events";
import { Web3Event } from "../utils/types";
import Calendar from "./calendar";

export default function Home() {
  const { address, isConnected } = useAccount();

  const [events, setEvents] = useState<Web3Event[]>([]);

  useEffect(() => {
    // isConnected &&
    //   address != null &&
    executeQuery(
      fetchWeb3Events({
        creatorId: "0xb7d0e7f7d2bc77a3793e5ef39f4f4f2d2a8c3d42",
      })
    )
      .then((res) => {
        // console.log(res);
        setEvents(res.web3Events as Array<Web3Event>);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [address, isConnected]);

  return (
    <div>
      <Navbar />
      <main>
        <Calendar meetings={events} />
      </main>
    </div>
  );
}
