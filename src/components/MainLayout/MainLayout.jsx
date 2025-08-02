import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <nav className="main-navbar">
        <NavBar />
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
