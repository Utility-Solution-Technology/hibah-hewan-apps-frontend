import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { cookies, cookieKeys } from './utils/cookies';
import AuthNavbar from './components/auth-component/authAdditional';

function Navbar() {
  const [authBool, setAuthBool] = useState('');

  const { auth } = cookieKeys;

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

  useEffect(() => {
    const getAuth = cookies.get(auth);
    setAuthBool(getAuth !== undefined);
  }, [auth]);

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
          <li><Link className="C-link" to="/hibah-hewan">Hibahkan Hewan</Link></li>
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
