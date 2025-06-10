import Navbar from "./Navbar";

const RandomColorPage = () => {
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div className="page">
      <Navbar />
      <h1>Random Color Generator</h1>
      <button className="main-action" onClick={changeColor}>Generate Random Color</button>
    </div>
  );
};

export default RandomColorPage;
