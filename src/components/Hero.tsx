import React from "react";
import HeroSlider from "./Heroslider";

export default function Hero() {
  return (
    <main className="max-h-screen overflow-y-scroll scroll">
      <div className="w-[90%]">
        <HeroSlider />
      </div>
    </main>
  );
}
