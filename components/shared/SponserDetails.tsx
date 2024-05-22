import { CheckCircleIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function SponserDetails() {
  return (
    <section className="w-full h-full border  border-gray-200 rounded-[30px] px-8 py-7 ">
      <div className="w-full flex-between py-7">
        <div className="max-w-[60%]">
          <h1 className="text-3xl font-[600] text-primary-black">
            Sponsorship Packages
          </h1>
          <p className="text-[#586069] text-[17px] mt-3">
            We offer unique opportunities for sponsors to showcase their
            products within our curated collections.
          </p>
        </div>

        {/* toogle */}
        {/* <div className="min-w-20 w-full max-w-[30%] min-h-[70px] max-h-[90px]  rounded-3xl border border-gray-100 bg-[#F1F1F2] ">
          <div className="min-w-20 h-full rounded-3xl border border-gray-100 bg-[#F8F9FA] flex-between p-4 ">
            <div className="w-[50%] px-3 py-2 bg-white rounded-full">
              <p className="font-[700]">Monthly</p>
              <p className="font-[500] text-primary-p">$4.90</p>
            </div>

            <div>
              <p>Monthly</p>
              <p>$4.90</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-full  flex flex-col semi-md:flex-row items-start gap-4   ">
        {/* first */}
        <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[30px] px-7 py-6 ">
          <div className="w-full h-fit py-3 relative">
            <div className="flex justify-start items-center max-w-fit gap-2 bg-[#D9FFBA] shadow-sm shadow-[#BAFFF2] text-[#28B002] rounded-md border border-[#28B002]  px-2 py-1 ">
              <p className="p-regular-18">Starter</p>
            </div>
            <div className=" mt-4 py-4">
              <h1 className="text-2xl font-[600] text-primary-black">
                For indie products
              </h1>
              <h2 className="text-3xl font-[600] text-primary-black py-4">
                $7 per month
              </h2>
              <p className="text-[#586069] text-[17px] mt-3 py-3">
                You will be featured with a special Sponsor badge and also get
                featured in our weekly newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-4 ">
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">Get featured on front page</p>
              </div>
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">15,000 Impressions Monthly</p>
              </div>
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">1 product</p>
              </div>
            </div>

            <Button className="!rounded-full !mt-10 !px-7 !py-6 text-[17px]">
              Get Started Now
            </Button>
          </div>
        </div>

        {/* second */}

        <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[30px] px-7 py-6 ">
          <div className="w-full h-fit py-3 relative">
            <div className="flex justify-start items-center max-w-fit gap-2 bg-[#EBEEF2] shadow-sm shadow-[#CFD6E1] text-[#4d4d4d] rounded-md border border-[#CFD6E1]  px-2 py-1 ">
              <p className="p-regular-18">Business</p>
            </div>
            <div className=" mt-4 py-4">
              <h1 className="text-2xl font-[600] text-primary-black">
                For businesses
              </h1>
              <h2 className="text-3xl font-[600] text-primary-black py-4">
                $12 per month
              </h2>
              <p className="text-[#586069] text-[17px] mt-3 py-3">
                Get a Sponsor badge and featured in the frontpage along with
                product categories.
              </p>
            </div>

            <div className="flex flex-col gap-4 ">
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">
                  Get featured on front page & categories
                </p>
              </div>
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">25,000 Impressions Monthly</p>
              </div>
              <div className="w-full px-3 py-2   flex justify-start items-center gap-4 bg-[#F9FAFB] border border-gray-200 rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-[#CDCFDB]  " />
                <p className="text-[#586069]">3 product</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="!rounded-full !mt-10 !px-7  !py-6 text-[17px]"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#EEF1F6] rounded-3xl flex-between min-h-20 max-h-28 py-4 px-5 my-3 mx-3">
        <div>
          <p className="p-medium-24">Looking for more?</p>
          <p className="text-primary-p p-regular-18">
            Contact us for specialized packages
          </p>
        </div>

        <div className="!px-3 !py-3 rounded-3xl flex bg-black text-white justify-center items-center gap-3 border border-gray-200  cursor-pointer hover:opacity-90 duration-100 w-full max-w-[200px]">
          <EnvelopeIcon className="text-gray-500  w-[30px] h-[30px] " />

          <p className="text-[17px]">Contact Us</p>
        </div>
      </div>
    </section>
  );
}
