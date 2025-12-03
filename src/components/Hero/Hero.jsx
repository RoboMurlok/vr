import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>
          Enfoque tranquilo y consistente para decisiones personales en Madrid,
          España
        </h1>
        <p>
          artcas.beauty — materiales neutrales, ejemplos y guías breves para
          decisiones informadas. Sin promesas de ingresos ni ventas agresivas:
          solo fuentes verificadas y un tono tranquilo.
        </p>
        <div className="box">
          <Button to="/como">Por donde empezar</Button>
          <Link to="/recomendaciones" className="outline">Consejos para principiantes</Link>
        </div>
        <span>
          Los materiales son informativos y no sustituyen el asesoramiento
          individual.
        </span>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="hero"
        />
      </div>
    </div>
  );
}
