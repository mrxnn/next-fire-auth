import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-2xl px-4">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
