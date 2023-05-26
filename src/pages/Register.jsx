import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="C-container-full p-3">
      <form className="C-card col-12 col-lg-5 p-3" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="C-form-title">Registration</h2>
        <div className="mb-3">
          <input type="text" className="C-input" id="username" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="text" className="C-input" id="whatsapp" placeholder="Whatsapp" required />
        </div>
        <div className="mb-3">
          <input type="email" className="C-input" id="Email" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="C-input" id="password" placeholder="Password" required />
        </div>
        <div className="mb-3">
          <input type="password" className="C-input" id="confirm_password" placeholder="Confirm Password" required />
        </div>
        <div className="C-btn-wrapper mb-3">
          <button className="C-btn" type="submit">Signup</button>
        </div>
        <div className="mb-3">
          <p className="text-center">
            Already have an account?
            <Link className="C-link" to="/login">Login here!</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;
