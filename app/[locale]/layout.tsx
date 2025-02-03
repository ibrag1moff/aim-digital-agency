// next
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

// providers
import Providers from "./providers";

// next-intl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${poppins.variable} bg-[#121215] text-[#f8f8f8] antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
