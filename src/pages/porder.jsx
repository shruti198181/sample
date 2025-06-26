import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function PlaceOrder() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const latest = JSON.parse(localStorage.getItem("latestOrder"));
    setOrder(latest);    
  }, []);

  if (!order) {
    return (
      <Container className="pt-5">
        <h3 className="text-center text-danger">No order found.</h3>
      </Container>
    );
  }

  return (
    <Container className="pt-5">
      <h2 className="text-center text-success">Thank You</h2>
      <h2 className="text-success text-center">Order Place SuccessFully</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Time:</strong> {order.time}</p>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>₹{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3"><strong>Total Amount</strong></td>
            <td><strong>₹{order.totalAmount}</strong></td>
          </tr>
        </tbody>
      </Table>
         <p className="text-center text-danger"><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
    </Container>
  );
}

export default PlaceOrder;
