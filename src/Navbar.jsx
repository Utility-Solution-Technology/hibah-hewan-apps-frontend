import React from 'react';
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>dummy tag</h1>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
