import React from 'react';
import { Link } from 'react-router-dom';
import { cookies, cookieKeys } from '../../utils/cookies';

export default function AuthNavbar() {
  const { auth } = cookieKeys;

  function handleLogout() {
    cookies.remove(auth);
    window.location.href = '/';
  }

  return (
    <li>
      <button type="button" className="dropdown-toggle C-link C-link-btn C-link-blue" id="navbarDropdownMenuLink" data-bs-toggle="dropdown">
        Akun Saya
      </button>
      <ul className="dropdown-menu C-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><Link className="C-link" to="/profile">Profile</Link></li>
        <li><Link className="C-link" to="/hibah-hewan">Hibahkan Hewan</Link></li>
        <li><button type="button" className="C-link C-link-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </li>
  );
}
