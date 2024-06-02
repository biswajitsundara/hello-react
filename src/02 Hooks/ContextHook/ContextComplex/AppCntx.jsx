import { useEffect, useState } from "react";
import { ThemeProvider } from "./Theme";
import "./Appx.css";
import ThemeBtn from "./ThemeButton";
import Card from "./Card";

function AppCntx() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
    console.log(themeMode);
  };

  const lightTheme = () => {
    setThemeMode("light");
    console.log(themeMode);
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  );
}

export default AppCntx;
