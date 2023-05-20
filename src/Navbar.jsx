import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>

      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;