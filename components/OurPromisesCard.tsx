interface OurPromisesCardProps {
  id: number;
  title: string;
  text: string;
  icon: any;
}

export default function OurPromisesCard({
  id,
  title,
  text,
  icon,
}: OurPromisesCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2">
      <span className="text-main">{icon}</span>
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="font-medium tracking-[2px] text-md max-w-[500px]">{text}</p>
    </div>
  );
}
