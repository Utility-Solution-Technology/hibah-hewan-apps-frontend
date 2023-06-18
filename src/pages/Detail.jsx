import React from 'react';
import DetailContent from '../components/detail/DetailContent';
import DetailDeskripsi from '../components/detail/DetailDeskripsi';
import Footer from '../components/Footer';

function Detail() {
  return (
    <>
      <main>
        <DetailContent />
        <DetailDeskripsi />
      </main>
      <Footer />
    </>
  );
}

export default Detail;
