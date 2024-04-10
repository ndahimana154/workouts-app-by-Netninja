import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1> The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "#fff",
            background: "#f1356d",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
