"use client";
// next
import { useParams } from "next/navigation";

// next-intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// framer motion
import { motion } from "framer-motion";

export default function WebsiteDetails() {
  const params = useParams();
  const { id } = params;

  const t = useTranslations("Services.WebDevelopment");

  const list = t.raw("type");

  const details = list.find(
    (item: {
      id: string;
      title: string;
      text: string;
      bg: string;
      button: string;
    }) => item.id == id
  );

  return (
    <div>
      <div
        className="bg-cover bg-center h-[700px] flex flex-col items-center justify-center gap-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${details.bg})`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase font-bold text-3xl md:text-6xl tracking-[2px] text-center"
        >
          {details.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            className="border py-3 px-8 font-semibold text-xl tracking-[3px] shadow-custom uppercase xl:hover:bg-white xl:hover:text-black transition-all duration-300"
            href="/contact"
          >
            {details.button}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
