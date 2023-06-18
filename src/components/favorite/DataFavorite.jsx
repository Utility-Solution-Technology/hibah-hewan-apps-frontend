import React from 'react';
import Divider from '../Divider';

function DataFavorite() {
  return (
    <div className="dataFavorite">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="row align-items-center">
              <div className="col-4">
                <img className="img-data d-block w-50" src={`${process.env.PUBLIC_URL}/images/hewan/hewan2.png`} alt="" />
              </div>
              <div className="col">
                <h3 className="dataHewan">New Homy Dogy</h3>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3 className="jenisHewan">Anabul</h3>
          </div>
          <div className="col-3">
            <h3 className="deskHewan">Bahagia, Umur 7 Tahun</h3>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default DataFavorite;
