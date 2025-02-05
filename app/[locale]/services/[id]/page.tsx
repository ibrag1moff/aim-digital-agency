export default function ServicesDetails({ params }: { params: any }) {
  const { id } = params;
  console.log(id);
  return (
    <>
      <div
        className={`${
          id === "web_development" ? "bg-webdev" : "bg-black"
        } bg-cover bg-center h-[500px] flex items-center justify-center`}
      >
        <h1 className="uppercase font-bold text-3xl md:text-5xl tracking-[2px] text-center">
          web development
        </h1>
      </div>
      <div className="py-20 max-w-[1240px] mx-auto">dd</div>
    </>
  );
}
