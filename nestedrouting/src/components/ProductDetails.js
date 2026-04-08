import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Product Details for Product ID: {productId}</div>;
};

export default ProductDetails;
