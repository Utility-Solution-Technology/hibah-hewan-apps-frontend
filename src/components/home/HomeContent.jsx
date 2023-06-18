import React from 'react';
import { Link } from 'react-router-dom';

function HomeContent() {
  return (
    // Tittle Homepage
    <section className="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="heading-home">
              <span className="adop">Adopsi</span> dan <span className="hiba">Hibahkan</span> Hewan menjadi lebih mudah!
            </h1>
            <p className="subheading-home">Ayo hibahkan hewan yang sudah tidak terawat di rumah agar mendapatkan kehidupan yang layak</p>
            <div className="btn-home">
              <Link to="/hibah-hewan" className="C-link C-link-btn C-home px-3">Hibahkan Hewan</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-home">
              <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/homepage.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
