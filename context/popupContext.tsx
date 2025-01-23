"use client";
// next
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type PopupContext = {
  popupActive: boolean;
  showPopup: () => void;
  hidePopup: () => void;
};

const popupContext = createContext({} as PopupContext);

export const usePopup = () => useContext(popupContext);

export default function PopupProvider({ children }: { children: ReactNode }) {
  const [popupActive, setPopupActive] = useState<boolean>(false);

  const showPopup = () => setPopupActive(true);

  const hidePopup = () => setPopupActive(false);

  useEffect(() => window.addEventListener("click", hidePopup));

  return (
    <popupContext.Provider value={{ popupActive, showPopup, hidePopup }}>
      {children}
    </popupContext.Provider>
  );
}
