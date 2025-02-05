// components
import OurPromisesCard from "./OurPromisesCard";
import SectionTitle from "./SectionTitle";

// types
import { OurPromises as OurPromisesType } from "@/types/interfaces";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function OurPromises() {
  const t = await getTranslations("OurPromises");

  const promises = t.raw("list");

  return (
    <div className="py-16 lg:py-32 px-2 max-w-[1240px] mx-auto">
      <SectionTitle title={t("promiseTitle")} />
      <div className="flex flex-col items-center justify-center gap-12 py-24 sm:flex-row sm:flex-wrap">
        {promises.map((promise: OurPromisesType) => (
          <OurPromisesCard key={promise.id} {...promise} />
        ))}
      </div>
    </div>
  );
}
