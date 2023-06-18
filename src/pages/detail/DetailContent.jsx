import React from 'react';
import Divider from '../../components/Divider';

function DetailContent() {
  return (
    <section className="detail">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="detailImage">
              <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/hewan/hewan2.png`} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="detailTitle">
              New Home Dogy
            </h1>
            <Divider />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="detailCategory">
                  Category:
                </p>
              </div>
              <div className="col-lg-6">
                <p className="detailCategory">
                  Anabul
                </p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="deskripsiCategory">
                  Deskripsi singkat:
                </p>
              </div>
              <div className="col-lg-6">
                <p className="deskripsiCategory">
                  Sehat umur nya 9 tahun
                </p>
              </div>
            </div>
            <Divider />
            <div className="btn-detail">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="btn-detail">
                    <a href="#" className="C-adopsi">Adopsi</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="btn-favorite">
                    <a href="#" className="C-favorite C-detailColour">Favorite</a>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailContent;
