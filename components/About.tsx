// next
import { Link } from "@/i18n/routing";

// react icons
import { IoMdArrowDropdown } from "react-icons/io";

// next-intl
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("About");

  return (
    <div className="bg-secondary">
      <div className="flex flex-col gap-8 py-16 lg:py-32 px-4 max-w-[1240px] mx-auto">
        <h1 className="font-bold text-4xl xs:text-5xl tracking-[2px]">
          {t("title")}
        </h1>
        <p className="font-medium tracking-[2px] xs:text-xl">{t("text")}</p>
        <Link
          className="flex items-center ml-auto font-semibold tracking-[2px] w-max xl:hover:text-main transition-all duration-300"
          href="/about"
        >
          {t("button")}
          <span>
            <IoMdArrowDropdown size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
}
