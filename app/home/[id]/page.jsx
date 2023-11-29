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
        className="flex flex-col items-start justify-between h-full w-full max-w-5xl rounded-xl overflow-hidden shadow-md border border-gray-200"
      >
        <div className="w-full md:w-1/2 md:h-auto h-1/2 md:p-4">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={`/${selectedData.image}`}
            alt={`/${selectedData.labels}`}
          />
        </div>
        <div className="relative w-full h-1/2 md:h-auto md:w-1/2 p-4">
          <div className="flex items-center justify-between gap-4">
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
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default page;
