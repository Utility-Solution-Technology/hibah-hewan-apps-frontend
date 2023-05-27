import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const usernameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <main className="C-container-full p-3">
      <form className="C-card col-12 col-lg-5 p-3" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="C-form-title">Login</h2>
        <div className="mb-3">
          <input type="text" className="C-input" id="email_or_username" placeholder="Email / Username" ref={usernameRef} required />
        </div>
        <div className="mb-3">
          <input type="password" className="C-input" id="password" placeholder="Password" required />
        </div>
        <div className="C-btn-wrapper mb-3">
          <button className="C-btn" type="submit">Login</button>
        </div>
        <div className="mb-3">
          <p className="text-center">
            Already have an account?
            <Link className="C-link" to="/register">Signup here!</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;
