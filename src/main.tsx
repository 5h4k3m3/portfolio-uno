import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Footer } from "./components/atoms/Footer";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";
import { BgCard } from "./components/atoms/BgCard";
import { About } from "./pages/About";

// mouse cursor
const mouse = document.querySelector(".mouse") as HTMLElement;
document.addEventListener("mousemove", (e) => {
  if (mouse === null) return;
  const setProperty = `translate(${e.pageX}px, ${e.pageY}px`;
  mouse.style.transform = setProperty;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-background w-screen h-screen relative items-center flex justify-center select-none">
      <BgCard>
        <Home />
        <Footer />
      </BgCard>
    </div>
  </React.StrictMode>
);
