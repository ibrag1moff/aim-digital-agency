// components
import OurPromisesCard from "./OurPromisesCard";
import SectionTitle from "./SectionTitle";

// data
import { ourPromises } from "@/data/ourPromises";

export default function OurPromises() {
  return (
    <div className="py-16 lg:py-32 px-2 max-w-[1240px] mx-auto">
      <SectionTitle title="Our promises to you" />
      <div className="flex flex-col items-center justify-center gap-12 py-24 sm:flex-row sm:flex-wrap">
        {ourPromises.map((promise) => (
          <OurPromisesCard key={promise.id} {...promise} />
        ))}
      </div>
    </div>
  );
}
