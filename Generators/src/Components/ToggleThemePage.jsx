import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ToggleThemePage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <div className="page">
      <Navbar />
      <h1>Toggle Theme</h1>
      <button className="main-action" onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
};

export default ToggleThemePage;
