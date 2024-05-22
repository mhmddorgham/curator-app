"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  ArrowRightIcon,
  HandThumbUpIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { HiSpeakerphone } from "react-icons/hi";
import ArrowButton from "./ArrowButton";
import profileIcon from "../../public/assets/images/profile.png";
import { Products } from "@/constant/products";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
import ProductCardTwo from "./ProductCardTwo";
export default function ProductDetails({
  currentProduct,
}: {
  currentProduct: ProductCardProps;
}) {
  const RecommendedProducts = Products.filter((_, idx) => idx < 4);
  const router = useRouter();
  const handleBackButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.back();
  };
  return (
    <div className="w-full h-full  max-w-[600px] mx-auto   ">
      <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 ">
        {/* first div */}
        <div className="w-full flex justify-between items-center relative   ">
          {/* back btn */}
          <Button
            onClick={(e) => handleBackButton(e)}
            variant="outline"
            className="rounded-md "
          >
            <ArrowLongLeftIcon className="w-6 h-6 " />
            <p className="ml-1">Go Back</p>
          </Button>

          {currentProduct?.tag === "Highlight" ? (
            <div className="flex justify-center items-center gap-2 bg-[#D9BAFF] shadow-sm shadow-[#D9BAFF] text-[#8B2BFF] rounded-md border border-[#C596FF] absolute top-0 right-0 px-2 py-1 ">
              <HandThumbUpIcon className="w-[20px] h-[20px]" />
              <p className="text-[12px]">{currentProduct?.tag}</p>
            </div>
          ) : currentProduct?.tag === "New" ? (
            <div className="flex justify-center items-center gap-2 bg-[#BAFFF2] shadow-sm shadow-[#BAFFF2] text-green-600 rounded-md border border-[#79E3CF] absolute top-0 right-0 px-2 py-1 ">
              <SparklesIcon className="w-[20px] h-[20px]" />
              <p className="text-[12px]">{currentProduct?.tag}</p>
            </div>
          ) : currentProduct?.tag === "Sponsored" ? (
            <div className="flex justify-center items-center gap-2  bg-[#BAEFFF] shadow-sm shadow-[#BAEFFF] text-[#0080FF] rounded-md border border-[#9ED3FF] absolute top-0 right-0 px-2 py-1 ">
              <HiSpeakerphone className="w-[20px] h-[20px]" />
              <p className="text-[12px]">{currentProduct?.tag}</p>
            </div>
          ) : null}
        </div>

        <div className=" h-fit py-3 relative">
          <Image
            src="/assets/images/product_image.png"
            alt="product_img"
            width={600}
            height={600}
            className="object-cover rounded-3xl max-h-[12rem]"
          />

          <div className="w-full flex justify-between items-start">
            <Image
              alt="product image"
              className="w-[80px] h-[80px] rounded-[24px] border-[4px] border-white translate-x-[20px] translate-y-[-30px]"
              src={currentProduct?.image!}
              width={100}
              height={100}
            />
            {/* button effect: */}
            <div className="py-2 flex justify-center items-center gap-3 mt-2">
              <ArrowButton
                label="Visit Website"
                style="bg-white !text-black border !border-gray-200  !h-[40px]"
              />
              <div className="flex items-center  text-[14px]  rounded-xl px-3 py-[6px]  bg-white border !border-gray-200  !h-[40px]">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="text-4xl font-[600] text-primary-black">
              {currentProduct?.title}
            </h1>
            <p className="text-[#586069] text-[17px] mt-3">
              {currentProduct?.description}
            </p>
          </div>

          <div>
            <p className="leading-7 text-[#586069] text-[17px] mt-3 ">
              Quantify harnesses the latest in artificial intelligence to
              deliver unparalleled insights into consumer behavior. Our
              state-of-the-art platform analyzes vast arrays of data,
              transforming them into actionable intelligence that businesses can
              use to drive growth and improve customer engagement. With
              Quantify, unlock the patterns and trends that matter, predict
              consumer needs, and make informed decisions that keep you ahead of
              the curve. Whether it’s optimizing marketing strategies, enhancing
              product development, or personalizing customer experiences,
              Quantify is the key to understanding the nuances of your market
              and the desires of your customers.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between items-center border border-gray-200 rounded-full p-4">
          <div className="w-full   flex justify-start items-center gap-4">
            <Image
              src={profileIcon}
              alt="avatar"
              className="bg-[#C3C4FF] p-[1px] rounded-full "
            />
            <div>
              <p className="text-[13px] font-[600] text-[#586069] ">
                Founded by
              </p>
              <p className="text-primary-black">Mutahir Abbas</p>
            </div>
          </div>

          <div>
            <ArrowButton
              label="Follow"
              style="bg-[#3AA5FF] !text-white border !border-gray-200  !h-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit ">
        <h2 className="text-4xl font-bold py-6 capitalize px-3">Recommended</h2>
        <div className="w-full  grid grid-cols-1 semi-md:grid-cols-2 gap-3  ">
          {RecommendedProducts.map((product, idx) => (
            <ProductCardTwo key={idx} {...product} />
          ))}
        </div>
      </div>
      <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 mt-5 ">
        <h1 className="text-3xl font-[600] text-primary-black">
          Subscribe to our newsletter 🤩
        </h1>
        <p className="text-[#586069] text-[17px] mt-3 py-2">
          We regularly list new indie products & makers. Get them in your inbox!
        </p>

        <form className="w-full flex justify-between items-center border border-gray-200 rounded-full p-4">
          <input
            type="email"
            placeholder="name@gmail.com"
            className="w-full bg-[#EBEBEB] border border-gray-200 rounded-full p-4 outline-none"
          />
          <Button className="rounded-full  text-white border border-gray-200  h-[40px]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
