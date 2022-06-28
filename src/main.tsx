import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { Footer } from "./pages/Footer";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <Skills />
    <Works />
    <Footer />
  </React.StrictMode>
);
