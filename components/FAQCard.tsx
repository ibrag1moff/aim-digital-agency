"use client";
// next
import { useState } from "react";

// react icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface FAQCard {
  id: number;
  title: string;
  content: string;
}

export default function FAQCard({ id, title, content }: FAQCard) {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    if (selected == id) return setSelected(null);

    setSelected(id);
  };

  return (
    <div className={`flex flex-col gap-5 w-full `}>
      <div
        onClick={() => toggle(id)}
        className={`flex items-center justify-between cursor-pointer ${
          selected == id ? "bg-main" : "bg-transparent border border-white"
        } p-3 rounded-lg`}
      >
        {/* title of faq */}
        <h1
          className={`font-extrabold text-left text-md ${
            selected == id ? "text-white" : "text-white"
          }`}
        >
          {title}
        </h1>

        {/* logic of faq icon */}
        <span
          className={`${
            selected == id ? "bg-[#FFF7F5]" : "bg-main"
          } rounded-full p-2`}
        >
          {selected == id ? (
            <AiOutlineMinus fill="#5929BC" size={20} />
          ) : (
            <AiOutlinePlus size={20} />
          )}
        </span>
      </div>

      {/* content of faq */}
      <div
        className={
          selected === id
            ? "text-black font-medium text-lg bg-[#f5f5f5] min-h-[200px] rounded-lg leading-[22px] text-left mt-[-10px] p-8"
            : "hidden"
        }
      >
        {content}
      </div>
    </div>
  );
}
