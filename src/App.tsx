import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import "./shared/tailwind.scss";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
