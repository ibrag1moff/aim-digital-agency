"use client";
// next
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

// components
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

// next-intl
import { useTranslations } from "next-intl";

// types
import { Service } from "@/types/interfaces";

export default function Services() {
  const t = useTranslations("Services");

  const services = t.raw("list");

  const pathname = usePathname();
  const params = useParams();

  const { locale } = params;

  return (
    <div className="text-white py-16 lg:py-32 px-2 max-w-[1240px] mx-auto relative">
      {pathname != `/${locale}/services` && <SectionTitle title={t("title")} />}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-[57px] mt-[90px]">
        {services.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
