import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const ProductLayout = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <Link to="1">Product 1</Link> | <Link to="2">Product 2</Link>
      <hr />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
