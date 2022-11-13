import { createContext } from "react";

interface props {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as props);
