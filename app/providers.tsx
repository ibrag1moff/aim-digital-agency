// next
import { ReactNode } from "react";

// components
import Nav from "@/components/Nav";
import SocialsBanner from "@/components/SocialsBanner";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

// context
import PopupProvider from "@/context/popupContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <PopupProvider>
        <Nav />
        {children}
        <SocialsBanner />
        <Footer />
        <Copyright />
      </PopupProvider>
    </>
  );
}
