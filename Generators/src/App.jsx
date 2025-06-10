import RandomColorPage from "./Components/RandomColorPage";
import RandomQuotePage from "./Components/RandomQuotePage";
import ToggleThemePage from "./Components/ToggleThemePage";
import SignupPage from "./Components/SignupPage";

const App = () => {
  const path = window.location.pathname;

  if (path === "/quote") return <RandomQuotePage />;
  if (path === "/theme") return <ToggleThemePage />;
  if (path === "/signup") return <SignupPage />;
  return <RandomColorPage />;
};

export default App;
