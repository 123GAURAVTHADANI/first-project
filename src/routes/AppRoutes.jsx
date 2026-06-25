import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import MainLayout from "../pages/MainLayout";
import Parent from "../pages/Parent";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Parent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}
export default AppRoutes;
