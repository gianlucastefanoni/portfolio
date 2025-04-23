import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { PortfolioFullstack } from "./pages/PortfolioFullstack";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/fullstack" element={<PortfolioFullstack />} />
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
