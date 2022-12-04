import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

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
            <div className="space-y-4">
              <div>
                <label className="sr-only text-primary" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full rounded-lg border p-3 text-sm hover:border-primary "
                  placeholder="Title"
                  type="text"
                  id="title"
                />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-2">
                  <Datepicker
                    primaryColor="fuchsia"
                    value={value}
                    onChange={handleValueChange}
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2  ">
                    <div>Start Time :</div>
                    <div>
                      <div className="mt-2 w-40 rounded-lg bg-white p-5 shadow-xl">
                        <div className="flex">
                          <select
                            name="hours"
                            className="appearance-none bg-transparent text-xl outline-none"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">10</option>
                            <option value="12">12</option>
                          </select>
                          <span className="mr-3 text-xl">:</span>
                          <select
                            name="minutes"
                            className="mr-4 appearance-none bg-transparent text-xl outline-none"
                          >
                            <option value="0">00</option>
                            <option value="30">30</option>
                          </select>
                          <select
                            name="ampm"
                            className="appearance-none bg-transparent text-xl outline-none"
                          >
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-2">
                    <div>Start Time :</div>
                    <div>
                      <div className="mt-2 w-40 rounded-lg bg-white p-5 shadow-xl">
                        <div className="flex">
                          <select
                            name="hours"
                            className="appearance-none bg-transparent text-xl outline-none "
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">10</option>
                            <option value="12">12</option>
                          </select>
                          <span className="mr-3 text-xl">:</span>
                          <select
                            name="minutes"
                            className="mr-4 appearance-none bg-transparent text-xl outline-none"
                          >
                            <option value="0">00</option>
                            <option value="30">30</option>
                          </select>
                          <select
                            name="ampm"
                            className="appearance-none bg-transparent text-xl outline-none"
                          >
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="w-full rounded-lg border p-3 text-sm hover:border-primary"
                  placeholder="Description"
                  rows={8}
                  id="description"
                ></textarea>
              </div>

              <div className="mt-4">
                <a className=" group flex w-36 items-center justify-between rounded-lg border border-primary bg-primary px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring">
                  <span className="font-medium text-white transition-colors group-hover:text-primary group-active:text-primary">
                    Create Event
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
