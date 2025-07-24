import "./App.css";
import Page1 from "./Components/Pages/Page1";
import Page2 from "./Components/Pages/Page2";
import Page3 from "./Components/Pages/Page3";
import Page4 from "./Components/Pages/Page4";
import Page5 from "./Components/Pages/Page5";
import Page6 from "./Components/Pages/Page6";
import Home from "./Components/Layout/Home";
import AuthProvider from "./Context/AuthContext";
import { SearchProvider } from "./Components/Hooks/SearchContext";
const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SearchProvider>
          <Home />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </SearchProvider>
      </AuthProvider>
    </>
  );
};

export default App;
