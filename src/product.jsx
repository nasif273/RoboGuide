import { Link } from 'react-router-dom'; // Import Link component from React Router
import './product.css';

function Product({ id, title, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <img src={image} alt={title} /> {/* Use title as alt text for accessibility */}
      <Link to={`/product/${id}`}>View Details</Link> {/* Link to product detail page */}
    </div>
  );
}

export default Product;
