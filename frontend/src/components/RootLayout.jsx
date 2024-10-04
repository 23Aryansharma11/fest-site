import React from "react";
import Nav from "./navbar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Nav />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
