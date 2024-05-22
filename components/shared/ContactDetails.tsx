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
import { Button } from "../ui/button";
export default function ContactDetails() {
  return (
    <div className="w-full flex flex-col semi-lg:flex-row items-start gap-2   ">
      <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 ">
        <div className=" h-fit py-3">
          <div className="">
            <h1 className="text-3xl font-[600] text-primary-black">
              Get in Contact
            </h1>
            <p className="text-[#586069] text-[17px] mt-3">
              If you have any questions, feedback, or need support, please do
              not hesitate to reach out.
            </p>
          </div>

          <form className="w-full flex flex-col  px-4 pb-3 mt-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#EEF1F6] rounded-xl p-4 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#EEF1F6] rounded-xl p-4 outline-none"
              />
            </div>
            <div className="py-6">
              <textarea
                cols={30}
                rows={19}
                className="w-full bg-[#EEF1F6] rounded-xl p-4 outline-none"
                placeholder="message"
              ></textarea>
            </div>

            <div className="w-full flex justify-center items-center pb-3">
              <Button className="w-full !py-6 ">Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[50px] px-7 py-6 ">
        <div className=" h-fit py-3">
          <div className="">
            <h1 className="text-3xl font-[600] text-primary-black">Reach us</h1>
            <p className="text-[#586069] text-[17px] mt-3">
              If you have any questions, feedback, or need support, please do
              not hesitate to reach out.
            </p>
          </div>

          <div className="w-full h-fit flex flex-col border border-gray-200 rounded-[20px] px-4 py-3 mt-4">
            <div className="flex flex-col gap-3 h-full w-full  ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.171365426829!2d55.27692297609604!3d25.197442831689514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sDubai%20Mall!5e0!3m2!1sen!2sae!4v1716393278604!5m2!1sen!2sae"
                className="w-full h-full min-h-[40rem] rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
