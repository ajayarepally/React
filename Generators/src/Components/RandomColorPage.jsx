import { useState } from "react";

const RandomColorPage = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div className="page" style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "2rem" }}>
      <h1>Random Color Generator</h1>
      <button onClick={generateRandomColor}>Generate Color</button>
      <p>Current Color: <strong>{bgColor}</strong></p>
    </div>
  );
};

export default RandomColorPage;
