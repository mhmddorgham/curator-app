import Image, { StaticImageData } from "next/image";
import React from "react";
import FarmerIcon from "../../public/assets/images/farmer.png";

export default function StackCard(props: IStackCard) {
  return (
    <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
      <Image
        src={props.image}
        alt="image"
        width={30}
        height={30}
        className="w-12 h-12 rounded-lg"
      />
      <div>
        <p className="text-[18px] font-[600] text-primary-black ">
          {props.title}
        </p>
        <p className="text-[#586069]">{props.description}</p>
      </div>
    </div>
  );
}
