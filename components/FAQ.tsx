"use client";
// components
import SectionTitle from "./SectionTitle";
import FAQCard from "./FAQCard";

// react-tabs
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

// data
import { webDevFAQ, brandingFAQ, socialMediaFAQ } from "@/data/faq";

export default function FAQ() {
  return (
    <div className="bg-secondary">
      <div className="text-white  py-16 lg:py-32 px-2 max-w-[1240px] mx-auto relative">
        <SectionTitle title="Frequently Asked Questions" />
        <Tabs>
          <TabList className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 py-20">
            <Tab
              className="cursor-pointer border border-white rounded-lg py-4 px-8 text-white font-semibold transition-all duration-300"
              selectedClassName="bg-main text-white outline-none border-main"
            >
              Web Development
            </Tab>
            <Tab
              className="cursor-pointer border border-white rounded-lg py-4 px-8 text-white font-semibold transition-all duration-300"
              selectedClassName="bg-main text-white outline-none border-main"
            >
              Branding
            </Tab>
            <Tab
              className="cursor-pointer border border-white rounded-lg py-4 px-8 text-white font-semibold transition-all duration-300"
              selectedClassName="bg-main text-white outline-none border-main"
            >
              Social Media Management
            </Tab>
          </TabList>

          <TabPanel className="flex flex-col gap-4">
            {webDevFAQ.map((faq) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col gap-4">
            {brandingFAQ.map((faq) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col gap-4">
            {socialMediaFAQ.map((faq) => (
              <FAQCard key={faq.id} {...faq} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
