export default function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="text-center text-4xl lg:text-5xl text-white font-bold relative">
      {title}
      <span className="before:absolute before:top-14 before:left-1/2 before:-translate-x-1/2 before:w-[160px] before:h-[5px] before:rounded-3xl before:bg-main before:content-['']"></span>
    </h1>
  );
}
