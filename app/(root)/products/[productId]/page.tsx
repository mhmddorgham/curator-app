import ProductDetails from "@/components/shared/ProductDetails";
import { Button } from "@/components/ui/button";
import { Products } from "@/constant/products";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  HandThumbUpIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { HiSpeakerphone } from "react-icons/hi";

export default function Page({ params }: { params: { productId: string } }) {
  const currentProduct = Products.find(
    (prod, idx) => prod.id === params.productId
  );

  return (
    <main className="w-full h-full p-5 ">
      <ProductDetails currentProduct={currentProduct!} />

      <Button className=" fixed right-9 bottom-16 shadow-lg z-[300] ">
        <ShoppingCartIcon className="w-6 h-6 text-white mr-2" />
        Buy for 69$
      </Button>
    </main>
  );
}
