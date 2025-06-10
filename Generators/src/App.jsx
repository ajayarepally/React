import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RandomColorPage from "./Components/RandomColorPage";
import RandomQuotePage from "./Components/RandomQuotePage";
import ToggleThemePage from "./Components/ToggleThemePage";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RandomColorPage />} />
        <Route path="/quote" element={<RandomQuotePage />} />
        <Route path="/theme" element={<ToggleThemePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
