import * as PushAPI from "@pushprotocol/restapi";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/navbar";
import { PushNotificationFeed } from "../utils/types";

const Notifications = () => {
  const { address, isConnected } = useAccount();
  const [notifications, setNotifications] = useState<PushNotificationFeed[]>();

  useEffect(() => {
    address &&
      PushAPI.user
        .getFeeds({
          user: `eip155:5:${address}`, // user address in CAIP
          env: "staging",
        })
        .then((res) => {
          setNotifications(res as PushNotificationFeed[]);
        });
  }, [address]);

  return (
    <div>
      <Navbar />

      <p>Notifications</p>
      <p>Connected to {address}</p>

      <p>{notifications ? "notifications" : "oops"}</p>
    </div>
  );
};

export default Notifications;
