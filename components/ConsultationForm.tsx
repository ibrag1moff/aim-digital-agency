"use client";
// react select
// import Select from "react-select";

// ui
import Input from "@/ui/Input";

// next-intl
import { useTranslations } from "next-intl";

interface ConsultationFormProps {
  btnTitle: string;
}

export default function ConsultationForm({ btnTitle }: ConsultationFormProps) {
  const options = [
    { value: "webDevopment", label: "Website Development" },
    { value: "design", label: "UI/UX Design" },
    { value: "smm", label: "Social Media Marketing" },
  ];

  const t = useTranslations("Consultation");

  return (
    <form className="flex flex-col items-center gap-5 w-full sm:w-max">
      {/* <Select
        isMulti
        name="colors"
        options={options}
        placeholder="Subjects *"
      /> */}
      <Input type="email" placeholder={t("email")} required />
      <Input type="text" placeholder={t("name")} required />
      <Input type="text" placeholder={t("company")} required />
      <Input type="number" placeholder={t("budget")} required />
      <Input type="text" placeholder={t("contact")} required />
      <textarea
        className="w-full sm:w-[400px] lg:w-[500px] h-[150px] bg-white text-black p-4 shadow-custom rounded-lg focus:shadow-main outline-none"
        placeholder={t("textarea")}
      />
      <button className="cursor-pointer bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] hover:bg-gradient-to-l font-bold text-lg text-white py-3 px-[50px] rounded-lg">
        {btnTitle}
      </button>
    </form>
  );
}
