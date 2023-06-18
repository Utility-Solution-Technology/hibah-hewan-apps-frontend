import React from 'react';
import Footer from '../components/Footer';
import FilterFavorite from '../components/favorite/FilterFavorite';
import DataFavorite from '../components/favorite/DataFavorite';

function Favorite() {
  return (
    <>
      <main>
        <FilterFavorite />
        <DataFavorite />
        <DataFavorite />
        <DataFavorite />
      </main>
      <Footer />
    </>
  );
}

export default Favorite;
