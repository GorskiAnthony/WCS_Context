import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="toggleButton">
      {theme === "light" ? "🌘" : "☀️"}
    </button>
  );
};

export default Button;
