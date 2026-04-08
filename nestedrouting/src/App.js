import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductLayout from './components/ProductLayout';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested Route */}
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
