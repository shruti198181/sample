// import {useState,useEffect} from 'react';
// import {Container,Col,Row} from'react-bootstrap';
// function Data () { 
//     const [product,setproduct] = useState([])
//     const [error,seterror] = useState('')

//     useEffect(()=> {
//      fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
// setproduct(data)});
// console.log("data", product);  
//     },[])
//     return(
//         <>
//         <Container>
//           <Row className="d-flex justify-content-start flex-wrap gap-3 px-4">

            
//              {product.map((products)=>(
//               <div 
//                 key={products.id}
//               style={{
//                 width:'250px',
//                 justifyContent:'space-around',
//                 border:'1px solid red',
//                 borderRadius:'10px',
//               }}>
//                 <img src={products.image}
//                 alt={products.title}
//                 style={{width:'100%',height:'200px',objectFit:'contain'}}/>  
//               </div>
//              ))}
        

//           </Row>
//         </Container>
//         </>
//     )

// }
// export default Data;
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Data() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container className="my-4"> {/* ✅ Proper container padding */}
      <Row className="gx-4 gy-4"> {/* ✅ Horizontal & vertical spacing */}
        {product.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}> {/* ✅ 4 cards per row */}
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '10px',
                height: '100%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
              />
              <h6 className="mt-2">{item.title}</h6>
              <p className="text-success fw-bold">${item.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Data;
