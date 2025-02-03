"use client";
// next
import { useState } from "react";

// react icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface FAQCard {
  id: number;
  question: string;
  answer: string;
}

export default function FAQCard({ id, question, answer }: FAQCard) {
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
          {question}
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

      {/* answer of faq */}
      <div
        className={
          selected === id
            ? "text-black font-medium text-xl bg-[#f5f5f5] min-h-[150px] rounded-lg leading-[22px] text-left mt-[-10px] p-8"
            : "hidden"
        }
      >
        {answer}
      </div>
    </div>
  );
}
