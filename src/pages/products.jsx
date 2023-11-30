import { Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Outlet />
    </>
  );
}

export default Products;
