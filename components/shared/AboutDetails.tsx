import Image from "next/image";
import React from "react";
import StackCard from "./StackCard";
import FarmerIcon from "../../public/assets/images/farmer.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
function AboutDetails() {
  return (
    <section className="w-full h-full">
      <div className="w-full  flex flex-col semi-lg:flex-row items-start gap-2   ">
        <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 ">
          <div className=" h-fit py-3 relative">
            <Image
              src="/assets/images/product_image.png"
              alt="product_img"
              width={600}
              height={600}
              className="w-full object-cover rounded-3xl max-h-[5rem]"
            />

            <div className=" mt-7">
              <h1 className="text-4xl font-[600] text-primary-black">About</h1>
              <p className="text-[#586069] text-[17px] mt-3">
                Welcome to The Curator. Our template is designed for discerning
                users who appreciate the art of organizing and showcasing.
              </p>
            </div>

            <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[20px] px-4 py-3 mt-4">
              <div className="">
                <h1 className="text-2xl font-[600] text-primary-black">
                  The Stack
                </h1>
                <p className="text-[#586069] text-[17px] py-2 mb-[2px]">
                  Here our tool sets while we were building it.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <StackCard
                  title="Framer"
                  description="Our web development tool."
                  image={FarmerIcon}
                />
                <StackCard
                  title="Framer"
                  description="Our web development tool."
                  image={FarmerIcon}
                />
                <StackCard
                  title="Framer"
                  description="Our web development tool."
                  image={FarmerIcon}
                />
                <StackCard
                  title="Framer"
                  description="Our web development tool."
                  image={FarmerIcon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 ">
          <div className=" h-fit py-3 relative">
            <Image
              src="/assets/images/p_2.png"
              alt="product_img"
              width={600}
              height={600}
              className="w-full object-cover rounded-3xl max-h-[5rem]"
            />

            <div className=" mt-7">
              <h1 className="text-4xl font-[600] text-primary-black">FAQ</h1>
              <p className="text-[#586069] text-[17px] mt-3">
                Find answers to some of the most common questions about The
                Curator template. If you have a question, feel free to reach out
                to us.
              </p>
            </div>

            <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[20px] px-4 py-3 mt-4">
              <div className="">
                <h1 className="text-2xl font-[600] text-primary-black">
                  Questions
                </h1>
                <p className="text-[#586069] text-[17px] pt-2">
                  Here is the top 4 frequently asked questions.
                </p>
              </div>

              <div className="flex flex-col gap-3 ">
                <Accordion type="single" collapsible className="w-full !my-0">
                  <AccordionItem
                    value="item-1 "
                    className="bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-1 my-3"
                  >
                    <AccordionTrigger>What is The Curator?</AccordionTrigger>
                    <AccordionContent>
                      The Curator is a versatile and intuitive template designed
                      for digital content curation and management, suitable for
                      creators, businesses, and individuals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-1 my-3"
                  >
                    <AccordionTrigger>
                      Is The Curator mobile-responsive?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely! The Curator is fully responsive, ensuring your
                      content looks great on all devices, including desktops,
                      tablets, and smartphones.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-1 my-3"
                  >
                    <AccordionTrigger>
                      How do I get started with The Curator?
                    </AccordionTrigger>
                    <AccordionContent>
                      Getting started is easy! Purchase the template, download
                      it, and follow our step-by-step setup guide. Should you
                      encounter any issues, our support team is here to help.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="bg-[#F9FAFB] border border-gray-200 rounded-xl px-3 py-1 my-3"
                  >
                    <AccordionTrigger>
                      Do I need any technical skills to use it?
                    </AccordionTrigger>
                    <AccordionContent>
                      No, The Curator is user-friendly and designed for ease of
                      use, regardless of your technical expertise. It comes with
                      comprehensive guides to help you get started.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#EEF1F6] rounded-3xl flex flex-col semi-md:flex-row justify-between items-center gap-8 min-h-20 semi-lg:max-h-28 py-4 px-5 my-3 mx-3">
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

export default AboutDetails;
