"use client";
import React from "react";
import Link from "next/link";

import {
  LifebuoyIcon,
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="grid place-items-center px-6 lg:px-8">
      <div className="flex py-4 px-4 lg:px-0 items-center gap-8 justify-center w-full">
        <div>
          <LifebuoyIcon className="h-10 text-red-500" />
        </div>
        <div className="space-x-2">
          <Link href="#" className="capitalize text-lg font-semibold">
            Home
          </Link>
          <Link href="#" className="capitalize text-lg font-semibold">
            Create
          </Link>
        </div>
        <div className="flex space-x-3 items-center bg-gray-200 p-3 rounded-full w-full">
          <MagnifyingGlassIcon className="h-6 text-gray-600 stroke-2" />
          <input
            className=" bg-transparent w-full pl-2 pr-5 border-none outline-none"
            type="text"
          />
        </div>
        <div className="flex space-x-1">
          <Link
            className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
            href="#"
          >
            <BellIcon className="h-7 text-gray-600" />
          </Link>
          <Link
            className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
            href="#"
          >
            <EllipsisHorizontalCircleIcon className="h-7 text-gray-600" />
          </Link>

          <Link
            className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
            href="#"
          >
            <p className="w-7 h-7 grid place-items-center bg-gray-200 rounded-full">
              T
            </p>
          </Link>
          <Link
            className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
            href="#"
          >
            <ChevronDownIcon className="h-7 text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
