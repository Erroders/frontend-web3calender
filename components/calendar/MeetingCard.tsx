import { Menu, Transition } from "@headlessui/react";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

import { format, fromUnixTime } from "date-fns";
import { Fragment } from "react";
import { classNames } from "../../utils/calendarParsers";
import { Web3Event } from "../../utils/types";

const MeetingCard = ({ meeting }: { meeting: Web3Event }) => {
  let startDateTime = fromUnixTime(parseInt(meeting.startTime));
  let endDateTime = fromUnixTime(parseInt(meeting.endTime));

  console.log(meeting);

  return (
    <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-primary hover:bg-primary">
      <img
        src={meeting.id}
        alt=""
        className="h-10 w-10 flex-none rounded-full"
      />
      <div className="flex-auto">
        <p className="text-black group-hover:text-white">{meeting.creator}</p>
        <p className="mt-0.5">
          <time
            className="text-black group-hover:text-white"
            dateTime={meeting.startTime}
          >
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time
            className="text-black group-hover:text-white"
            dateTime={meeting.endTime}
          >
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-black group-hover:text-white ">
            <span className="sr-only text-black group-hover:text-white">
              Open options
            </span>
            <AdjustmentsVerticalIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames([
                      active
                        ? "bg-primary text-white"
                        : "text-black hover:text-white",
                      "block px-4 py-2 text-sm",
                    ])}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames([
                      active
                        ? "bg-primary  text-white"
                        : "text-black hover:text-white",
                      "block px-4 py-2 text-sm",
                    ])}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
};

export default MeetingCard;
