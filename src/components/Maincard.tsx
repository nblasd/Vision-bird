import React from "react";
import Card from "./Card";

export default function Maincard() {
  return (
    <div className="min-h-screen gap-5 w-full flex flex-col lg:flex-row items-center justify-center">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
