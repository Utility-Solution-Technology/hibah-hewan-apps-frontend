import React from 'react';
import '../style/profile.scss';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
      <main>
        <article>
          <h1 className="h1">Profil</h1>
          <form className="C-d-flex">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Nama</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label" htmlFor="whatsapp">WhatsApp</label>
                  <input
                    readOnly
                    type="number"
                    className="form-control"
                    id="whatsApp"
                  />
                </div>
              </div>
            </div>
          </form>
        </article>
      </main>
      &nbsp;
      <Footer />
    </>
  );
}

export default Profile;
