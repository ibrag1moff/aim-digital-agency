// components
import ConsultationForm from "./ConsultationForm";
import SectionTitle from "./SectionTitle";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function Consultation() {
  const t = await getTranslations("Consultation");

  const list = t.raw("list");

  return (
    <div className="py-16 lg:py-32 px-2 max-w-[1240px] mx-auto">
      <SectionTitle title={t("title")} />
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:justify-between mt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold">{t("subtitle")}</h1>
            <ul className="list-disc font-medium text-lg">
              {list.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-[350px] lg:w-[400px] mx-auto">
            <img src="/consultation.svg" alt="Image" />
          </div>
        </div>
        <ConsultationForm btnTitle={t("button")} />
      </div>
    </div>
  );
}
