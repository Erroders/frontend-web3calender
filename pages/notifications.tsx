import * as PushAPI from "@pushprotocol/restapi";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Navbar from "../components/navbar";
import NotificationCard from "../components/push/NotificationCard";
import { PushNotificationFeed } from "../utils/types";

const Notifications = () => {
  const { address, isConnected } = useAccount();
  const [notifications, setNotifications] = useState<PushNotificationFeed[]>(
    []
  );

  useEffect(() => {
    address &&
      PushAPI.user
        .getFeeds({
          user: `eip155:5:${address}`, // user address in CAIP
          env: "staging",
        })
        .then((res) => {
          console.log(res);

          setNotifications(res as PushNotificationFeed[]);
        });
  }, [address]);

  // console.log(notifications);

  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-screen-xl p-4">
        <h2 className="mb-6 mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          Notifications
        </h2>

        {notifications.map((value, index) => {
          return <NotificationCard data={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Notifications;
