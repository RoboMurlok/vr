import React from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation  } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <motion.div
        key={location.pathname}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container"
      >
        <Outlet />
      </motion.div>
      <Footer />
    </div>
  );
}


