// components
import FAQ from "@/components/FAQ";
import SectionPage from "@/components/SectionPage";
import Services from "@/components/Services";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
  const t = await getTranslations("Services");
  return (
    <div className="pt-12">
      <SectionPage title={t("title")} />
      <Services />
      <FAQ />
    </div>
  );
}
