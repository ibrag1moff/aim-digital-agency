// next
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// providers
import Providers from "./providers";

// font
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIM - Digital Agency",
  description: "AIM Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[#121215] text-[#f8f8f8] antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
