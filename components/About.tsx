// next
import Link from "next/link";

// react icons
import { IoMdArrowDropdown } from "react-icons/io";

export default function About() {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col gap-8 py-16 lg:py-32 px-4 max-w-[1240px] mx-auto">
        <h1 className="font-bold text-4xl xs:text-5xl tracking-[2px]">
          AIM Digital Agency
        </h1>
        <p className="font-medium tracking-[2px] xs:text-xl">
          At AIM Digital Agency, we specialize in Web Development, Design, and
          Social Media Marketing (SMM). Our goal is to help businesses grow and
          succeed online by creating websites, visuals, and strategies that
          connect with their audience. Whether you need a professional website,
          eye-catching designs, or social media campaigns that deliver results,
          our team is here to bring your ideas to life. Let’s work together to
          make your brand stand out in the digital world!
        </p>
        <Link
          className="flex items-center ml-auto font-semibold tracking-[2px] w-max xl:hover:text-main transition-all duration-300"
          href="/about"
        >
          Read more
          <span>
            <IoMdArrowDropdown size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
}
