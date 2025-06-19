import { useDispatch, useSelector } from "react-redux"
import { RemoveFromCart, ClearCart,increase,decrease } from "../component/cartslice"
import {Button,Row,Col,Container,Card} from 'react-bootstrap';
const CartPage = ()  => {
   const dispatch = useDispatch()
   const cartItems = useSelector(state=>state.cart.cartItems)
   const totalAmount = cartItems.reduce((sum,item)=>sum+item.price * item.quantity,0).toFixed(2) 
   return(
        <Container>
      <div className="text-center my-4">
        <h3 style={{color:'green'}}>Your Cart</h3>

        {cartItems.length === 0 ? (
          <p style={{color:'tomato'}}>Your Cart is Empty</p>
        ) : (
          <>
            <Row className="gy-4">
              {cartItems.map((item) => (
                <Col md={3} sm={6} xs={12} key={item.id}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{
                        height: "200px",
                        objectFit: "contain",
                        padding: "10px",
                      }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        style={{
                          fontSize: "1rem",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        <p><span className="text-sucess">Price:</span> {item.title}</p>
                      </Card.Title>
                      <Card.Text className="text-success fw-bold">
                    <p> <span className="text-success">Price:</span>   ${item.price}</p>
                      </Card.Text>
                      <div className="d-flex justify-content-center align-items-center gap-2">
  <Button
    variant="primary"
    size="sm"
    onClick={() => dispatch(decrease(item.id))}
  >
    -
  </Button>
  <span>{item.quantity}</span>
  <Button
    variant="primary"
    size="sm"
    onClick={() => dispatch(increase(item.id))}
  >
    +
  </Button>
</div>
                      
                      <div className="mt-auto text-center">
                        <Button
                          variant="primary"
                          onClick={() => dispatch(RemoveFromCart(item.id))}
                          className="w-50 mt-2">
                          Remove
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          <p><span className="text-danger">Total Amount :</span>${totalAmount}</p>
            <div className="text-center mt-4">
              <Button
                variant="danger"
                onClick={() => dispatch(ClearCart())}
                className="px-4"
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
   );
};
export default CartPage;