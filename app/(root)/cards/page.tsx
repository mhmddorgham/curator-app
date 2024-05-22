import AboutDetails from "@/components/shared/AboutDetails";
import { ImagesCards } from "@/constant";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-full ">
      <div className="w-full  grid grid-cols-1 semi-md:grid-cols-3 gap-3  ">
        {ImagesCards &&
          ImagesCards.map((card, idx) => {
            return (
              <div key={idx}>
                <Image
                  src={card.image}
                  alt="image"
                  className="max-w-[390px] max-h-[390px] rounded-lg object-contain mx-auto"
                />
              </div>
            );
          })}
      </div>
    </main>
  );
}
