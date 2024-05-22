import ProductCard from "@/components/shared/ProductCard";
import { Products } from "@/constant/products";
import React from "react";

function page() {
  return (
    <main className="w-full h-full ">
      <div className="w-full  grid grid-cols-1 semi-md:grid-cols-3 gap-3  ">
        {Products &&
          Products.map((product, idx) => {
            return <ProductCard key={idx} {...product} />;
          })}
      </div>
    </main>
  );
}

export default page;
