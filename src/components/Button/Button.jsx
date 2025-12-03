import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ to, children, ...props }) {
  if (to) {
    return (
      <Link to={to} className="btn">
        {children}
      </Link>
    );
  }

  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
