import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Navbar from './Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
import HibahkanHewan from './pages/HibahkanHewan';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="hibah-hewan" element={<HibahkanHewan />} />
          <Route path="*" element={<NoPage />} />
          <Route path="detail" element={<Detail />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="aboutus" element={<AboutUs />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
