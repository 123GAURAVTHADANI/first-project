import { useEffect, useRef, useState } from "react";
import Child from "./pages/Child";
import ClassComponent from "./pages/ClassComponent";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
