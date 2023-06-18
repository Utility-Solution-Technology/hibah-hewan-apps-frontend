import React from 'react';
import { Link } from 'react-router-dom';

const LogoNavbar = <Link className="C-logo-link" to="/"><img className="C-logo-img" src={`${process.env.PUBLIC_URL}/images/logo-abule.png`} alt="logo-text" /></Link>;

export default LogoNavbar;
