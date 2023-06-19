/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { setLoadOnce } from '../redux/upload-slice';

function Animal({ urlGetUpload, getImageUpload }) {
  const { errFetchList, loadOnce } = useSelector((state) => state.upload);
  const dispatch = useDispatch();
  const [uploadList, setUploadList] = useState('');
  const uploadResponse = [];

  async function processGetImageUpload() {
    await getImageUpload(uploadResponse);
    if (errFetchList) {
      const errFetchListMessage = <p className="text-center p-3">Oopss.. Maaf, gagal mengambil data hewan! coba lain waktu atau hubungi admin.</p>;
      setUploadList(errFetchListMessage);
    } else {
      const createImgElements = uploadResponse.map(({
        _id, path, name, type, age, time_create, userData,
      }) => {
        const time = time_create.split('_')[0];
        return (
          <div className="col-md-3" key={_id}>
            <Card style={{ width: '18rem' }}>
              <div className="d-flex px-3 py-1">
                <img height="40em" src={`${process.env.PUBLIC_URL}/icons/profile.svg`} alt="" />
                <p className="my-auto">{userData[0].username}</p>
              </div>
              <Card.Img variant="top" className="C-animal-img" src={urlGetUpload + path} alt={path} />
              <Card.Body>
                <Card.Title>{`${name} ${type}`}</Card.Title>
                <Card.Text>{`Usia: ${age} Tahun`}</Card.Text>
                <div className="d-flex align-items-end justify-content-between">
                  <Link className="C-link C-link-btn C-link-blue" to="/detail">Detail</Link>
                  <p className="m-0"><small>{time}</small></p>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      });
      setUploadList(createImgElements);
    }
    dispatch(setLoadOnce());
  }

  useEffect(() => {
    processGetImageUpload();
  }, [loadOnce]);

  return (
    <>
      <div className="d-none">none</div>
      {uploadList}
    </>
  );
}

Animal.propTypes = {
  urlGetUpload: PropTypes.string.isRequired,
  getImageUpload: PropTypes.func.isRequired,
};

export default Animal;
