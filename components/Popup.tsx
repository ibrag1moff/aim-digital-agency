"use client";
// next
import { ReactNode } from "react";

// react-icons
import { GrClose } from "react-icons/gr";

// context
import { usePopup } from "@/context/popupContext";

// framer motion
import { motion } from "framer-motion";

export default function Popup({ children }: { children: ReactNode }) {
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
        {children}
      </motion.div>
    </div>
  );
}
