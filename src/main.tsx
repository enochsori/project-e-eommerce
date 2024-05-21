import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Cart from './pages/Cart.tsx';
import Category from './pages/Category.tsx';
import ProtectedRoute from './pages/ProtectedRoute.tsx';
import NewProduct from './pages/NewProduct.tsx';
import AllProducts from './pages/AllProducts.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

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
        element: <Category />,
      },
      {
        path: '/new-product',
        element: (
          <ProtectedRoute requiredAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/all-products',
        element: <AllProducts />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
