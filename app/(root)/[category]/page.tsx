import ProductCard from "@/components/shared/ProductCard";
import { Products } from "@/constant/products";

export default function Page({ params }: { params: { category: string } }) {
  const filteredProducts = Products.filter(
    (product) => product.category === params.category
  );
  return (
    <main className="w-full h-full ">
      <div className="w-full  grid grid-cols-1 semi-md:grid-cols-3 gap-3  ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))
        ) : (
          <div className="w-full text-center col-span-1 semi-md:col-span-3 flex justify-center items-center text-2xl font-[600]">
            No products available for current category
          </div>
        )}
      </div>
    </main>
  );
}
