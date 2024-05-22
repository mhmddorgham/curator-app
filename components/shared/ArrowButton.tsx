"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface IArrowButton {
  style?: string;
  label?: string;
  onClick?: () => void;
}
function ArrowButton(props: IArrowButton) {
  const [viewArrow, setViewArrow] = useState<boolean>(false);
  return (
    <button
      onClick={props.onClick}
      onMouseEnter={() => setViewArrow(true)}
      onMouseLeave={() => setViewArrow(false)}
      className={`flex items-center gap-3   duration-500 text-[14px] text-white rounded-xl px-3 py-[6px]  ${
        props.style ? props.style : ""
      }`}
    >
      {props.label ? props.label : "View More"}
      <ArrowRightIcon
        className={`w-[20px] h-[24px] relative duration-300 ${
          viewArrow ? " right-0" : " right-[-10px] opacity-0 h-[0] w-[0]"
        }`}
      />
    </button>
  );
}

export default ArrowButton;
