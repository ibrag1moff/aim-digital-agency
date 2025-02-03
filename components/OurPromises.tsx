// components
import OurPromisesCard from "./OurPromisesCard";
import SectionTitle from "./SectionTitle";

// data
import { ourPromises } from "@/data/ourPromises";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function OurPromises() {
  const t = await getTranslations("AboutHero");
  return (
    <div className="py-16 lg:py-32 px-2 max-w-[1240px] mx-auto">
      <SectionTitle title={t("promiseTitle")} />
      <div className="flex flex-col items-center justify-center gap-12 py-24 sm:flex-row sm:flex-wrap">
        {ourPromises.map((promise) => (
          <OurPromisesCard key={promise.id} {...promise} />
        ))}
      </div>
    </div>
  );
}
