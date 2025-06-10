import { useState } from "react";
import Navbar from "./Navbar";

const quotes = [
  "Be yourself; everyone else is already taken.",
  "Do or do not. There is no try.",
  "Stay hungry. Stay foolish.",
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "ఎదురులేని శక్తి నీలోనే ఉంది.",
  "సంతోషం మనసులో ఉండే భావన మాత్రమే.",
  "నీవు చేసే ప్రతి చిన్న ప్రయత్నం విజయానికి అడుగులు.",
  "బాధలు జీవితానికి భాగం, కానీ అవి మన గమ్యం కాదు.",
  "నీవు మారితే నీ ప్రపంచం మారుతుంది."
];

const RandomQuotePage = () => {
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="page">
      <Navbar />
      <h1>Random Quote Generator</h1>

      <p style={{ fontSize: "1.2rem", marginTop: "20px", fontStyle: "italic", maxWidth: "600px" }}>
        {quote || "Click the button to show a quote!"}
      </p>

      <button className="main-action" onClick={getRandomQuote}>
        Show Random Quote
      </button>
    </div>
  );
};

export default RandomQuotePage;
