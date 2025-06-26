
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClearCart } from '../component/cartslice';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const now = new Date();
        const estimatedDate = new Date(now);
  estimatedDate.setDate(now.getDate() + 4);

    const newOrder = {
      id: Date.now(),
      date: now.toLocaleDateString(),
       time: now.toLocaleTimeString(),
           estimatedDelivery: estimatedDate.toLocaleDateString(),
      items: cartItems,
      totalAmount: totalAmount.toFixed(2),
    };
      localStorage.setItem("latestOrder", JSON.stringify(newOrder)); 
    const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...previousOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    dispatch(ClearCart());
    alert("Order placed successfully!");
    navigate("/porder");
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container className="pt-5">
        <h2 className="text-center mb-4 text-primary">Cart Page</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-danger">Your cart is empty.</p>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price}</td>
                    <td>₹{(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3"><strong>Total Amount</strong></td>
                  <td><strong>₹{totalAmount.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </Table>

            <div className="text-center">
              <Button variant="success" onClick={handlePlaceOrder}>
                Place Order
              </Button>
              <Button variant='success' onClick={() => dispatch(ClearCart())}className='ms-5'>Clear Cart</Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default CartPage;





















// import { useDispatch, useSelector } from "react-redux"
// import { RemoveFromCart, ClearCart,increase,decrease } from "../component/cartslice"
// import {Button,Row,Col,Container,Card} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

// const CartPage = ()  => {
//    const dispatch = useDispatch()
//    const cartItems = useSelector(state=>state.cart.cartItems)
//    const totalAmount = cartItems.reduce((sum,item)=>sum+item.price * item.quantity,0).toFixed(2) 
//    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//     const navigate = useNavigate();   
//         // alert("Order placed successfully!");
    
//   //   navigate("/porder",{
//   //   state: {
//   //     cartItems,
//   //     totalQuantity,
//   //     totalAmount,
//   //   },
//   // });

//   const handlePlaceOrder = async () => {
//     const order = {
//       items: cartItems,
//       totalAmount,
//       date: new Date().toLocaleString(),
//     };

//     try {
//       const response = await fetch('https://685bb56389952852c2daa144.mockapi.io/orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(order),
//       });

//       if (!response.ok) throw new Error('Failed to place order');


  
// dispatch(ClearCart());
//    }
//    return(
//     <div style={{backgroundColor:'#e3f2fd',height:'100vh'}}>

//         <Container>
//       <div className="text-center py-4">
//         <h3 style={{color:'green'}}>Your Cart</h3>    
//         {cartItems.length === 0 ? (
//           <p style={{color:'tomato'}}>Your Cart is Empty</p>
//         ) : (
//           <>
//             <Row className="gy-4">
//               {cartItems.map((item) => (
//                 <Col md={3} sm={6} xs={12} key={item.id}>
//                   <Card className="h-100 shadow-sm">
//                     <Card.Img
//                       variant="top"
//                       src={item.image}
//                       style={{
//                         height: "200px",
//                         objectFit: "contain",
//                         padding: "10px",
//                       }}
//                     />
//                     <Card.Body className="d-flex flex-column">
//                       <Card.Title
//                         style={{ 
//                           fontSize: "1rem",
//                            overflow: "hidden",
//                           display:"-webkit-box",
//                           WebkitLineClamp: 2,
//                           WebkitBoxOrient: "vertical",
//                         }}>
//                         <h5 className="text-success">Title: {item.title}</h5>
//                       </Card.Title>
//                       <Card.Text className="text-success fw-bold">
//                     <p><span className="text-success">Price:</span>${item.price}</p>
//                       </Card.Text>
//                       <div className="d-flex justify-content-center align-items-center gap-2">
//   <Button
//     variant="primary"
//     size="sm"
//     onClick={() => dispatch(decrease(item.id))}
//   > -</Button>
//   <span>{item.quantity}</span>
//   <Button
//     variant="primary"
//     size="sm"
//     onClick={() => dispatch(increase(item.id))}
//   > + </Button>
// </div>
//                 <div className="mt-auto text-center" >
//                         <Button
//                           variant="primary"
//                           onClick={() => dispatch(RemoveFromCart(item.id))}
//                           className="w-50 mt-2">
//                           Remove</Button>
//                </div>
//                 </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//             <h3><span className="text-success">Total Quantity:</span> {totalQuantity}</h3>
//           <h3><span className="text-danger">Total Amount :</span>${totalAmount}</h3>
//                    <Button variant="success" onClick={handlePlaceorder}>Place Order</Button>
//             <div className="text-center mt-4">
//               <Button
//                 variant="danger"
//                 onClick={() => dispatch(ClearCart())}
//                 className="px-4"
//               > Clear Cart</Button>
//             </div>
//           </>
//         )}
//       </div>
//     </Container>
//     </div>
//    );
// };
// export default CartPage;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RemoveFromCart, ClearCart, increase, decrease } from "../component/cartslice";
// import { Button, Row, Col, Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const totalAmount = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   ).toFixed(2);
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handlePlaceOrder = async () => {
//     const order = {
//       items: cartItems,
//       totalAmount,
//       date: new Date().toLocaleString(),
//     };

//     try {
//       const response = await fetch("https://685bb56389952852c2daa144.mockapi.io/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(order),
//       });

//       if (!response.ok) throw new Error("Failed to place order");
//       dispatch(ClearCart());
//       navigate("/myorder");
//     } catch (error) {
//       console.error("Order placement failed:", error);
//       console.log(order)
//       alert("Failed to place order. Try again.");
//     }
//   };
//   return (
//     <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
//       <Container>
//         <div className="text-center py-4">
//           <h3 style={{ color: "green" }}>Your Cart</h3>
//           {cartItems.length === 0 ? (
//             <p style={{ color: "tomato" }}>Your Cart is Empty</p>
//           ) : (
//             <>
//               <Row className="gy-4">
//                 {cartItems.map((item) => (
//                   <Col md={3} sm={6} xs={12} key={item.id}>
//                     <Card className="h-100 shadow-sm">
//                       <Card.Img
//                         variant="top"
//                         src={item.image}
//                         style={{
//                           height: "200px",
//                           objectFit: "contain",
//                           padding: "10px",
//                         }}
//                       />
//                       <Card.Body className="d-flex flex-column">
//                         <h5 className="text-success">Title: {item.title}</h5>
//                         <p className="text-success fw-bold">
//                           Price: ₹{item.price}
//                         </p>

//                         <div className="d-flex justify-content-center align-items-center gap-2">
//                           <Button
//                             variant="primary"
//                             size="sm"
//                             onClick={() => dispatch(decrease(item.id))}
//                           >
//                             -
//                           </Button>
//                           <span>{item.quantity}</span>
//                           <Button
//                             variant="primary"
//                             size="sm"
//                             onClick={() => dispatch(increase(item.id))}
//                           >
//                             +
//                           </Button>
//                         </div>

//                         <div className="mt-auto text-center">
//                           <Button
//                             variant="danger"
//                             onClick={() => dispatch(RemoveFromCart(item.id))}
//                             className="w-50 mt-2"
//                           >
//                             Remove
//                           </Button>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>

//               <h4 className="mt-4">Total Quantity: {totalQuantity}</h4>
//               <h4>Total Amount: ₹{totalAmount}</h4>

//               <div className="mt-3">
//                 <Button variant="success" onClick={handlePlaceOrder} className="me-2">
//                   Place Order
//                 </Button>
//                 <Button variant="danger" onClick={() => dispatch(ClearCart())}>
//                   Clear Cart
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CartPage;
