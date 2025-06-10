import { useState } from "react";

const ToggleThemePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="page"
      style={{
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <h1>Toggle Theme</h1>
      <button onClick={toggleTheme}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
    </div>
  );
};

export default ToggleThemePage;
