import React from "react";

export default function Heroslider() {
  return (
    <main>
      {" "}
      <div className="min-h-screen bg-pink-400 text-black">
        first item
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="min-h-screen bg-pink-300 text-black">
        Second item
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="min-h-screen bg-pink-300 text-black">
        Third item
        <img
          src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </main>
  );
}
