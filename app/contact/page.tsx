"use client";
// components
import SectionPage from "@/components/SectionPage";
import ContactForm from "@/components/ContactForm";

// react icons
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// framer motion
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <SectionPage
        title="Get in Touch with Us!"
        text="Contact us today to discuss your project or get answers to your questions—we’re here to help!"
      />
      <div className="py-[150px] px-4 max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col lg:flex-row-reverse items-center justify-evenly"
        >
          <ContactForm />
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="w-full sm:w-[500px] h-[200px] bg-white shadow-custom rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-4 h-full">
                <IoIosPhonePortrait fill="#5929BC" size={90} />
                <h1 className="font-bold text-xl text-black">
                  +994 (70) 871 68 78
                </h1>
                <div className="w-full bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] h-[15px] rounded-full"></div>
              </div>
            </div>
            <div className="w-full sm:w-[500px] h-[200px] bg-white shadow-custom rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-4 h-full">
                <MdEmail fill="#5929BC" size={80} />
                <h1 className="font-bold text-xl text-black">info@theaim.az</h1>
                <div className="w-full bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] h-[15px] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
