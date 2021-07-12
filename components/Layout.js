import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-3xl">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
