import Image from "next/image";
import React from "react";

function ProductCard(props: ProductCardProps) {
  return (
    <div className="w-full h-fit  flex flex-col px-5 py-4 rounded-2xl border bg-[#F9FAFB] border-gray-200 shadow-sm my-2 mx-2">
      <div className="w-full flex justify-between items-center relative ">
        <Image
          alt="product image"
          className="w-[60px] h-[60px] rounded-2xl"
          src={props.image!}
          width={100}
          height={100}
        />

        {/* tag */}
        <div className="bg-[#BAFFF2] text-green-600 rounded-md border border-[#79E3CF] absolute top-0 right-0 px-2 py-1 ">
          <p className="text-[12px]">{props.tag ?? "New"}</p>
        </div>
      </div>

      <div className="mt-2">
        <h1 className="py-1 text-lg font-[700] text-primary-black">
          {props.title}
        </h1>
        <p className=" text-primary-p max-h-[200px] overflow-y-auto text-[15px]">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
