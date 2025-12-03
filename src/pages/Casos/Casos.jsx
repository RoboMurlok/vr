import React from "react";
import Text from "../../components/Text/Text";

export default function Casos() {
  return (
    <div className="page">
      <h2>Nuestros casos</h2>
      <section>
        <div className="text">
          <h3>Guías paso a paso</h3>
          <p>
            Cómo formular objetivos y planificar un presupuesto sin
            sobrecargarse: pasos sencillos.
          </p>
        </div>
        <div className="text">
          <h3>Guías paso a paso</h3>
          <p>
            Cómo formular objetivos y planificar un presupuesto sin
            sobrecargarse: pasos sencillos.
          </p>
        </div>
        <div className="text">
          <h3>Guías paso a paso</h3>
          <p>
            Cómo formular objetivos y planificar un presupuesto sin
            sobrecargarse: pasos sencillos.
          </p>
        </div>
      </section>
      <article>
        <h3>Enfoque tranquilo y basado en evidencia</h3>
        <Text />
      </article>
      <h3>Acentos visuales</h3>
      <section>
        <div className="img">
          <img src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg" />
          <div className="info">
            <p>Guías paso a paso</p>
          </div>
        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" />
          <div className="info">
            <p>Guías paso a paso</p>
          </div>
        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg" />
          <div className="info">
            <p>Guías paso a paso</p>
          </div>
        </div>
      </section>
    </div>
  );
}
