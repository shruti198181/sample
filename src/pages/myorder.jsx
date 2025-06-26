import { useState ,useEffect } from "react";
import { Container } from "react-bootstrap";

function Myorder () {
    const [orders, setOrders ] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(saved);
    }, []);

    return(
        <>
        <div style={{backgroundColor: "#f8f9fa", minHeight: "100vh"}}>
            <Container className="pt-5">
                <h2 className="text-center text-success">My Orders</h2>
                 {orders.length === 0 ? (
                    <p className="text-center text-success">No Orders Found.</p>
                 ) : (
                    orders.map((order,index) => (
                        <div key={index} className="border p-3 mb-4 bg-white rounded shadow-sm">
                        <p><strong>ORDER ID:</strong>{order.id}</p>
                        <p><strong>Date:</strong>{order.date}</p>
                        <p><strong>Time:</strong>{order.time}</p>
                       <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th> Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                              </thead>
                            <tbody>
                                {order.items.map((item,idx)=>(
                                    <tr key={idx}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{(item.quantity * item.price).toFixed(2)}</td>    
                                    </tr>
                                ))}
                                <tr> 
                                    <td colSpan="2"><strong>Total</strong></td>
                                       <td colSpan="2"><strong>₹{order.totalAmount}</strong></td>
                                </tr>
                            </tbody>
                                              </table>                                               
                        </div>
                    ))
                 )}
            </Container>
        </div>
        </>
    );
};

export default Myorder;

