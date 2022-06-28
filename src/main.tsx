import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-background w-screen h-screen absolute top-0 left-0">
      <div className="mainCard select-none m-20">
        <Home />
        <Skills />
        <Works />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
