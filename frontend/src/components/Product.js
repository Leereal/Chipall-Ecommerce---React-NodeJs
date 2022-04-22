import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';
function Product(props) {
  const { product } = props;
  return (
    <Card key={product._id} className="product">
      <Link to={`/product/id/${product._id}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/id/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>
          {product.currency}
          {product.price}
        </Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
