import React from 'react';
import Divider from '../Divider';

function DetailDeskripsi() {
  return (
    <div className="detailDeskripsi container">
      <div className="content p-3">
        <h3 className="tittleDeskripsi">Informasi Lengkap</h3>
        <div className="divider">
          <Divider />
        </div>
        <div className="deskripsi">
          <p>Anjing yang sehat pada usia 9 tahun adalah contoh yang luar
            biasa dari kesehatan yang baik dan perawatan yang tepat.
            Pada tahap ini, anjing memiliki pengalaman hidup yang cukup
            panjang, tetapi masih mempertahankan energi dan vitalitasnya.
          </p>
          <p>Secara keseluruhan, anjing yang sehat pada usia 9 tahun adalah
            contoh keberhasilan dalam memberikan perawatan yang baik
            dan menciptakan lingkungan yang sehat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailDeskripsi;
