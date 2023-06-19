import React from 'react';
import { useDispatch } from 'react-redux';
import axios from '../../proxy/baseURL';
import { setErrFetchList } from '../../redux/upload-slice';
import Animal from '../Animal';

function CardContent() {
  const urlGetUpload = 'https://raw.githubusercontent.com/Utility-Solution-Technology/hibah-hewan-apps-backend/master/images/upload/';
  const dispatch = useDispatch();

  const getImageUpload = async (uploadResponse) => {
    try {
      const res = await axios.post('/latest-uploads');
      res.data.getUpload.map((item) => uploadResponse.push(item));
    } catch {
      dispatch(setErrFetchList());
    }
  };

  return (
    <div>
      <section className="product mt-5 section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mb-3">
              <i className="bx bxs-check-square" />
              <h1 className="label-section ms-2">Kategori Populer</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="C-animal-wrapper container">
        <Animal
          urlGetUpload={urlGetUpload}
          getImageUpload={getImageUpload}
        />
      </div>
    </div>
  );
}

export default CardContent;
