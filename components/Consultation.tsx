// components
import ConsultationForm from "./ConsultationForm";
import SectionTitle from "./SectionTitle";

export default function Consultation() {
  return (
    <div className="py-16 lg:py-32 px-2 max-w-[1240px] mx-auto">
      <SectionTitle title="Still deciding?" />
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:justify-between mt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-8 lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold">What's included:</h1>
            <ul className="list-disc font-medium text-lg">
              <li className="ml-4">
                Discussing the client’s goals and challenges.
              </li>
              <li className="ml-4">Explaining the services we offer</li>
              <li className="ml-4">
                Suggesting potential solutions and technologies.
              </li>
            </ul>
          </div>
          <div className="w-[350px] lg:w-[400px] mx-auto">
            <img src="/consultation.svg" alt="Image" />
          </div>
        </div>
        <ConsultationForm btnTitle="Get your unique proposal" />
      </div>
    </div>
  );
}
