// components
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-1.svg",
    },
    {
      id: 2,
      title: "Web Development",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-2.svg",
    },
    {
      id: 3,
      title: "SMM",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-3.svg",
    },
    {
      id: 4,
      title: "UI/UX Design",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-1.svg",
    },
    {
      id: 5,
      title: "Web Development",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-2.svg",
    },
    {
      id: 6,
      title: "SMM",
      text: "A website can have different objectives. There are websites that inform, we...",
      icon: "/services-icon-3.svg",
    },
  ];
  return (
    <div className="text-white py-16 lg:py-32 px-2 max-w-[1240px] mx-auto relative">
      <SectionTitle title="Our Services" />
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-[57px] mt-[90px]">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
