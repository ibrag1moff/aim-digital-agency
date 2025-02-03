"use client";
// next
import { Link } from "@/i18n/routing";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";

// react icons
import { BiMenuAltRight } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { GrClose } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

// motion
import { motion } from "framer-motion";

// context
import { usePopup } from "@/context/popupContext";

// components
import Popup from "./Popup";
import ConsultationForm from "./ConsultationForm";

// next-intl
import { useTranslations } from "next-intl";

// types
import { NavLink } from "@/types/interfaces";

export default function Nav() {
  // dropdown states
  const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
  const [navActive, setNavActive] = useState<boolean>(false);

  // state for adding additional styles while scrolling
  const [navScroll, setNavScroll] = useState<boolean>(false);

  // state for active link in navbar
  const [activeLink, setActiveLink] = useState<string>("/");

  // to controll url
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // function for showing popup when needed
  const { showPopup } = usePopup();

  // list of languages
  const languagesList = [
    {
      id: 1,
      icon: "/usa.svg",
      title: "English",
      language: "en",
    },
    {
      id: 2,
      icon: "/azerbaijan.svg",
      title: "Azerbaijani",
      language: "az",
    },
  ];

  // next-intl
  const t = useTranslations("Navbar");
  const tConsultation = useTranslations("Consultation");
  const navLinks = t.raw("links");

  // function for switching language
  function switchLanguage(locale: string) {
    router.push(`/${locale}`);
  }

  useEffect(() =>
    window.addEventListener("click", () => setLanguageDropdown(false))
  );

  useEffect(() => {
    window.addEventListener("click", () => setNavActive(false));
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      onClick={(e) => e.stopPropagation()}
      className={`absolute w-full z-20 py-[30px] px-4 ${
        navScroll ? "bg-[#f8f8f8] shadow-2xl border" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between max-w-[1240px] mx-auto"
      >
        <div className="flex items-center gap-[50px]">
          <Link href="/">
            <svg
              width="139"
              height="53"
              viewBox="0 0 139 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0885 4.48279C17.8209 6.95157 13.5707 15.235 9.65608 22.9337C5.70417 30.5999 1.93867 38.0387 1.23031 39.4355L0 41.9692L5.8533 41.8718L11.7066 41.7743L13.7944 37.389L15.8822 33.0037L26.8804 32.9062L37.8787 32.8412L40.041 37.389L42.2034 41.9367H48.094C51.3748 41.9367 54.0219 41.8718 54.0219 41.7743C54.0219 41.6119 52.2696 38.1686 42.017 18.2235C39.7801 13.8382 36.7602 7.95857 35.3062 5.13247L32.6965 0.0324951H27.0296H21.3627L19.0885 4.48279ZM30.7205 17.7362C32.51 21.4719 34.0759 24.7528 34.1505 24.9477C34.2996 25.2725 32.7337 25.3699 27.0296 25.3699C23.0031 25.3699 19.7223 25.305 19.7223 25.2075C19.7223 25.1101 21.139 22.0891 22.854 18.4834C24.6062 14.8452 26.2094 11.4343 26.4331 10.9146C26.955 9.68022 26.694 9.29041 30.7205 17.7362Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M58.8686 20.9846V41.9367H64.4609H70.0532V20.9846V0.0325017H64.4609H58.8686V20.9846Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M84.4814 3.54076C85.6744 5.45731 90.9312 13.8706 96.1507 22.219L105.658 37.389L108.379 37.324L111.101 37.2266L117.625 27.6438C121.242 22.3814 124.299 17.9311 124.522 17.7687C124.709 17.5738 124.858 22.0891 124.858 29.6903V41.9367H130.04C133.396 41.9367 135.334 41.8068 135.521 41.5794C135.633 41.3845 135.633 31.9642 135.483 20.6273L135.185 1.30013e-05L130.562 0.0974647L125.902 0.194916L117.364 12.7012C112.667 19.5878 108.715 25.24 108.566 25.2725C108.379 25.3375 104.316 19.6528 99.5061 12.7012L90.7821 0.0324969H86.5319H82.319L84.4814 3.54076Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M81.2379 31.1196V41.9367H86.6438H92.0497V39.6629V37.3565L87.3149 29.8202C84.7051 25.6623 82.2818 21.8292 81.909 21.3095C81.2379 20.3674 81.2379 20.5623 81.2379 31.1196Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M4.06375 50.5125V52.9813H6.44981C9.43238 52.9813 10.5508 52.3316 10.5508 50.5775C10.5508 48.8233 9.73064 48.3036 6.6735 48.1736L4.06375 48.0437V50.5125ZM8.83587 49.473C9.09684 49.7004 9.28326 50.1552 9.28326 50.545C9.28326 51.5845 8.53761 52.0067 6.78535 52.0067H5.18222V50.545V49.0832H6.78535C7.68012 49.0832 8.57489 49.2456 8.83587 49.473Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M15.6212 50.545C15.6212 52.494 15.733 52.9813 16.1804 52.9813C16.6278 52.9813 16.7397 52.494 16.7397 50.545C16.7397 48.5959 16.6278 48.1087 16.1804 48.1087C15.733 48.1087 15.6212 48.5959 15.6212 50.545Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M22.4812 48.531C22.3693 48.7908 22.332 49.8628 22.4066 50.9023L22.5184 52.8188H25.501H28.4836L28.5954 51.422L28.7073 50.0577H27.0296C25.762 50.0577 25.3146 50.1877 25.3146 50.545C25.3146 50.8698 25.6874 51.0322 26.4331 51.0322C27.1787 51.0322 27.5515 51.1947 27.5515 51.5195C27.5515 51.9093 27.0669 52.0067 25.501 52.0067H23.4505V50.5125V48.9857L26.0602 49.1482C28.3717 49.3106 28.7073 49.2456 28.5954 48.7908C28.4463 48.0762 22.8167 47.8163 22.4812 48.531Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M33.8895 50.545C33.8895 52.7539 33.964 52.9813 34.6351 52.9813C35.3062 52.9813 35.3808 52.7539 35.3808 50.545C35.3808 48.3361 35.3062 48.1087 34.6351 48.1087C33.964 48.1087 33.8895 48.3361 33.8895 50.545Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M39.4818 48.5959C39.4818 48.9208 39.8919 49.0832 40.7866 49.0832H42.0915V51.0322C42.0915 52.559 42.2033 52.9813 42.6507 52.9813C43.0981 52.9813 43.21 52.559 43.21 51.0322V49.0832H44.5148C45.4096 49.0832 45.8197 48.9208 45.8197 48.5959C45.8197 48.2061 45.2232 48.1087 42.6507 48.1087C40.0783 48.1087 39.4818 48.2061 39.4818 48.5959Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M50.4055 50.4475C49.2125 52.3316 49.0261 52.8513 49.4734 52.9488C49.7717 52.9813 50.1818 52.8188 50.3682 52.5265C50.8529 51.8118 54.2083 51.8118 54.6929 52.5265C54.8794 52.8188 55.2895 52.9813 55.625 52.9488C56.1097 52.8513 55.9605 52.3965 54.7302 50.4475C53.7609 48.9533 52.978 48.1087 52.5679 48.1087C52.1578 48.1087 51.3748 48.9533 50.4055 50.4475ZM53.2017 50.2201C53.6118 50.9997 53.5745 51.0322 52.5306 51.0322C51.263 51.0322 51.2257 50.9673 51.8595 50.0577C52.4933 49.2131 52.6797 49.2456 53.2017 50.2201Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M60.7327 50.545V52.9813H63.5288C65.7658 52.9813 66.325 52.8838 66.325 52.494C66.325 52.1042 65.8403 52.0067 64.2745 52.0067H62.224V50.0577C62.224 48.3361 62.1494 48.1087 61.4783 48.1087C60.8072 48.1087 60.7327 48.3361 60.7327 50.545Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M77.9197 50.3501C77.0622 51.5845 76.3911 52.6889 76.3911 52.7864C76.3911 53.2087 77.5469 52.9488 77.7333 52.494C77.8824 52.1367 78.5162 52.0067 79.9329 52.0067C81.3496 52.0067 81.9834 52.1367 82.1326 52.494C82.2444 52.7539 82.6545 52.9813 83.0646 52.9813C83.773 52.9813 83.6611 52.7539 82.2444 50.6424C81.3496 49.3431 80.3803 48.2386 80.0448 48.1736C79.6347 48.1087 78.9636 48.7908 77.9197 50.3501ZM80.865 50.7724C80.865 50.9348 80.3803 51.0322 79.7465 51.0322H78.6653L79.2991 50.0577L79.9329 49.1157L80.3803 49.8303C80.6413 50.2201 80.8277 50.6424 80.865 50.7724Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M88.396 48.4985C87.7622 49.0507 87.7995 52.1692 88.4705 52.624C88.8061 52.8513 90.0364 52.9813 91.7514 52.9163L94.473 52.8189L94.5848 51.422L94.6967 50.0577H93.019C91.7514 50.0577 91.304 50.1877 91.304 50.545C91.304 50.8698 91.6768 51.0322 92.4224 51.0322C93.1681 51.0322 93.5409 51.1947 93.5409 51.5195C93.5409 51.9093 93.0562 52.0068 91.4904 52.0068H89.4399V50.5125V48.9858L92.0496 49.1482C94.3611 49.3106 94.6967 49.2456 94.5848 48.7908C94.473 48.3686 93.8764 48.2386 91.6768 48.1737C89.8127 48.1087 88.7315 48.2061 88.396 48.4985Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M99.8789 50.545V52.9813H102.675C104.912 52.9813 105.471 52.8838 105.471 52.494C105.471 52.1042 104.987 52.0067 103.421 52.0067C101.631 52.0067 101.37 51.9418 101.37 51.3571C101.37 50.8373 101.631 50.7074 102.489 50.7074C103.122 50.7074 103.607 50.545 103.607 50.3825C103.607 50.1876 103.122 50.0577 102.489 50.0577C101.743 50.0577 101.37 49.8953 101.37 49.5705C101.37 49.1806 101.855 49.0832 103.421 49.0832C104.987 49.0832 105.471 48.9857 105.471 48.5959C105.471 48.2061 104.912 48.1087 102.675 48.1087H99.8789V50.545Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M110.691 50.545C110.691 52.494 110.803 52.9813 111.25 52.9813C111.66 52.9813 111.809 52.5915 111.809 51.5195C111.809 50.7074 111.921 50.0577 112.033 50.0577C112.145 50.0577 113.151 50.7074 114.195 51.5195C115.277 52.3316 116.358 52.9813 116.619 52.9813C116.88 52.9813 117.029 52.1692 117.029 50.545C117.029 48.5959 116.917 48.1087 116.47 48.1087C116.059 48.1087 115.91 48.4985 115.91 49.7654V51.422L113.636 49.7654C112.406 48.8558 111.213 48.1087 111.026 48.1087C110.84 48.1087 110.691 49.2131 110.691 50.545Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M122.696 48.4985C122.099 49.0182 122.099 52.0717 122.696 52.5915C122.957 52.8188 124.15 52.9813 125.492 52.9813C127.43 52.9813 127.878 52.8838 128.213 52.3316C128.437 51.9743 128.512 51.5195 128.4 51.3571C128.027 50.8698 127.095 50.9673 127.095 51.5195C127.095 51.8768 126.648 52.0067 125.417 52.0067H123.74V50.545V49.0832H125.417C126.349 49.0832 127.095 49.2131 127.095 49.408C127.095 49.5705 127.43 49.7329 127.841 49.7329C128.698 49.7329 128.735 49.6029 128.213 48.7259C127.878 48.2061 127.393 48.1087 125.492 48.1087C124.15 48.1087 122.957 48.2711 122.696 48.4985Z"
                fill={navScroll ? "black" : "white"}
              />
              <path
                d="M133.545 49.3431C134.626 50.3176 134.924 50.8373 134.924 51.7794C134.924 52.7539 135.073 52.9813 135.67 52.9813C136.266 52.9813 136.415 52.7539 136.415 51.9743C136.415 51.3246 136.863 50.5125 137.758 49.538C138.988 48.2711 139.025 48.1087 138.354 48.1087C137.907 48.1087 137.236 48.5635 136.751 49.1157L135.931 50.1552L134.961 49.1157C134.365 48.466 133.657 48.1087 133.06 48.1087C132.203 48.1087 132.203 48.1412 133.545 49.3431Z"
                fill={navScroll ? "black" : "white"}
              />
            </svg>
          </Link>

          {/* desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              onClick={() => setActiveLink("/")}
              className={
                activeLink === "/" && pathname === "/"
                  ? "font-bold text-main text-lg transition-all duration-100 tracking-[3px]"
                  : `font-semibold text-lg ${
                      navScroll ? "text-black" : "text-white"
                    } xl:hover:text-main transition-all duration-100 tracking-[3px]`
              }
              href="/"
            >
              {t("home")}
            </Link>
            <Link
              onClick={() => setActiveLink("/services")}
              className={
                activeLink === "/services" && pathname === "/services"
                  ? "font-bold text-main text-lg transition-all duration-100 tracking-[3px]"
                  : `font-semibold text-lg ${
                      navScroll ? "text-black" : "text-white"
                    } xl:hover:text-main transition-all duration-100 tracking-[3px]`
              }
              href="/services"
            >
              {t("services")}
            </Link>
            <div className="relative z-10 group">
              <button
                className={`flex items-center gap-1 font-semibold ${
                  navScroll ? "text-black" : "text-white"
                } text-lg xl:hover:text-main transition-all duration-100 tracking-[3px]`}
              >
                {t("whoweare")}
                <span>
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3_162)">
                      <path
                        d="M4.22387 10.9746C4.53637 11.3408 5.04387 11.3408 5.35637 10.9746L8.55637 7.22461C8.78637 6.95508 8.85387 6.55371 8.72887 6.20215C8.60387 5.85059 8.31387 5.62207 7.98887 5.62207L1.58887 5.625C1.26637 5.625 0.973867 5.85352 0.848867 6.20508C0.723867 6.55664 0.793867 6.95801 1.02137 7.22754L4.22137 10.9775L4.22387 10.9746Z"
                        fill={navScroll ? "black" : "white"}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_162">
                        <rect
                          width="8"
                          height="15"
                          fill={navScroll ? "black" : "white"}
                          transform="translate(0.789001)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </button>
              <div className="absolute top-[30px] left-0 w-[300px] h-max z-10 bg-white border shadow-md p-8 rounded-lg hidden  group-hover:block">
                <div className="flex flex-col items-start gap-6">
                  <Link
                    className="flex items-center gap-4 text-lg pb-2 tracking-[2px] text-black xl:hover:text-main"
                    href="/about"
                  >
                    <IoMdContact size={30} />
                    {t("about")}
                  </Link>
                  <Link
                    className="flex items-center gap-4 text-lg pb-2 tracking-[2px] text-black xl:hover:text-main"
                    href="/contact"
                  >
                    <LuPhoneCall size={25} />
                    {t("contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* desktop nav end */}

          {/* mobile nav */}

          <div
            className={
              navActive
                ? "fixed top-0 left-0 bottom-0 right-0 w-full h-1/2 border rounded-xl bg-black transition-all duration-300"
                : "fixed top-[-100%] left-0 bottom-0 right-0 w-full h-1/2 border rounded-xl bg-black transition-all duration-300"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center gap-4 h-full">
              {navLinks.map((link: NavLink) => (
                <Link
                  className="font-semibold font-2xl"
                  key={link.id}
                  href={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* mobile nav end */}
        <div className="flex items-center gap-4 sm:gap-[25px] relative">
          <button onClick={() => setLanguageDropdown(!languageDropdown)}>
            <img
              src={params.locale === "az" ? "azerbaijan.svg" : "usa.svg"}
              alt={String(params.locale)}
            />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className={
              languageDropdown
                ? "absolute top-[90px] left-[-200px] sm:left-0 w-max h-max rounded-lg p-4 bg-white shadow-md z-10"
                : "hidden"
            }
          >
            {languagesList.map((language) => (
              <div
                onClick={() => switchLanguage(language.language)}
                key={language.id}
                className="flex items-center gap-4 hover:bg-[#e5e5e5] transition-all duration-300 cursor-pointer px-1"
              >
                <img src={language.icon} alt="Language Switcher" />
                <span className="uppercase font-bold text-xl text-main tracking-[2px]">
                  {language.title}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={showPopup}
            className="hidden sm:flex items-center gap-[10px] cursor-pointer bg-gradient-to-r from-[#8E2DE2] to-[#5929BC] hover:bg-gradient-to-l font-bold text-lg text-white py-3 px-[50px] rounded-lg"
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
          </button>

          {/* popup  */}
          <Popup>
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col text-center gap-1 text-black">
                <h1 className="text-4xl md:text-5xl font-bold">
                  {tConsultation("title")}
                </h1>
                <p className="text-xl font-medium">{tConsultation("text")}</p>
              </div>
              <ConsultationForm btnTitle={tConsultation("button")} />
            </div>
          </Popup>
          {/* popup end */}

          <button
            onClick={() => setNavActive(!navActive)}
            className="lg:hidden relative z-20"
          >
            {navActive ? (
              <GrClose color="#fff" size={35} />
            ) : (
              <BiMenuAltRight fill="#fff" size={40} />
            )}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
