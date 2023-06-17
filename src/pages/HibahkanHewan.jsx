import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cookies, cookieKeys } from '../utils/cookies';

function HibahkanHewan() {
  const { authBool } = useSelector((state) => state.navbar);

  const [file, setFile] = useState('');
  const [caption, setCaption] = useState('');
  const [base64, setBase64] = useState('');

  const imageFileEvent = (e) => setFile(readImageValidation(e, setBase64));

  const dispatch = useDispatch();

  const imageFileRef = useRef();

  const currentDate = moment().format('DD/MM/YYYY');
  const currentTime = moment().format('LTS');

  const urlGetUpload = 'https://raw.githubusercontent.com/Ibrahimyunel/pandawaArowana-express/master/images/upload/';

  const { auth } = cookieKeys;

  const getImageUpload = async (uploadResponse) => {
    try {
      const { userId } = cookies.get(auth);
      const res = await axios.post('/user-uploads', {
        userId,
      });
      res.data.getUpload.map((item) => uploadResponse.push(item));
    } catch {
      dispatch(setErrFetchList());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await axios.post(
          '/upload',
          {
            name: file, currentDate, currentTime, caption, base64,
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
    if (cookies.get(auth) === undefined) window.location.href = '/';
  }, []);

  return (
    <main className="C-upload">
      <article className="C-d-flex">
        <div className="col-lg-6">
          <UserUpload
            urlGetUpload={urlGetUpload}
            getImageUpload={getImageUpload}
          />
        </div>
        <div className="col-lg-6">
          <form className="C-form-upload C-glass p-3" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="image_file">Upload Image Here</label>
            <input
              type="file"
              className="form-control mb-3"
              id="image_file"
              accept="image/*"
              onChange={imageFileEvent}
              ref={imageFileRef}
              required
            />
            <input
              type="text"
              className="form-control mb-3"
              id="caption"
              placeholder="Caption"
              autoComplete="off"
              onChange={(e) => { setCaption(e.target.value); }}
              value={caption}
              required
            />
            <div className="col-6 d-grid mx-auto mb-3">
              <button type="submit" className="C-btn" name="submit">Upload</button>
            </div>
          </form>
        </div>
      </article>
    </main>
  );
}

export default HibahkanHewan;
