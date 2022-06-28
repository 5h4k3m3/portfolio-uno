import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";

// mouse cursor
const mouse = document.querySelector(".mouse") as HTMLElement;
const circle = document.querySelector(".circle") as HTMLElement;

document.addEventListener("mousemove", (e) => {
  if (mouse === null || circle === null) return;
  const setProperty = `translate(${e.pageX}px, ${e.pageY}px`;
  mouse.style.transform = setProperty;
  circle.style.transform = setProperty;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="background">
      <div className="mainCard select-none m-20 h-full">
        <Home />
        <Skills />
        <Works />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
