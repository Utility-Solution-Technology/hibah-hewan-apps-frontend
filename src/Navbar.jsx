import React, { useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthNavbar from './components/auth-component/authAdditional';

function Navbar() {
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const navlistRef = useRef(null);

  function handleCloseMenu() {
    if (closeRef) {
      openRef.current.style.display = 'block';
      closeRef.current.style.display = 'none';
      navlistRef.current.classList.remove('C-navlist-close');
    }
  }

  function handleOpenMenu() {
    openRef.current.style.display = 'none';
    closeRef.current.style.display = 'block';
    navlistRef.current.classList.add('C-navlist-close');
  }

  useEffect(() => {
    const getAllList = document.querySelectorAll('nav .C-link');
    getAllList.forEach((item) => item.addEventListener('click', handleCloseMenu));
  }, []);

  const auth = localStorage.getItem('auth');
  const authBool = (auth !== null);
  return (
    <header>
      <nav>
        <div className="C-menu-lg">
          <Link className="C-logo-text" to="/">Adoption<span>Animal</span></Link>
          <input type="image" className="C-open-icon d-lg-none" src={`${process.env.PUBLIC_URL}/icons/open-menu.svg`} alt="Open menu button" onClick={handleOpenMenu} ref={openRef} />
          <input type="image" className="C-close-icon d-lg-none" src={`${process.env.PUBLIC_URL}/icons/close-menu.svg`} alt="Close menu button" onClick={handleCloseMenu} ref={closeRef} />
        </div>
        <ul className="C-navlist" ref={navlistRef}>
          <li><Link className="C-link" to="/">Daftar Hewan</Link></li>
          {authBool ? <AuthNavbar /> : (
            <>
              <li><Link className="C-link C-link-btn" to="/login">Login</Link></li>
              <li><Link className="C-link C-link-btn C-signup" to="/register">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
