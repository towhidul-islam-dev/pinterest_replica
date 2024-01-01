"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
	LifebuoyIcon,
	EllipsisHorizontalCircleIcon,
	MagnifyingGlassIcon,
	BellIcon,
	ChevronDownIcon,
	HomeIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function Navbar() {
	const route = usePathname();
	const [currRoute, setCurrRoute] = useState("");

	const currPath = route.split("/")[1];
	useEffect(() => {
		setCurrRoute(currPath);
	}, [currPath]);

	return (
		<>
			<div className="hidden md:block">
				<div className="grid z-50 bg-gray-50 place-items-center px-6 lg:px-8 fixed top-0 left-0 w-full">
					<div className="flex py-4 px-4 lg:px-0 items-center gap-8 justify-center w-full">
						<div>
							<Link href="/" className="capitalize text-lg font-semibold">
								<LifebuoyIcon className="h-10 text-red-500" />
							</Link>
						</div>
						<div className="space-x-2">
							<Link
								href="/"
								className={
									currPath === ""
										? "capitalize text-lg font-semibold text-gray-50 bg-gray-800 rounded-full py-4 px-6"
										: "capitalize text-lg font-semibold"
								}
							>
								Home
							</Link>
							<Link
								href="/creator"
								className={
									currPath === "creator"
										? "capitalize text-lg font-semibold text-gray-50 bg-gray-800 rounded-full py-4 px-6"
										: "capitalize text-lg font-semibold"
								}
							>
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
								href="/notification"
							>
								<BellIcon className="h-7 text-gray-600" />
							</Link>
							<Link
								className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
								href="/message"
							>
								<EllipsisHorizontalCircleIcon className="h-7 text-gray-600" />
							</Link>
							<Link
								className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
								href="/profile"
							>
								<p className="w-7 h-7 grid place-items-center bg-gray-200 rounded-full">
									T
								</p>
							</Link>
							<Link
								className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
								href="/more"
							>
								<ChevronDownIcon className="h-7 text-gray-600" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="md:hidden">
				<div className="grid z-50 bg-gray-50 place-items-center px-6 lg:px-8 fixed bottom-0 left-0 w-full">
					<div className="flex py-2 px-4 lg:px-0 items-center gap-8 justify-between w-full">
						<Link
							className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
							href="/"
						>
							<HomeIcon className="w-6 h-6 stroke-2" />
						</Link>
						<Link
							className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
							href="/notification"
						>
							<MagnifyingGlassIcon className="h-6 text-gray-600 w- stroke-[3px]" />
						</Link>
						<Link
							className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
							href="/message"
						>
							<EllipsisHorizontalCircleIcon className="h-7 text-gray-600 stroke-2" />
						</Link>

						<Link
							className="hover:bg-gray-200 transition-all ease-in-out duration-300 p-2 rounded-full"
							href="/profile"
						>
							<p className="w-7 h-7 grid place-items-center bg-gray-200 rounded-full">
								<UserIcon className="w-6 h-6 stroke-2" />
							</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
