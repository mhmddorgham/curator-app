import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Products } from "@/constant/products";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

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

      <Button className=" fixed right-9 bottom-16 shadow-lg z-[300] ">
        <ShoppingCartIcon className="w-6 h-6 text-white mr-2" />
        Buy for 69$
      </Button>
    </main>
  );
}

export default page;
