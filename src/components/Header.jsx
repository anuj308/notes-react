import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link
        to="/"
        className="inline-block px-4 text-2xl font-bold text-center mb-8 mt-2 "
      >
        Todo
      </Link>
      <Link
        to="/logs"
        className="inline-block text-2xl font-bold text-center mb-8 mt-2"
      >
        Log
      </Link>
    </>
  );
}

export default Header;
