import { useState, useEffect } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import './style.css';
import {useCart} from './cart'
function Data() {
  const [product, setProduct] = useState([]);
    const { dispatch } = useCart(); // ✅ add this line

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  return (
    <Container className="my-4"> 
      <Row className="gx-4 gy-4"> 
        {product.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}> 
            <div className='card'
              style={{ 
                border: '1px solid grey',
                borderRadius: '10px',
                padding: '10px',
                height: '100%',
                // boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                backgroundColor: '#fff',
              }}
            >
              <div className='hover'>
                <figure>              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain'                
                 }}
              />
              </figure>

              </div>
              <h6 className="mt-2">{item.title}</h6>
              <p className="text-success fw-bold text-center"><span className='text-warning'>Price:</span>${item.price}</p>
              <div className='text-center'>          <Button
  onClick={() => dispatch({ type: 'Add To Cart', payload: item })}
  className="btn btn-primary mt-2 w-50"
>
  Add to Cart
</Button>
</div>


            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Data;
