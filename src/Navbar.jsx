import React, { useState, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthNavbar from './components/auth-component/authAdditional';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const navlistRef = useRef(null);

  function handleMenu() {
    setMenu(!menu);
    if (!menu) {
      openRef.current.style.display = 'none';
      closeRef.current.style.display = 'block';
      navlistRef.current.classList.add('navlist-close');
    } else {
      openRef.current.style.display = 'block';
      closeRef.current.style.display = 'none';
      navlistRef.current.classList.remove('navlist-close');
    }
  }

  const auth = localStorage.getItem('auth');
  const authBool = (auth !== undefined);
  return (
    <header>
      <nav id="container_nav">
        <div className="menu-large-max">
          <Link className="C-logo-text" to="/">Adoption<span>Animal</span></Link>
          <input type="image" className="open-icon d-lg-none" src={`${process.env.PUBLIC_URL}/icons/open-menu.svg`} alt="Open menu button" onClick={handleMenu} ref={openRef} />
          <input type="image" className="close-icon d-lg-none" src={`${process.env.PUBLIC_URL}/icons/close-menu.svg`} alt="Close menu button" onClick={handleMenu} ref={closeRef} />
        </div>
        <ul className="navlist" ref={navlistRef}>
          <li>
            <Link className="link" to="/">Daftar Hewan</Link>
          </li>
          {authBool ? <AuthNavbar /> : (
            <>
              <li><Link className="link" to="/login">Login</Link></li>
              <li><Link className="link" to="/register">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
