// components
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

// next-intl
import { getTranslations } from "next-intl/server";

// types
import { Service } from "@/types/interfaces";

export default async function Services() {
  const t = await getTranslations("Services");

  const services = t.raw("list");

  return (
    <div className="text-white py-16 lg:py-32 px-2 max-w-[1240px] mx-auto relative">
      <SectionTitle title={t("title")} />
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-[57px] mt-[90px]">
        {services.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
