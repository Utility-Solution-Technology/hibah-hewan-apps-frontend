import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment-timezone';
import { cookies, cookieKeys } from '../utils/cookies';
import axios from '../proxy/baseURL';
import { swalConfig, changeSwalConfig } from '../utils/swal-handler';
import readImageValidation from '../utils/validation';
import Footer from '../components/Footer';

function HibahkanHewan() {
  const [file, setFile] = useState('');
  const [base64, setBase64] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [caption, setCaption] = useState('');

  const imageFileRef = useRef();
  const animalImageRef = useRef();

  const navigate = useNavigate();

  const currentDate = moment().format('DD/MM/YYYY');
  const currentTime = moment().format('LTS');

  const { auth } = cookieKeys;

  const imageFileEvent = (e) => {
    setFile(readImageValidation(e, setBase64));
    if (e.target.files[0]) {
      animalImageRef.current.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await axios.post(
          '/upload',
          {
            name: file, type, category, age, weight, caption, currentDate, currentTime, base64,
          },
          { header: { 'Content-Type': 'application/json' } },
        );

        const successAlert = changeSwalConfig('success', 'Yeayy...');
        successAlert.text = 'Upload berhasil!';
        Swal.fire(successAlert).then(() => { window.location.href = '/'; });
      } catch {
        swalConfig.text = 'Maaf, Upload gagal! periksa koneksi internet kamu atau hubungi admin.';
        Swal.fire(swalConfig).then(() => imageFileRef.current.focus());
      }
    }
  };

  useEffect(() => {
    if (cookies.get(auth) === undefined) navigate('/login');
  }, []);

  return (
    <>
      <main className="C-upload">
        <article>
          <form className="C-form-upload C-d-flex" autoComplete="off" onSubmit={handleSubmit}>
            <div className="C-left col-lg-6">
              <img className="C-img-upload-animal" src={`${process.env.PUBLIC_URL}/images/bg-upload-animal.png`} alt="upload animal" ref={animalImageRef} />
              <input
                type="file"
                className="C-upload-img-file form-control mb-3"
                id="image_file"
                accept="image/*"
                onChange={imageFileEvent}
                ref={imageFileRef}
                required
              />
              <div className="C-btn-wrapper col-6 d-grid mb-3">
                <button type="submit" className="C-btn" name="submit">Hibahkan</button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Kucing"
                  autoComplete="off"
                  onChange={(e) => { setName(e.target.value); }}
                  value={name}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="type">Jenis</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  placeholder="Persia"
                  autoComplete="off"
                  onChange={(e) => { setType(e.target.value); }}
                  value={type}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="category">Kategori</label>
                <select className="form-select" aria-label=".form-select-lg category" onChange={(e) => setCategory(e.target.value)}>
                  <option selected disabled>Pilih kategori hewan</option>
                  <option value="anabul">Anabul</option>
                  <option value="reptil">Reptil</option>
                </select>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label" htmlFor="age">Usia /tahun</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="2.9"
                    autoComplete="off"
                    onChange={(e) => { setAge(e.target.value); }}
                    value={age}
                    required
                  />
                  <p className="text-secondary">contoh 2 tahun 9 bulan</p>
                </div>
                <div className="col-6">
                  <label className="form-label" htmlFor="weight">Berat /kg</label>
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    placeholder="2"
                    autoComplete="off"
                    onChange={(e) => { setWeight(e.target.value); }}
                    value={weight}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="caption">Keterangan</label>
                <textarea
                  className="form-control"
                  id="caption"
                  placeholder="Jelaskan kondisi hewan dan alasan ingin dihibahkan dengan sejujur-jujurnya. contoh: makan lahap, sedikit ada jamur pada bagian kuping kanan, alasan dihibahkan supaya diadopsi oleh calon pemilik yang mampu merawat dengan lebih telaten"
                  autoComplete="off"
                  rows={7}
                  onChange={(e) => { setCaption(e.target.value); }}
                  value={caption}
                  required
                />
              </div>
            </div>
          </form>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default HibahkanHewan;
