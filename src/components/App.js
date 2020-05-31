import React, { useState } from "react";
import { ThemeContext, themes } from "../theme-context";
import Layout from "./Layout";

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const handleThemeToggler = (e) => {
  console.log("theme toggler", isThemeDark);
  setIsThemeDark(!isThemeDark)
  
};

  return (
    <ThemeContext.Provider
      value={{
        theme: isThemeDark ? themes.dark : themes.light,
        handleThemeToggler
      }}
    >
      <div className='App'>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
