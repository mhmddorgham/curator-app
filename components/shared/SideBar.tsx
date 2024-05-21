"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
// import { MainItem, AnalyticsItem, DahsboardItem,  } from "@/constants";
import Link from "next/link";
import {
  ArrowLeftCircleIcon,
  EnvelopeIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Categories } from "@/constant/sidebar";
import { Button } from "../ui/button";
export default function SideBar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeLink = "bg-[#EEF1F6] border-gray-300 ";
  useEffect(() => {
    const handleResize = () => {
      setToggleCollapse(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const wrapperClasses = `min-h-full h-screen px-4 pt-8 pb-4 bg-[#F9FAFB] flex justify-between flex-col shadow-xl sticky !top-0 left-0  z-100 rounded-3xl border border-gray-100    ${
    toggleCollapse ? "w-20" : "w-64"
  }`;
  const ArrowClass = `${
    toggleCollapse ? "rotate-180 duration-300 w-[45px] ml-2" : "duration-300"
  }`;

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [router.pathname]
  // );

  return (
    <section
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col gap-3">
        {/* LOGO */}
        <div className="flex items-center justify-start ">
          <Link href={"/"}>
            <div className="flex items-center justify-start gap-5  px-2 py-1">
              {/* <Image
                className={` ${toggleCollapse ? "w-[25px]" : ""}`}
                src={MainItem.icon}
                alt="logo"
              /> */}

              <h1
                className={`text-2xl font-bold text-text1 ${
                  toggleCollapse ? "hidden" : ""
                }`}
              >
                the<span className="text-gray-500">curator.</span>
              </h1>
            </div>
          </Link>
          <div
            onClick={handleSidebarToggle}
            className={`rounded-full absolute right-0 p-1 cursor-pointer ${
              toggleCollapse ? "w-[60px] my-2 right-0" : ""
            }`}
          >
            <ArrowLeftCircleIcon
              className={`text-black  w-[20px] h-[20px] duration-100  ${
                toggleCollapse ? "rotate-[180deg]" : ""
              }`}
            />
          </div>
        </div>

        {/* Categories */}
        <h2
          className={`text-gray-400 font-[500] py-2 ml-2 text-lg ${
            toggleCollapse ? "hidden" : ""
          }`}
        >
          Categories
        </h2>
        <div className="h-full flex flex-col gap-5 max-h-[60vh] overflow-y-auto border-b border-gray-200">
          {Categories.map((category, i) => {
            return (
              <Link key={i} href={category.link} prefetch={false}>
                <div
                  className={`flex items-center justify-start gap-5 relative px-2 py-2 rounded-2xl duration-200  border  w-full mr-1 ${
                    pathname === category.link ? activeLink : "border-[#F9FAFB]"
                  }  `}
                >
                  <HomeIcon className="text-gray-500  w-[30px] h-[30px]" />
                  <h1
                    className={`text-text3  border-gray-200 ${
                      toggleCollapse ? "hidden" : ""
                    }`}
                  >
                    {category.label}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 w-full flex flex-col justify-center items-center gap-2 ">
          <div className="!px-3 !py-3 rounded-3xl flex justify-center items-center gap-3 bg-black text-white cursor-pointer hover:opacity-90 duration-100 w-full">
            <FolderPlusIcon className="text-gray-500  w-[30px] h-[30px] " />
            {!toggleCollapse && (
              <p className="text-[15px] ">Submit Your Product</p>
            )}
          </div>
          <div className="!px-3 !py-3 rounded-3xl flex justify-center items-center gap-3 bg-transparent border border-gray-200 text-gray-500 cursor-pointer hover:opacity-90 duration-100 w-full">
            <EnvelopeIcon className="text-gray-500  w-[30px] h-[30px] " />

            {!toggleCollapse && <p className="text-[17px]">Contact With Us</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
