// ui
import Input from "@/ui/Input";

// react icons
import { LuSend } from "react-icons/lu";

export default function ContactForm({ t }: { t: any }) {
  return (
    <div className="py-24 px-4">
      <form className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 w-full">
        <Input type="text" placeholder={t("name")} required />
        <Input type="text" placeholder={t("company")} required />
        <Input type="email" placeholder={t("email")} required />
        <Input type="number" placeholder={t("phone")} />
        <textarea
          className="w-full sm:w-[400px] lg:w-[500px] h-[150px] bg-white text-black p-4 shadow-custom rounded-lg focus:shadow-main outline-none"
          placeholder={t("textarea")}
          required
        />
        <button className="flex items-center justify-center gap-[10px] w-full sm:w-[400px] lg:w-[500px] cursor-pointer bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] hover:bg-gradient-to-l font-bold text-lg text-white py-3 px-[50px] rounded-lg">
          <span>
            <LuSend size={20} />
          </span>
          {t("button")}
        </button>
      </form>
    </div>
  );
}
