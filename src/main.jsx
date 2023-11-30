import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/layout';
// import App from './App.jsx';
import Login from './pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import SingleProduct from './pages/single-product';
import About from './pages/about';
import Products from './pages/products';
import ProductList from './pages/product-list';
// eslint-disable-next-line no-unused-vars
import ProductPreview from './components/product-preview/product-preview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: '',
            element: <ProductList />,
          },
          {
            path: ':id',
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
