import React from "react";

export default function Text() {
  const text = `Los casos en artcas.beauty son escenarios tranquilos en los que es
importante ver los pasos, suposiciones y limitaciones. No modelamos
la rentabilidad ni indicamos herramientas específicas para mantener
la neutralidad y evitar interpretaciones publicitarias. La tarea
principal es mostrar el proceso de pensamiento y garantizar la
transparencia de la lógica.`;

  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
}
