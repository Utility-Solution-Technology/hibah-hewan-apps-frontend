import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNavbar() {
  function handleLogout() {
    localStorage.removeItem('auth');
    // window.location.href = '/';
  }

  return (
    <>
      <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
      <li><Link className="dropdown-item" to="/" onClick={() => handleLogout}>Logout</Link></li>
    </>
  );
}
