import Cookies from 'universal-cookie';

const cookies = new Cookies();

const cookieKeys = {
  auth: 'auth',
};

export { cookies, cookieKeys };
