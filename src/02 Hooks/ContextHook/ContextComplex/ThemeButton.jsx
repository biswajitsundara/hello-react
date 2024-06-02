import { useState } from "react";
import useTheme from "./Theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const [toggleDark, setToggleDark] = useState(false);

  const onChangebtn = () => {
    if (toggleDark) {
      darkTheme();
    } else {
      lightTheme();
    }

    setToggleDark(!toggleDark);
  };

  return (
    <>
      <button className="toggle-btn" onClick={onChangebtn}>
        {!toggleDark && <h1>&#x1F319;</h1>}
        {toggleDark && <h1>&#x1F31E;</h1>}
      </button>
    </>
  );
}

export default ThemeBtn;
