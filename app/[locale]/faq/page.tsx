// components
import FAQ from "@/components/FAQ";
import SectionPage from "@/components/SectionPage";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function FAQPage() {
  const t = await getTranslations("FAQ");
  return (
    <div>
      <SectionPage title={t("title")} />
      <FAQ />
    </div>
  );
}
