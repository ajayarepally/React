import { useState } from "react";

const quotes = [
  "ధైర్యంగా ముందుకు సాగు - విజయం నీది!",
  "ప్రతి సమస్యకి పరిష్కారం ఉంది.",
  "నువ్వు ప్రయత్నిస్తే సాధ్యం కాదు అనేది ఏదీ లేదు.",
  "సాధించలేనిది ఏదీ లేదు.",
  "నీ శక్తి మీద నమ్మకం ఉంచు.",
  "ప్రతి రోజు ఒక కొత్త అవకాశం.",
  "సంకల్పం ఉన్నప్పుడు మార్గం కనిపిస్తుంది.",
  "నువ్వు నమ్మినది సాధించవచ్చు.",
  "ప్రయత్నం చేయడం మానవద్దు.",
  "సమయం విలువైనది, దాన్ని వృథా చేయకు."
];

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="page" style={{ padding: "2rem" }}>
      <h1>Random Telugu Quote</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{quote}</p>
      <button onClick={getRandomQuote}>Show New Quote</button>
    </div>
  );
};

export default RandomQuotePage;
