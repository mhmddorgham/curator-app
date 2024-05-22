import { Button } from "@/components/ui/button";
import { ArrowLeftCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Page({ params }: { params: { productName: string } }) {
  return (
    <main className="w-full h-full ">
      <div className="w-full h-full flex flex-col border border-gray-200 rounded-[60px]  ">
        {/* first div */}
        <div className="w-full flex justify-between items-center ">
          {/* back btn */}
          <Button variant="outline">
            <ArrowLeftIcon className="" />
            <p>Back</p>
          </Button>
        </div>
      </div>
    </main>
  );
}
