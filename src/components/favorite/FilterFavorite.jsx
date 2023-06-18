import React from 'react';
import Divider from '../Divider';

function listFavorite() {
  return (
    <div className="listFavorite">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="listFav">Hewan Favorite</h3>
          </div>
          <div className="col-2">
            <h3 className="jenisFav">Jenis</h3>
          </div>
          <div className="col-3">
            <h3 className="deskFav">Deskripsi Singkat</h3>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default listFavorite;
