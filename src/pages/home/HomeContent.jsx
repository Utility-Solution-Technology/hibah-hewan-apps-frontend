import React from 'react';
// import imghome from '/images/homepage.png';

function HomeContent() {
  return (
    // Tittle Homepage
    <section class="home">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 className="heading-home">
              <span class="adop">Adopsi</span> dan <span class="hiba">Hibahkan</span> Hewan menjadi lebih mudah!
            </h1>
            <p className="subheading-home">Ayo hibahkan hewan yang sudah tidak terawat di rumah agar mendapatkan kehidupan yang layak</p>
            <div class="btn-home">
              <a href="#" class="C-link C-link-home C-home">Hibahkan Hewan</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img-home">
              <img class='d-block w-100' src={`${process.env.PUBLIC_URL}/images/homepage.png`} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
