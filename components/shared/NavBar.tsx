"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
// import { MainItem, AnalyticsItem, DahsboardItem,  } from "@/constants";
import Link from "next/link";
import {
  ArrowLeftCircleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { Categories } from "@/constant/sidebar";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export default function NavBar() {
  const wrapperClasses = `min-h-full h-screen px-4 pt-8 pb-4 bg-[#F9FAFB] flex justify-between flex-col shadow-xl sticky !top-0 left-0  z-100 rounded-md   w-20`;

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  return (
    <section className={wrapperClasses}>
      <div className="flex flex-col gap-3 justify-center items-center">
        {/* searchbar */}
        <div className="flex items-center justify-start p-2 cursor-pointer ">
          <MagnifyingGlassIcon className="text-black  w-[29px] h-[29px]" />
        </div>
        <div className="py-5 mt-2">
          <div className="flex items-center p-3 my-3 justify-start text-gray-500 hover:text-black hover:bg-blue-200 rounded-2xl duration-200 cursor-pointer ">
            <UserGroupIcon className="  w-[26px] h-[26px]" />
          </div>
          <div className="flex items-center p-3 my-3 justify-start text-gray-500 hover:text-black hover:bg-blue-200 rounded-2xl duration-200 cursor-pointer ">
            <HomeIcon className="  w-[26px] h-[26px]" />
          </div>
          <div className="flex items-center p-3 my-3 justify-start text-gray-500 hover:text-black hover:bg-blue-200 rounded-2xl duration-200 cursor-pointer ">
            <UserGroupIcon className="  w-[26px] h-[26px]" />
          </div>
          <div className="flex items-center p-3 my-3 justify-start text-gray-500 hover:text-black hover:bg-blue-200 rounded-2xl duration-200 cursor-pointer ">
            <ChatBubbleLeftEllipsisIcon className="  w-[26px] h-[26px]" />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col justify-center items-center border border-gray-200 rounded-lg p-4">
          <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
            <FaFacebookF className="w-[20px] h-[20px]  text-gray-800" />
          </div>
          <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
            <FaInstagram className="w-[20px] h-[20px]  text-gray-800" />
          </div>
          <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
            <FaXTwitter className="w-[20px] h-[20px]  text-gray-800" />
          </div>
          <Image
            src="/assets/images/profile.png"
            width={100}
            height={100}
            alt="avatar"
            className="w-[200px] h-[20px] object-cover bg-[#C3C4FF] p-[1px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
