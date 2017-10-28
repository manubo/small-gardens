import Login from 'pages/login';
import Main from 'pages/main';

const routesMap = {
  LOGIN: {
    path: '/login',
    page: Login,
  },
  ROOT: {
    path: '/',
    page: Main,
  },
};

export default routesMap;
