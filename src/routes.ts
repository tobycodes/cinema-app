import Details from 'pages/details';
import HomePage from 'pages/homepage';
import NotFound from 'pages/NotFound';

const appRoutes = [
  { path: '/:id/:details', component: Details, exact: true },
  { path: '/', component: HomePage, exact: true },
  { path: '*', component: NotFound }
];

export default appRoutes;
