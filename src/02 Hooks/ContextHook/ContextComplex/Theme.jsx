import { createContext, useContext } from "react";

//Create theme context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Create theme provider
export const ThemeProvider = ThemeContext.Provider;

//Create a custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
