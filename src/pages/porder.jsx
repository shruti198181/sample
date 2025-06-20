// import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
function PlaceOrder () {
    
const cartItems = useSelector((state) => state.cart.cartItems);
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

//       const location = useLocation();
//   const { cartItems = [], totalQuantity = 0, totalAmount = 0 } = location.state || {};
    const orderId = `ORD-${Math.floor(Math.random()*100000)}`;
     const currentDate = new Date();
     const deliveryDate =  new Date(currentDate.setDate(currentDate.getDate() + 5)).toDateString();
    return(
        <>
        <div style={{backgroundColor:'#e3f2fd',height:'100vh' }}>        <Container>
            <div className="text-center pt-5">
      <h2 className="text-success mt-5">Thank You</h2>
      <h2 className="mt-3 text-success"> Your Order has been placed successfully!</h2>
      <p className="mt-3 text-danger"><strong>Order ID:</strong> {orderId}</p>
      <h3 className="mt-3 text-danger">Your Products</h3>
            <table className="table table-bordered table-hover mt-3">
                <thead className="table-secondary">
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total amount</th>
                        </tr>
                                 </thead>
                     <tbody style={{backgroundColor:'#e3f2fd' }}>
                        {cartItems.map((item,idx)=> (
                            <tr key={idx}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="1">Total</td>
                            <td>{totalQuantity}</td>
                            <td colSpan="2">${totalAmount}</td>
                        </tr>
                     </tbody>
                </table>


      <p className="mt-5 text-danger"><strong >Estimated Delivery Date:</strong> {deliveryDate}</p>
    </div>
    </Container>

</div>


        </>
    )
}

export default PlaceOrder;