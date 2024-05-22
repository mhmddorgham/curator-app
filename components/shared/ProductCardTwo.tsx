"use client";
import {
  ArrowRightIcon,
  HandThumbUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { Button } from "../ui/button";

export default function ProductCardTwo(props: ProductCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string>("");
  const [viewArrow, setViewArrow] = useState<boolean>(false);
  return (
    <Link href={`${props.id}`}>
      <div
        onMouseEnter={() => setHoveredIndex(props.id)}
        onMouseLeave={() => setHoveredIndex("")}
        className="w-full h-full  flex flex-col px-5 py-4 rounded-2xl border bg-[#F9FAFB] border-gray-200 shadow-sm my-2 mx-2 semi-sm:min-h-[190px] semi-sm:max-h-[190px] overflow-y-hidden relative "
      >
        <div className="w-full flex justify-between items-center relative ">
          <Image
            alt="product image"
            className="w-[60px] h-[60px] rounded-2xl"
            src={props.image!}
            width={100}
            height={100}
          />

          {/* tag */}
          {props.tag === "Highlight" ? (
            <div className="flex justify-center items-center gap-2 bg-[#D9BAFF] shadow-sm shadow-[#D9BAFF] text-[#8B2BFF] rounded-md border border-[#C596FF] absolute top-0 right-0 px-2 py-1 ">
              <HandThumbUpIcon className="w-[20px] h-[24px]" />
              <p className="text-[12px]">{props.tag}</p>
            </div>
          ) : props.tag === "New" ? (
            <div className="flex justify-center items-center gap-2 bg-[#BAFFF2] shadow-sm shadow-[#BAFFF2] text-green-600 rounded-md border border-[#79E3CF] absolute top-0 right-0 px-2 py-1 ">
              <SparklesIcon className="w-[20px] h-[24px]" />
              <p className="text-[12px]">{props.tag}</p>
            </div>
          ) : props.tag === "Sponsored" ? (
            <div className="flex justify-center items-center gap-2  bg-[#BAEFFF] shadow-sm shadow-[#BAEFFF] text-[#0080FF] rounded-md border border-[#9ED3FF] absolute top-0 right-0 px-2 py-1 ">
              <HiSpeakerphone className="w-[20px] h-[24px]" />
              <p className="text-[12px]">{props.tag}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-2">
          <h1 className="py-1 text-lg font-[700] text-primary-black">
            {props.title}
          </h1>
          <p className=" text-primary-p max-h-[200px] overflow-y-auto text-[15px]">
            {props.description}
          </p>
        </div>

        {/* button effect: */}
        {/* <button
          onMouseEnter={() => setViewArrow(true)}
          onMouseLeave={() => setViewArrow(false)}
          className={`flex items-center gap-3  z-[100] absolute  right-5 duration-500 text-[14px] text-white rounded-xl px-3 py-[6px] !bg-[#393c3d] border-[5px] border-opacity-20 ${
            hoveredIndex === props.id ? "bottom-7" : "bottom-[-20%] opacity-0 "
          }`}
        >
          Read more
          <ArrowRightIcon
            className={`w-[20px] h-[24px] relative duration-300 ${
              viewArrow ? " right-0" : " right-[-10px] opacity-0 h-[0] w-[0]"
            }`}
          />
        </button> */}
      </div>
    </Link>
  );
}
