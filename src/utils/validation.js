import Swal from 'sweetalert2';
import { swalConfig } from './swal-handler';
import { cookies, cookieKeys } from './cookies';

const reader = new FileReader();
const { auth } = cookieKeys;

const convertFileToBase64 = (file, set) => {
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    set(reader.result);
  };
};

export default function readImageValidation(e, set) {
  const { userId } = cookies.get(auth);
  const imageObj = e.target.files[0];

  if (imageObj.type === '' || !imageObj.type.includes('image/')) {
    swalConfig.text = 'Maaf upload gagal, format gambar tidak valid';
    Swal.fire(swalConfig)
      .then(() => { e.target.value = ''; });
    return false;
  }

  const newName = `${userId}_${imageObj.name.replace(/ /g, '_')}`;
  const newFile = new File([imageObj], newName, {
    type: imageObj.type,
    lastModified: imageObj.lastModified,
  });
  convertFileToBase64(newFile, set);
  return newName;
}
