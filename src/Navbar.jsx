import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="" to="/register">Daftar</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
