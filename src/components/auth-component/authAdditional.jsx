import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNavbar() {
  function handleLogout() {
    localStorage.removeItem('auth');
    // window.location.href = '/';
  }

  return (
    <>
      <li><Link className="C-link" to="/profile">Profile</Link></li>
      <li><Link className="C-link" to="/" onClick={() => handleLogout}>Logout</Link></li>
    </>
  );
}
