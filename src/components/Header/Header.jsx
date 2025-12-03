import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

export default function Header() {
  const links = [
    { "/": "Inicio" },
    { sobre: "Sobre el proyecto" },
    { casos: "Casos y ejemplos" },
    { recomendaciones: "Recomendaciones" },
    { como: "Como empezar" },
    { blog: "Blog" },
    { recursos: "Recursos de referencia" },
    { contactos: "Contactos" },
  ];

  return (
    <header>
      <div className="logo">
        <div></div>
        <Link to="/">artcas.beauty</Link>
      </div>
   
      <Navbar links={links} />
         <NavbarMobile links={links}/>
    </header>
  );
}
