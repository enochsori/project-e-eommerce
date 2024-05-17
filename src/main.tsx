import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Cart from './pages/Cart.tsx';
import Products from './pages/Products.tsx';
import ProtectedRoute from './pages/ProtectedRoute.tsx';
import NewProduct from './pages/NewProduct.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/:category',
        element: <Products />,
      },
      {
        path: '/new-product',
        element: (
          <ProtectedRoute requiredAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
