// components
import SectionPage from "@/components/SectionPage";
import OurPromises from "@/components/OurPromises";
import FAQ from "@/components/FAQ";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutHero");
  return (
    <div>
      <SectionPage title={t("title")} />
      <div className="flex flex-col gap-8 py-16 lg:py-32 px-4 max-w-[1240px] mx-auto">
        <h1 className="font-bold text-4xl xs:text-5xl tracking-[2px]">
          {t("aboutTitle")}
        </h1>
        <p className="font-medium tracking-[2px] xs:text-xl">{t("text")}</p>
      </div>
      <FAQ />
      <OurPromises />
    </div>
  );
}
