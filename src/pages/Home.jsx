import React from 'react';
import HomeContent from '../components/home/HomeContent';
import CardContent from '../components/home/CardContent';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <main>
        <HomeContent />
        <CardContent />
      </main>
      <Footer />
    </>
  );
}

export default Home;
