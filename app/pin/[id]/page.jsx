"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  QuestionMarkCircleIcon,
  LinkIcon,
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  ArrowUpTrayIcon,
  UserPlusIcon,
  HeartIcon,
  BellIcon,
  ChevronDownIcon,
  CheckIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import HomeData from "@/Data/HomeData";

function page({ params }) {
  const [selectedData, setSelectedData] = useState({});

  const extractData = () => {
    const intendentData = HomeData.find((data) => {
      return data.id === +params.id;
    });
    setSelectedData(intendentData);
  };
  console.log(selectedData);
  console.log(selectedData.image);

  useEffect(() => {
    extractData();
  }, [params.id]);

  return (
    <div className="grid place-items-center w-full py-12 px-8">
      <div
        key={selectedData.id}
        className="flex flex-col items-start justify-between md:flex-row h-full w-full max-w-5xl rounded-xl overflow-hidden shadow-md border border-gray-200"
      >
        <div className="w-full md:w-1/2 md:h-full h-1/2 md:p-4">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={`/${selectedData.image}`}
            alt={`/${selectedData.labels}`}
          />
        </div>
        <div className="relative md:h-full flex items-center justify-between flex-col w-full h-1/2 md:w-1/2">
          <div className="w-full">
            <div className="flex w-full p-4 rounded-xl items-center justify-between gap-4">
              <div className="flex">
                <div className="p-4 rounded-full hover:bg-gray-300/30 transition-colors ease-in-out duration-200">
                  <EllipsisHorizontalCircleIcon className="w-7 h-7 hover:bg-gray-300/30 transition-colors ease-in-out duration-200" />
                </div>
                <div className="p-4 rounded-full hover:bg-gray-300/30 transition-colors ease-in-out duration-200">
                  <ArrowUpTrayIcon className="w-7 h-7" />
                </div>
                <div className="p-4 rounded-full hover:bg-gray-300/30 transition-colors ease-in-out duration-200">
                  <LinkIcon className="w-7 h-7" />
                </div>
              </div>
              <div>
                <button className="capitalize font-bold text-gray-50 bg-red-500 hover:bg-red-600 transition-colors ease-in-out duration-300 py-4 px-6 rounded-full">
                  save
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-4 w-full">
            <h2 className="capitalize font-bold">Your Art</h2>
            <p className="capitalize ">That's a good idea.</p>

            <div className="flex w-full rounded-xl items-center justify-between gap-4">
              <div className="flex">
                <div className="p-4 rounded-full bg-gray-200 hover:bg-gray-300/30 transition-colors ease-in-out duration-200">
                  <div className="w-7 h-7 text-2xl font-bold text-black grid place-items-center">
                    T
                  </div>
                </div>
              </div>
              <div>
                <button className="capitalize font-bold text-gray-50 bg-gray-400 hover:bg-gray-500 transition-colors ease-in-out duration-300 py-4 px-6 rounded-full">
                  save
                </button>
              </div>
            </div>
          </div>
          <div className="min-h-[300px] "></div>
          <div className="border-t border-gray-200 px-4 py-6">
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
              aspernatur?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
