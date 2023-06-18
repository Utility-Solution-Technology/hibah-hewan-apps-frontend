import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { swalConfig } from '../utils/swal-handler';
import axios from '../proxy/baseURL';
import { cookies, cookieKeys } from '../utils/cookies';
import { setEmailOrUsername, setPassword } from '../redux/login-slice';

function Login() {
  const { emailOrUsername, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { auth } = cookieKeys;

  const emailOrUsernameRef = useRef();
  const passwordRef = useRef();
  const eyePasswordImgRef = useRef();

  const navigate = useNavigate();

  function errorMassageAfterSubmit(err) {
    cookies.remove(auth);
    if (!err.response) {
      swalConfig.text = 'Maaf login gagal, coba lagi nanti atau hubungi admin pada tombol chat';
    } else if (err.response.status === 404 || err.response.status === 400) {
      swalConfig.text = `Maaf login gagal, ${err.response.data.message}`;
    } else {
      swalConfig.text = 'Maaf login gagal, coba lagi nanti atau hubungi admin pada tombol chat';
    }
    Swal.fire(swalConfig)
      .then(() => {
        if (!err.response) {
          return setTimeout(() => emailOrUsernameRef.current.focus(), 290);
        }
        if (err.response.status === 404) {
          return setTimeout(() => emailOrUsernameRef.current.focus(), 290);
        }
        return setTimeout(() => passwordRef.current.focus(), 290);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const emailOrUsernameLowerCase = emailOrUsername.toLowerCase();
      const response = await axios.post(
        '/login',
        {
          emailOrUsername: emailOrUsernameLowerCase, password,
        },
      );
      dispatch(setEmailOrUsername(''));
      dispatch(setPassword(''));
      cookies.set(auth, response.data, { path: '/' });
      navigate('/');
    } catch (err) {
      errorMassageAfterSubmit(err);
    }
  }

  function handleShowPassword(e) {
    if (e.target.classList.contains('hide')) {
      passwordRef.current.type = 'password';
      eyePasswordImgRef.current.src = `${process.env.PUBLIC_URL}icons/eye-off.svg`;
      e.target.classList.remove('hide');
    } else {
      passwordRef.current.type = 'text';
      eyePasswordImgRef.current.src = `${process.env.PUBLIC_URL}icons/eye-on.svg`;
      e.target.classList.add('hide');
    }
  }

  useEffect(() => {
    if (cookies.get(auth) !== undefined) navigate('/');
  }, []);

  useEffect(() => {
    emailOrUsernameRef.current.focus();
  }, []);

  return (
    <main className="C-login C-container-full p-3">
      <form className="C-card col-12 col-lg-5 p-3" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="C-form-title">Login</h2>
        <div className="mb-3">
          <input
            type="text"
            className="C-input"
            id="email_or_username"
            placeholder="Email / Username"
            ref={emailOrUsernameRef}
            onChange={(e) => dispatch(setEmailOrUsername(e.target.value))}
            required
          />
        </div>
        <div className="C-password-wrapper mb-3">
          <input
            type="password"
            className="C-input"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            required
          />
          <button className="C-show-password-btn" type="button" onClick={handleShowPassword}>
            <img className="C-show-password-img" ref={eyePasswordImgRef} src={`${process.env.PUBLIC_URL}icons/eye-off.svg`} alt="eye password button" />
          </button>
        </div>
        <div className="C-btn-wrapper mb-3">
          <button className="C-btn" type="submit">Login</button>
        </div>
        <div className="mb-3">
          <p className="text-center">
            Already have an account?{' '}
            <Link className="C-link" to="/register">Signup here!</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;
