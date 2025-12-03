import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Navbar from "../Navbar/Navbar";

export default function Footer() {
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

  const linksSub = [
    { como: "Privacy" },
    { casos: "Politica de cookies" },
    { como: "Configuracion de cookies" },
    { casos: "Terminos de uso del sitio" },
    { como: "Accesibilidad" },
    { casos: "Politica de publicidad" },
    { como: "Recursos de referencia" },
    { casos: "Contactos" },
  ];

  return (
    <footer>
      <section className="footer">
        <article>
          <div className="logo">
            <div></div>
            <Link to="/">artcas.beauty</Link>
          </div>
          <p>
            Proyecto informativo neutral sobre planificación y prácticas
            sostenibles. Materiales de autoaprendizaje, no son una recomendación
            personal.
          </p>
        </article>
        <article>
          <h4>Navegacion</h4>
          <Navbar links={links} />
        </article>
        <article>
          <h4>Secciones legales</h4>
          <Navbar links={linksSub} />
        </article>
      </section>
      <div className="copyright">
        © 2025 artcas.beauty. Todos los derechos reservados. Los materiales no
        constituyen una oferta, un llamamiento o una garantía de resultados.
      </div>
    </footer>
  );
}
