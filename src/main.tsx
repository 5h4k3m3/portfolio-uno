import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Footer } from "./components/atoms/Footer";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";
import { Card } from "./components/atoms/Card";
import { About } from "./pages/About";
import { Navigation } from "./components/molecules/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <div className="bg-background w-screen h-screen select-none flex flex-col items-center pt-4 space-y-8">
        <Card>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Card>
        <Navigation />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);
