import React, { useState } from "react";
import "./NavbarMobile.css";
import Navbar from "../Navbar/Navbar";

export default function NavbarMobile({ links, ...props }) {
  const closed = { display: "none" };

  const opened = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "80vh",
    background: "white",
    zIndex: "1000",
  };

  const [open, setOpen] = useState(closed);

  const toggle = () => {
    setOpen((prev) => (prev.display === "none" ? opened : closed));
  };

  return (
    <div className="mobile outline" {...props} onClick={toggle}>
      Navegacion
      <Navbar links={links} style={open} />
    </div>
  );
}
