import { createBrowserRouter } from 'react-router-dom';

import Countries from '../pages/Countries';
import Country from '../pages/Country';
import App from '../App';
import Error from '../pages/Error';
import { appLoader, countryLoader } from './loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Countries />,
      },
      {
        path: ':countryId',
        element: <Country />,
        loader: countryLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
