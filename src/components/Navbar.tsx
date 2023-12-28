import React from "react";

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-blend-darken shadow-lg shadow-blue-500 flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>Total Cash</p>
        </div>
      </div>
    </nav>
  );
}
