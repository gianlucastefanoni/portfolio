import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioFullstack } from "./pages/PortfolioFullstack";
import { PortfolioGamedev } from "./pages/PortfolioGamedev";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/fullstack" element={<PortfolioFullstack />} />
        <Route path="/portfolio/gamedev" element={<PortfolioGamedev />} />
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </HashRouter>
  );
}
