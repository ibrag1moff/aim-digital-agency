"use client";
// next
import { useParams } from "next/navigation";

// nextintl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ServicesDetails() {
  const params = useParams();
  const { id } = params;

  const t = useTranslations("Services");

  // Map ID to translation keys
  const serviceKey =
    id === "web_development"
      ? "WebDevelopment"
      : id === "branding"
      ? "Branding"
      : id === "search_engine_optimization"
      ? "SEO"
      : null;

  if (!serviceKey) {
    return (
      <div className="text-center text-red-500 font-bold text-4xl tracking-[1px] flex items-center justify-center h-screen">
        Service Not Found
      </div>
    );
  }

  const list = t.raw(`${serviceKey}.list`);

  const types = t.raw(`${serviceKey}.type`);

  return (
    <>
      <div
        className="bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{ backgroundImage: `${t(`${serviceKey}.bg`)}` }}
      >
        <h1 className="uppercase font-bold text-3xl md:text-5xl tracking-[2px] text-center">
          {t(`${serviceKey}.title`)}
        </h1>
      </div>
      <div className="py-20 px-4 max-w-[1240px] mx-auto flex flex-col gap-[200px]">
        <div className="flex flex-col gap-12">
          <p className="text-2xl leading-[34px] md:text-4xl font-semibold tracking-[2px] md:leading-[46px]">
            {t(`${serviceKey}.text`)}
          </p>
          <img
            className="h-[600px] object-cover rounded-xl border"
            src={t(`${serviceKey}.detailsImage`)}
            alt="Image"
          />
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="font-bold text-3xl md:text-6xl uppercase tracking-[2px]">
            {t(`${serviceKey}.secondTitle`)}
          </h1>
          <div className="flex flex-col gap-12">
            {list.map((item: { id: number; title: string; text: string }) => (
              <div className="flex flex-col gap-2" key={item.id}>
                <h1 className="text-xl font-semibold uppercase">
                  ✅ {item.title}
                </h1>
                <p className="font-medium text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {types.map(
            (type: { id: string; title: string; text: string; bg: string }) => (
              <div
                className="flex flex-col p-4 items-center justify-center rounded-xl gap-6"
                key={type.id}
              >
                <img
                  className="w-full h-[350px] object-cover rounded-xl"
                  src={type.bg}
                  alt="Image"
                />

                <h1 className="font-black text-5xl uppercase mr-auto tracking-[3px]">
                  {type.title}
                </h1>
                <p className="font-medium mr-auto text-2xl max-w-[900px]">
                  {type.text}
                </p>
                <Link
                  className="border py-3 px-12 font-semibold mr-auto rounded-lg tracking-[2px] xl:hover:bg-white xl:hover:text-black transition-all duration-300"
                  href={`/web/${type.id}`}
                >
                  Read more
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
