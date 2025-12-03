import React from "react";
import { Link } from "react-router-dom";
import posts from "./../../data/posts";

export default function Blog() {
  return (
    <div className="page">
      <h2>Blog</h2>
      {[0, 3, 6].map((start) => (
        <section key={start}>
          {posts.slice(start, start + 3).map((post) => (
            <div className="img" key={post.id}>
              <img src={post.image} />

              <div className="info">
                <p>{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link to={`/blog/${post.id}`}>Leer más</Link>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
