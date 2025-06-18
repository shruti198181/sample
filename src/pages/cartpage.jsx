// CartPage.js
import React from 'react';
import { useCart } from './component/cart'; // make sure path is correct
import { Container, Row, Col, Button } from 'react-bootstrap';

function CartPage() {
  const { cartItems, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: 'Remove From Cart', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'Clear Cart' });
  };

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <div className="p-3 border bg-light text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100px', height: '120px', objectFit: 'contain' }}
                  />
                  <h6 className="mt-2">{item.title}</h6>
                  <p><b>${item.price}</b></p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
          <Button variant="outline-danger" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
}

export default CartPage;
