"use client";
// react-icons
import { GrClose } from "react-icons/gr";

// context
import { usePopup } from "@/context/popupContext";

// components
import ConsultationForm from "./ConsultationForm";

// framer motion
import { motion } from "framer-motion";

export default function Popup() {
  const { popupActive, hidePopup } = usePopup();

  return (
    <div
      className={
        popupActive
          ? "fixed top-0 left-0 bottom-0 right-0 bg-black/80 z-20 flex items-center justify-center"
          : "hidden"
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, visualDuration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[740px] min-h-[350px] bg-white rounded-lg shadow-xl mx-4 p-8 relative"
      >
        <button
          onClick={hidePopup}
          className="absolute right-[-10px] top-[-20px] bg-main p-3 rounded-full"
        >
          <GrClose size={30} color="white" />
        </button>
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col text-center gap-1 text-black">
            <h1 className="text-4xl md:text-5xl font-bold">Still Deciding?</h1>
            <p className="text-xl font-medium">
              Discuss your goals and get tailored digital solutions!
            </p>
          </div>
          <ConsultationForm btnTitle="Submit" />
        </div>
      </motion.div>
    </div>
  );
}
