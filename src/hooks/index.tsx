import { ReactNode } from "react";
import { ThemeContextProvider } from "../context/ThemeContext";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <ThemeContextProvider initialTheme="">{children}</ThemeContextProvider>;
}

export default AppProvider;
