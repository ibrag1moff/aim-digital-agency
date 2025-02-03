"use client";
// components
import SectionTitle from "./SectionTitle";
import FAQCard from "./FAQCard";

// react-tabs
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

// next-intl
import { useTranslations } from "next-intl";

// types
import { FAQI, FAQTablist } from "@/types/interfaces";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const tablist = t.raw("tablist");
  const webDevFAQ = t.raw("webDevFAQ");
  const brandingFAQ = t.raw("brandingFAQ");
  const seoFAQ = t.raw("seoFAQ");

  return (
    <div className="bg-secondary">
      <div className="text-white  py-16 lg:py-32 px-2 max-w-[1240px] mx-auto relative">
        <SectionTitle title={t("title")} />
        <Tabs>
          <TabList className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 py-20">
            {tablist.map((list: FAQTablist) => (
              <Tab
                key={list.id}
                className="cursor-pointer border border-white rounded-lg py-4 px-8 text-white font-semibold transition-all duration-300"
                selectedClassName="bg-main text-white outline-none border-main"
              >
                {list.title}
              </Tab>
            ))}
          </TabList>

          <TabPanel className="flex flex-col gap-4">
            {webDevFAQ.map((faq: FAQI) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col gap-4">
            {brandingFAQ.map((faq: FAQI) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col gap-4">
            {seoFAQ.map((faq: FAQI) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
