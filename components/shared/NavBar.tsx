"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
import { NavItems } from "@/constant/navbar";
import { HiSpeakerphone } from "react-icons/hi";
import profileIcon from "../../public/assets/images/profile.png";
export default function NavBar() {
  const pathname = usePathname();
  const wrapperClasses = `min-h-full h-screen px-4 pt-8 pb-4 bg-[#F9FAFB] flex justify-between flex-col shadow-xl sticky !top-0 left-0  z-100 rounded-md   w-20`;

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  type IconMappingType = Record<
    NavLinksLabel,
    React.FC<React.SVGProps<SVGSVGElement>>
  >;
  const iconMapping: IconMappingType = {
    Home: HomeIcon,
    About: UserGroupIcon,
    Sponsor: HiSpeakerphone,
    Contact: ChatBubbleLeftEllipsisIcon,
  };

  const iconsStyle =
    "flex items-center p-3 my-3 justify-start text-gray-400 hover:text-black hover:bg-[#EEF1F6] border  rounded-2xl duration-200 ";
  return (
    <section className={wrapperClasses}>
      <div className="flex flex-col gap-3 justify-center items-center">
        {/* searchbar */}
        <div className="flex items-center justify-start p-2 cursor-pointer ">
          <MagnifyingGlassIcon className="text-black  w-[29px] h-[29px]" />
        </div>
        <div className="py-5 mt-2">
          {NavItems &&
            NavItems.map((nav, idx) => {
              const Icon = iconMapping[nav.label as NavLinksLabel];
              return (
                <Link href={nav.link} key={idx}>
                  <div
                    className={`${iconsStyle} ${
                      pathname === nav.link
                        ? "bg-[#EEF1F6] border-gray-200"
                        : "border-[#F9FAFB]"
                    }`}
                  >
                    <Icon className="  w-[26px] h-[26px]" />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col justify-center items-center border border-gray-200 rounded-lg p-4">
          <Link href={""}>
            <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
              <FaFacebookF className="w-[20px] h-[20px]  text-gray-800" />
            </div>
          </Link>
          <Link href={""}>
            <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
              <FaInstagram className="w-[20px] h-[20px]  text-gray-800" />
            </div>
          </Link>
          <Link href={""}>
            <div className="p-1 rounded-md border cursor-pointer border-gray-200 my-2  ">
              <FaXTwitter className="w-[20px] h-[20px]  text-gray-800" />
            </div>
          </Link>
          <div className="w-9 mt-3 ">
            <Image
              src={profileIcon}
              alt="avatar"
              className="bg-[#C3C4FF] p-[1px] rounded-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
