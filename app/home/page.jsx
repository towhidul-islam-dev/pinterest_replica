"use client";
import React, { useState } from "react";

import {
  QuestionMarkCircleIcon,
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
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomeData = [
  {
    id: 1,
    labels: "Picture Label",
    profilePic: "4aef708e6832ce65e5ee0ca04e2eaebd.jpg",
    image: "4aef708e6832ce65e5ee0ca04e2eaebd.jpg",
  },
  {
    id: 2,
    labels: "Picture Labe2",
    profilePic: "71dd81de6048f2b2c684b66394f0971e.jpg",
    image: "71dd81de6048f2b2c684b66394f0971e.jpg",
  },
  {
    id: 3,
    labels: "Picture Labe3",
    profilePic: "530f02f41ecbcb6872ab7baa5ea4096c.jpg",
    image: "530f02f41ecbcb6872ab7baa5ea4096c.jpg",
  },
  {
    id: 4,
    labels: "Picture Labe4",
    profilePic: "neom-L64iwsbPefU-unsplash.jpg",
    image: "neom-L64iwsbPefU-unsplash.jpg",
  },
  {
    id: 5,
    labels: "Picture Labe5",
    profilePic: "atul-vinayak-bPOxmXJz86U-unsplash.jpg",
    image: "atul-vinayak-bPOxmXJz86U-unsplash.jpg",
  },
  {
    id: 6,
    labels: "Picture Labe6",
    profilePic: "bfc4ea062b968f2474304567968dd0cc.jpg",
    image: "bfc4ea062b968f2474304567968dd0cc.jpg",
  },
  {
    id: 7,
    labels: "Picture Labe7",
    profilePic: "chean-ang-heng-bing6otLkAQ-unsplash.jpg",
    image: "chean-ang-heng-bing6otLkAQ-unsplash.jpg",
  },
  {
    id: 8,
    labels: "Picture Labe8",
    profilePic: "daniel-j-schwarz-mMZw3ayZQvE-unsplash.jpg",
    image: "daniel-j-schwarz-mMZw3ayZQvE-unsplash.jpg",
  },
  {
    id: 9,
    labels: "Picture Labe9",
    profilePic: "daniel-j-schwarz-tGEt6-tzoUU-unsplash.jpg",
    image: "daniel-j-schwarz-tGEt6-tzoUU-unsplash.jpg",
  },
  {
    id: 10,
    labels: "Picture Labe10",
    profilePic: "daniel-j-schwarz-VeG4atiKVM8-unsplash.jpg",
    image: "daniel-j-schwarz-VeG4atiKVM8-unsplash.jpg",
  },
  {
    id: 11,
    labels: "Picture Labe11",
    profilePic: "europeana-0IPUGoSELbE-unsplash.jpg",
    image: "europeana-0IPUGoSELbE-unsplash.jpg",
  },
  {
    id: 12,
    labels: "Picture Labe12",
    profilePic: "europeana-i77TVtxePak-unsplash.jpg",
    image: "europeana-i77TVtxePak-unsplash.jpg",
  },
  {
    id: 13,
    labels: "Picture Labe13",
    profilePic: "good-faces-xb9zL5dcx1o-unsplash.jpg",
    image: "good-faces-xb9zL5dcx1o-unsplash.jpg",
  },
  {
    id: 14,
    labels: "Picture Labe14",
    profilePic: "imad-786-uSAeNNx5lbY-unsplash.jpg",
    image: "imad-786-uSAeNNx5lbY-unsplash.jpg",
  },
  {
    id: 15,
    labels: "Picture Labe15",
    profilePic: "jhunelle-francis-sardido-LSZmhnn5qEM-unsplash.jpg",
    image: "jhunelle-francis-sardido-LSZmhnn5qEM-unsplash.jpg",
  },
  {
    id: 16,
    labels: "Picture Labe16",
    profilePic: "jonathan-borba-fhqVOs0j-sk-unsplash.jpg",
    image: "jonathan-borba-fhqVOs0j-sk-unsplash.jpg",
  },
  {
    id: 17,
    labels: "Picture Labe17",
    profilePic: "jimmy-woo-6Ei7DDKHKxg-unsplash.jpg",
    image: "jimmy-woo-6Ei7DDKHKxg-unsplash.jpg",
  },
  {
    id: 18,
    labels: "Picture Labe18",
    profilePic: "keagan-henman-5ja5Bh_l13Y-unsplash.jpg",
    image: "keagan-henman-5ja5Bh_l13Y-unsplash.jpg",
  },
  {
    id: 19,
    labels: "Picture Labe19",
    profilePic: "luke-thornton-Pcwo-oCZ5iY-unsplash.jpg",
    image: "luke-thornton-Pcwo-oCZ5iY-unsplash.jpg",
  },
  {
    id: 20,
    labels: "Picture Labe20",
    profilePic: "neom-0rCJ-y3wx6g-unsplash.jpg",
    image: "neom-0rCJ-y3wx6g-unsplash.jpg",
  },
];

function page() {
  const router = useRouter();
  const [pictureData, setPictureData] = useState(HomeData);

  return (
    <div className="grid place-items-center py-12">
      <div className="w-full xl:columns-6 lg:columns-4 sm:columns-3 gap-10 space-y-10 px-6 lg:px-8">
        {pictureData.map((picture) => {
          return (
            <div key={picture.id}>
              <Link
                href={`/home/${picture.id}`}
                className="relative w-full h-full rounded-xl overflow-hidden"
              >
                <img
                  className="w-full  shadow-sm z-0 rounded-xl"
                  src={`/${picture.image}`}
                  alt="picture"
                />
                <div className="w-full h-full z-10 absolute rounded-xl hover:bg-gray-700/40 transition-colors duration-200 ease-in-out left-0 top-0"></div>
                <div className="flex absolute right-[5%] gap-4 bottom-[4%] z-20">
                  <div className="w-10 cursor-pointer h-10 rounded-full bg-white hover:bg-gray-100/90 grid place-items-center">
                    <ArrowUpTrayIcon className="w-6 h-6" />
                  </div>
                  <div className="cursor-pointer w-10 grid place-items-center h-10 rounded-full bg-white hover:bg-gray-100/90">
                    <EllipsisHorizontalCircleIcon className="w-8 h-8" />
                  </div>
                </div>
              </Link>
              <div className="space-y-2 pt-2">
                <h4>{picture.labels}</h4>
                <div className="flex items-center space-x-3">
                  <img
                    className="w-10 h-10 aspect-square rounded-full"
                    src={`/${picture.profilePic}`}
                    alt="profile"
                  />
                  <p>{picture.labels}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default page;
