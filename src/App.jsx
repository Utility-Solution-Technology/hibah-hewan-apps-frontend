import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Navbar from './Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
