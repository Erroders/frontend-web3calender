import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
export default function Form() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8  lg:grid-cols-5">
          <div className="rounded-lg bg-white p-8 shadow-lg  lg:col-span-5 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only text-primary" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-primary p-3 text-sm "
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-primary p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-primary p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <Datepicker
                  primaryColor="fuchsia"
                  value={value}
                  onChange={handleValueChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="sr-only"
                    id="option1"
                    type="radio"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-primary p-3"
                    tabIndex={0}
                  >
                    <span className="text-sm font-medium"> Option 1 </span>
                  </label>
                </div>

                <div>
                  <input
                    className="sr-only"
                    id="option2"
                    type="radio"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-primary p-3"
                    tabIndex={0}
                  >
                    <span className="text-sm font-medium"> Option 2 </span>
                  </label>
                </div>

                <div>
                  <input
                    className="sr-only"
                    id="option3"
                    type="radio"
                    tabIndex={-1}
                  />
                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-primary p-3"
                    tabIndex={0}
                  >
                    <span className="text-sm font-medium"> Option 3 </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-primary p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <a className=" group flex w-36 items-center justify-between rounded-lg border border-primary bg-primary px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring">
                  <span className="font-medium text-white transition-colors group-hover:text-primary group-active:text-secondary">
                    Create Event
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
