// styles
import "../globals.css";

// link
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-hero bg-center bg-cover h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-white font-extrabold text-6xl lg:text-[150px]">
        404
      </h1>
      <Link className="bg-main text-white py-3 px-12 rounded-full" href="/">
        Go to home
      </Link>
    </div>
  );
}
