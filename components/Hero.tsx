"use client";
// next
import { Link } from "@/i18n/routing";

// framer motion
import { motion } from "framer-motion";

// next-intl
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="bg-hero bg-center bg-cover min-h-screen text-white">
      <div className="flex flex-col items-center justify-center gap-8 px-4 pt-[200px] md:pt-[350px]">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl xs:text-5xl xs:leading-[55px] lg:text-6xl lg:leading-[65px] font-bold max-w-[800px] text-center"
        >
          {t("title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/about"
            className="flex items-center justify-center gap-[10px] bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] font-bold text-lg text-white py-3 px-[30px] rounded-lg"
          >
            <span>
              <svg
                width="19"
                height="25"
                viewBox="0 0 19 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.98906 1.45996L8.73906 0.419922C8.92656 0.15625 9.22656 0 9.54062 0C10.0891 0 10.5391 0.46875 10.5391 1.04004V2.12402C10.5391 2.76367 10.7922 3.37891 11.2375 3.81836L15.2078 7.76367C17.4953 10.0391 18.7891 13.1934 18.7891 16.4893C18.7891 21.1914 15.1328 25 10.6187 25H9.78906C4.82031 25 0.789062 20.8008 0.789062 15.625V15.4395C0.789062 13.0566 1.69844 10.7715 3.31563 9.08691L3.47969 8.91602C3.67656 8.71094 3.94844 8.59375 4.22969 8.59375C4.81563 8.59375 5.28906 9.08691 5.28906 9.69727V14.0625C5.28906 15.7861 6.63438 17.1875 8.28906 17.1875C9.94375 17.1875 11.2891 15.7861 11.2891 14.0625V13.8721C11.2891 12.9932 10.9516 12.1484 10.3563 11.5283L8.54688 9.64355C7.42188 8.47168 6.78906 6.875 6.78906 5.21484C6.78906 3.8623 7.21094 2.53906 7.98906 1.45996Z"
                  fill="white"
                />
              </svg>
            </span>
            {t("button")}
          </Link>
        </motion.div>
      </div>

      <div className="absolute left-40 top-[200px]">
        <motion.svg
          animate={{
            x: [0, 50, 100, 50, 0, -50, -100, -50, 0],
            y: [0, 50, 0, -50, -60, -50, 0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="#B88AE4"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
      <div className="absolute right-[20%] top-1/2">
        <motion.svg
          animate={{
            x: [0, 50, 100, 50, 0, -50, -60, -50, 0],
            y: [0, 50, 0, -50, -60, -50, 0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10"
            cy="10"
            r="9"
            stroke="#B88AE4"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
      <div className="hidden xl:block absolute right-[10%] bottom-40 opacity-50">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29.9998"
            cy="30"
            r="30"
            fill="url(#paint0_linear_205_899)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_205_899"
              x1="29.9998"
              y1="0"
              x2="30"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.185" stopColor="white" stopOpacity="0.6" />
              <stop offset="0.715" stopColor="#B88AE4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-20 left-[10%] opacity-50">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="29.9998"
            cy="30"
            r="30"
            fill="url(#paint0_linear_205_899)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_205_899"
              x1="29.9998"
              y1="0"
              x2="30"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.185" stopColor="white" stopOpacity="0.6" />
              <stop offset="0.715" stopColor="#B88AE4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
