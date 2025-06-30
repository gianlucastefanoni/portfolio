import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioFullstack } from "./pages/PortfolioFullstack";
import { PortfolioGamedev } from "./pages/PortfolioGamedev";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<PortfolioFullstack />} />
        <Route path="/gamedev" element={<PortfolioGamedev />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
