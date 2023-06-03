import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { swalConfig, changeSwalConfig } from '../utils/swal-handler';
import axios from '../proxy/baseURL';
import { cookies, cookieKeys } from '../cookies/cookies-keys';
import {
  setUsername,
  setWhatsapp,
  setEmail,
  setPassword,
  setConfirmPass,
  setMatchPass,
} from '../redux/register-slice';

function Register() {
  const {
    username, whatsapp, email, password, confirmPass, matchPass,
  } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const { auth } = cookieKeys;

  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  function alphanumeric() {
    const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if (password === '') return true;
    return password.match(alphanumericRegex);
  }

  function submitValidation() {
    if (!matchPass) {
      confirmPassRef.current.focus();
      throw new Error('Konfirmasi Password tidak sesuai');
    }

    if (!alphanumeric()) {
      passwordRef.current.focus();
      throw new Error('Password harus kombinasi huruf dan angka');
    }
  }

  function errorMessageAfterSubmit(err) {
    let targetInputTag;
    if (err.response === undefined) {
      console.error(err);
      return false;
    }
    if (err.response.status === 500) {
      const notUniqueValue = `${Object.values(err.response.data.err.keyValue)}`;
      const notUniqueKey = `${Object.keys(err.response.data.err.keyValue)}`;
      targetInputTag = document.getElementById(notUniqueKey);
      swalConfig.text = `Registrasi gagal, ${notUniqueKey} ${notUniqueValue} sudah terdaftar. Silahkan coba dengan ${notUniqueKey} berbeda ya...`;
    } else {
      swalConfig.text = 'Maaf Registrasi kamu gagal, coba lagi nanti atau hubungi admin pada tombol chat';
    }
    return Swal.fire(swalConfig).then(() => setTimeout(() => targetInputTag.focus(), 290));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await submitValidation();
      const usernameLowerCase = username.toLowerCase();
      const emailLowerCase = email.toLowerCase();
      await axios.post(
        '/register',
        {
          username: usernameLowerCase, whatsapp, email: emailLowerCase, password,
        },
      );
      const successAlert = changeSwalConfig('success', 'Yeayy...');
      successAlert.text = 'Kamu berhasil terdaftar!';
      Swal.fire(successAlert).then(() => navigate('/login'));
    } catch (err) {
      errorMessageAfterSubmit(err);
    }
  }

  useEffect(() => {
    if (cookies.get(auth) !== undefined) window.location.href = '/';
  }, []);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (confirmPass !== '') {
      dispatch(setMatchPass(password === confirmPass));
    }
  }, [password, confirmPass]);

  return (
    <main className="C-container-full p-3">
      <form className="C-card col-12 col-lg-5 p-3" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="C-form-title">Registration</h2>
        <div className="mb-3">
          <input
            type="text"
            className="C-input"
            id="username"
            placeholder="Username"
            ref={usernameRef}
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="C-input"
            id="whatsapp"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => dispatch(setWhatsapp(e.target.value))}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="C-input"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="C-input"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            onBlur={(e) => dispatch(setPassword(e.target.value))}
            required
          />
          {alphanumeric() ? '' : <p className="text-danger">Password harus kombinasi huruf dan angka</p>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="C-input"
            id="confirm_password"
            placeholder="Confirm Password"
            ref={confirmPassRef}
            onBlur={(e) => dispatch(setConfirmPass(e.target.value))}
            required
          />
          {matchPass ? '' : <p className="text-danger">Konfirmasi Password tidak sesuai</p>}
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
