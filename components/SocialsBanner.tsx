// react icons
import { FaLinkedin, FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";

// next intl
import { getTranslations } from "next-intl/server";

export default async function SocialsBanner() {
  const t = await getTranslations("Banner");
  return (
    <div className="bg-socials bg-center bg-cover shadow-custom">
      <div className="flex flex-col items-center justify-center gap-12 py-16">
        <h1 className="font-medium text-4xl sm:text-5xl text-center tracking-[2px]">
          {t("title")}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12 px-4">
          <a
            className="xl:hover:text-main transition-all duration-300"
            href="#!"
          >
            <FaInstagram size={60} />
          </a>
          <a
            className="xl:hover:text-main transition-all duration-300"
            href="#!"
          >
            <FaLinkedin size={60} />
          </a>
          <a
            className="xl:hover:text-main transition-all duration-300"
            href="#!"
          >
            <FaYoutube size={60} />
          </a>
          <a
            className="xl:hover:text-main transition-all duration-300"
            href="#!"
          >
            <FaTelegram size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
