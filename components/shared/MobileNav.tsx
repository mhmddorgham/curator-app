import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  // ArrowLeftCircleIcon,
  EnvelopeIcon,
  FolderPlusIcon,
  // ArrowLeftCircleIcon,
  // HomeIcon,
  MagnifyingGlassIcon,
  // UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import {
  BugAntIcon,
  HomeIcon,
  CogIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BeakerIcon,
  BriefcaseIcon,
  CubeIcon,
  BookOpenIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  TruckIcon,
  NewspaperIcon,
  CreditCardIcon,
  FingerPrintIcon,
  WrenchIcon,
  CalculatorIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Categories } from "@/constant/sidebar";

// import { Categories } from "@/constant/sidebar";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { NavItems } from "@/constant/navbar";
import { HiSpeakerphone } from "react-icons/hi";
import profileIcon from "../../public/assets/images/profile.png";
import { usePathname } from "next/navigation";
export default function MobileNav() {
  const pathname = usePathname();
  type NavLinksIconsType = Record<
    NavLinksLabel,
    React.FC<React.SVGProps<SVGSVGElement>>
  >;
  const navLinksIcons: NavLinksIconsType = {
    Home: HomeIcon,
    About: UserGroupIcon,
    Sponsor: HiSpeakerphone,
    Contact: ChatBubbleLeftEllipsisIcon,
    Cards: PhotoIcon,
  };

  type CategoryIconsType = Record<
    CategoryLabel,
    React.FC<React.SVGProps<SVGSVGElement>>
  >;
  const categoryIcons: CategoryIconsType = {
    All: HomeIcon,
    AI: BeakerIcon,
    Administration: CogIcon,
    Analytics: ChartBarIcon,
    APIs: CubeIcon,
    "Bug Hunt": BugAntIcon,
    Business: BriefcaseIcon,
    CMS: BookOpenIcon,
    Education: AcademicCapIcon,
    Developers: HomeIcon, // Use appropriate icon
    Finance: CurrencyDollarIcon,
    Logistic: TruckIcon,
    News: NewspaperIcon,
    Payments: CreditCardIcon,
    Privacy: FingerPrintIcon,
    Repairment: WrenchIcon,
    Services: CalculatorIcon,
    Shopping: ShoppingBagIcon,
    "Web Tools": GlobeAltIcon,
  };
  const iconsStyle =
    "flex items-center p-3 my-3 justify-start text-gray-400 hover:text-black hover:bg-[#EEF1F6] border  rounded-2xl duration-200 ";

  return (
    <section className="w-full h-full">
      <nav className="w-full h-20 bg-white flex justify-between items-center rounded-md relative px-5">
        <div>
          <Image
            src="/assets/images/logo_1.png"
            width={200}
            height={200}
            alt="logo"
            className="w-[200px] "
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Bars3Icon className="w-6 h-6 text-black" />
          </SheetTrigger>

          <SheetContent>
            <div className="grid gap-4 py-4">
              <h2 className={`text-gray-400 font-[500] pb-2 ml-2  `}>
                Categories
              </h2>
              <div className="h-full w-full max-h-[50vh] flex flex-col gap-5 overflow-y-auto border-b border-gray-200">
                {Categories.map((category, i) => {
                  const IconComponent =
                    categoryIcons[category.label as CategoryLabel];
                  return (
                    <Link key={i} href={category.link} prefetch={false}>
                      <div
                        className={`flex items-center justify-start gap-2 relative px-2 py-[6px] rounded-2xl duration-200  border  w-full  hover:bg-[#EEF1F6] hover:border-gray-200 hover:text-gray-600    `}
                      >
                        <IconComponent
                          className={`w-[24px] h-[24px] duration-200  ${
                            pathname === category.link ? "text-gray-600 " : " "
                          }`}
                        />
                        <h1 className={`text-text3  border-gray-200 `}>
                          {category.label}
                        </h1>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-2 w-full flex flex-col justify-center items-center gap-2 semi-lg:translate-y-11 ">
                <div className="!px-3 !py-3 rounded-3xl flex justify-center items-center gap-3 bg-black text-white cursor-pointer hover:opacity-90 duration-100 w-full">
                  <FolderPlusIcon className="text-gray-500  w-[30px] h-[30px] " />
                  <p className="text-[15px] ">Submit Your Product</p>
                </div>
                <div className="!px-3 !py-3 rounded-3xl flex justify-center items-center gap-3 bg-transparent border border-gray-200 text-gray-500 cursor-pointer hover:opacity-90 duration-100 w-full">
                  <EnvelopeIcon className="text-gray-500  w-[30px] h-[30px] " />

                  <p className="text-[17px]">Contact With Us</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <div className="w-full flex justify-evenly items-center">
        {NavItems &&
          NavItems.map((nav, idx) => {
            const Icon = navLinksIcons[nav.label as NavLinksLabel];
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
    </section>
  );
}
