import React from 'react';
import { Link } from 'react-router-dom';
import { cookies, cookieKeys } from '../../cookies/cookies-keys';

export default function AuthNavbar() {
  const { auth } = cookieKeys;

  function handleLogout() {
    cookies.remove(auth);
    window.location.href = '/';
  }

  return (
    <>
      <li><Link className="C-link" to="/profile">Profile</Link></li>
      <li><button type="button" className="C-link C-link-btn" onClick={handleLogout}>Logout</button></li>
    </>
  );
}
