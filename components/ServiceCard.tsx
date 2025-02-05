"use client";
// types
import { Service } from "@/types/interfaces";

// framer motion
import { motion } from "framer-motion";

// link
import { Link } from "@/i18n/routing";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="w-full xs:w-[360px] min:h-[354px] border border-white shadow-xl rounded-lg p-10 text-white cursor-pointer"
    >
      <Link
        href={`/services/${service.id}`}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span>
          <img
            className="w-[110px] h-[80px]"
            src={service.icon}
            alt="Service Icon"
          />
        </span>
        <h3 className="font-bold text-2xl">{service.title}</h3>
        <p className="flex flex-col gap-2 max-w-[290px] font-semibold text-lg text-center">
          {service.text}
          <Link
            href={`/services/${service.id}`}
            className="font-semibold text-lg text-center xl:hover:underline"
          >
            Learn more
          </Link>
        </p>
      </Link>
    </motion.div>
  );
}
