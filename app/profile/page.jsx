import React from "react";

import {
	AdjustmentsHorizontalIcon,
	PlusIcon,
} from "@heroicons/react/24/outline";

function page() {
	return (
		<div className="mt-20">
			<div className="flex items-center justify-center py-12">
				<div className="space-y-3">
					<div className="grid place-items-center pb-4">
						<div className=" bg-gray-100 rounded-full w-24 h-24 border border-gray-300 flex items-center justify-center">
							<h2 className="text-center rounded-full p-8 w-fit text-5xl font-bold">
								T
							</h2>
						</div>
					</div>
					<h3 className="uppercase font-semibold text-center">
						Towhidul Islam
					</h3>
					<p className="lowercase">
						<span>towhidulislam12995@gmail.com</span>
					</p>
					<h4 className="texxt-sm font-semibold text-center">8 following</h4>
					<div className="flex justify-center space-x-3">
						<button className="text-base font-bold bg-gray-200 hover:bg-gray-300 px-6 py-3 cursor-pointer rounded-full">
							share
						</button>
						<button className="text-base font-bold bg-gray-200 hover:bg-gray-300 px-6 py-3 cursor-pointer rounded-full">
							edit profile
						</button>
					</div>
					<div className="flex justify-center space-x-3 pt-10">
						<button className="text-base font-bold border-b-2 border-gray-600 hover:bg-gray-300 px-6 py-3 cursor-pointer hover:rounded-md hover:border-transparent transition-all ease-in-out duration-100">
							Created
						</button>
						<button className="text-base font-bold border-b-2 hover:bg-gray-300 px-6 py-3 cursor-pointer rounded-md">
							Saved
						</button>
					</div>
				</div>
			</div>
			<div className="w-full ">
				<div className="flex items-center justify-between px-6 w-full gap-4">
					<AdjustmentsHorizontalIcon className="w-7 h-7 stroke-2" />

					<PlusIcon className="w-7 h-7 stroke-2" />
				</div>
			</div>
		</div>
	);
}

export default page;
