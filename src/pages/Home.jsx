import React from 'react';
import HomeContent from './home/HomeContent';
import CardContent from './home/CardContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HomeContent />
      <CardContent />
      <Footer />
    </div>
  );
}

export default Home;
