// import { Navbar, Offcanvas, FormControl,Form,Nav,Button } from "react-bootstrap"
// import { NavLink } from "react-router-dom"
// import { FaShoppingBag} from 'react-icons/fa';
// import {FaUser } from 'react-icons/fa';
// function Mynavbar () {

//     return (
//         <>
//              <Navbar expand="lg" fixed="top" bg="light" variant="light" className="w-100 px-3" style={{ backgroundColor: "rgba(255, 99, 71, 0.2)" }}>

//              <Navbar.Brand as={NavLink} to="/">
//              <img src="data:image/jpeg;base64,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"
//                   alt="logo"
//                   style={{height:"50px",objectFit:'contain'}}/> 
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="offcanvasNavbar" />
//                <Navbar.Offcanvas
//   id="offcanvasNavbar"
//   aria-labelledby="offcanvasNavbarLabel"
//   placement="end">
//    <Offcanvas.Header closeButton>
//                         <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//                     </Offcanvas.Header>
//                     <Offcanvas.Body>
//                         <Nav className="justify-content-center flex-grow-1 pe-3 ">
//                             <NavLink className="me-3" to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
//                             <NavLink  className="me-3"  to="/about" style={{textDecoration:'none'}}>About</NavLink>
//                             <NavLink className="me-3"  to="/products" style={{textDecoration:'none'}}>Product</NavLink>
//                             <NavLink className="me-3"  to="/contact" style={{textDecoration:'none'}}>Contact</NavLink>
//                             <NavLink className="me-3"  to="/service" style={{textDecoration:'none'}}>Service</NavLink>
//                         </Nav>
//                         <Form className="me-5">
//                           <FormControl 
//                           type="search"
//                           placeholder="Search"
//                           aria-label="Search"
//                          className="me-2"/>
//                         </Form>

//                         <div className="d-flex ">
//                               <Nav.Link as={NavLink} to="/cart" className="me-3">
//   <FaShoppingBag size={20} />
// </Nav.Link>

//                              <Button variant="outline-primary" as={NavLink} to="/login">
//                             <FaUser className="me-1" /> Login
//                            </Button>
//                         </div>
//                     </Offcanvas.Body>

//                 </Navbar.Offcanvas>
//        </Navbar>
//         </>
//     )
// }
// export default Mynavbar;


// import { Navbar,Nav, Container, Offcanvas,Form,FormControl,Button} from "react-bootstrap"
// import { NavLink } from "react-router-dom"
// import { FaShoppingBag} from 'react-icons/fa';
// import {FaUser } from 'react-icons/fa';
// function Mynavbar () {

//     return (
//             <div style={{ backgroundColor: '#FFF3E0', width: '100vw' }}>
//         <Navbar expand="lg" style={{ height: '70px', width: '100%' }} className='py-5 py-lg-5'>
//                 <Container fluid className="d-flex align-items-center justify-content-between">

//             <NavLink to="/" className="navbar-brand">
//              <img src="data:image/jpeg;base64,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"
//                   alt="logo"
//                   style={{height:"50px",objectFit:'contain'}}/> 
//                 </NavLink>
//                 <Navbar.Toggle aria-controls="offcanvasNavbar"/>
//                 <Navbar.Offcanvas
//                   id="offcanvasNavbar"
//                   aria-labelledby="offcanvasNavbaeLabel"
//                   placement="end">
//                     <Offcanvas.Header closeButton> 
//                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
//                    </Offcanvas.Header>
//                    <Offcanvas.Body>
//                     <Nav className="justify-content-center flex-grow-1 pe-3 ">
//                              <NavLink className="me-3" to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
//                              <NavLink  className="me-3"  to="/about" style={{textDecoration:'none'}}>About</NavLink>
//                              <NavLink className="me-3"  to="/products" style={{textDecoration:'none'}}>Product</NavLink>
//                              <NavLink className="me-3"  to="/contact" style={{textDecoration:'none'}}>Contact</NavLink>
//                              <NavLink className="me-3"  to="/service" style={{textDecoration:'none'}}>Service</NavLink>
//                          </Nav>
//                          <Form className="me-5 d-flex">
//                            <FormControl 
//                           type="search"
//                            placeholder="Search"
//                            aria-label="Search"
//                           className="me-2"/>
//                          </Form>
//                       <div className="d-flex ">
//                     <Nav.Link as={NavLink} to="/cart" className="me-3">
//                     <FaShoppingBag size={20} />
//                        </Nav.Link>
//                               <Button variant="outline-primary" as={NavLink} to="/login">
//                              <FaUser className="me-1" /> Login
//                             </Button>
//                          </div>
//                    </Offcanvas.Body>
//                   </Navbar.Offcanvas>
//                </Container>
//                </Navbar>
//                 </div>
//                 )
//                 }
// export default Mynavbar;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form,FormControl,Offcanvas,Button } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';
import { FaShoppingBag} from 'react-icons/fa';
import {FaUser } from 'react-icons/fa';
function MyNavbar() {
  return (
    <>
      <div style={{ backgroundColor: '#FFF3E0', width: '100vw' }}>
        <Navbar expand="lg" style={{ height: '70px', width: '100%' }} className='py-5 py-lg-5'>
          <Container>
            <Navbar.Brand  as={Link} to="/home" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                style={{ height: '50px', objectFit: 'contain' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end" >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>              
                  <Nav className="me-auto ms-5 col-md-8">
                  <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                   <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
                     <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                     </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* Icons */}
     <Form className="me-5 d-flex">
                            <FormControl 
                           type="search"
                            placeholder="Search"
                            aria-label="Search"
                           className="me-2"/>
                          </Form>
                       <div className="d-flex ">
                     <Nav.Link as={NavLink} to="/cart" className="me-3">
                     <FaShoppingBag size={20} />
                        </Nav.Link>
                               <Button variant="outline-primary" as={NavLink} to="/login">
                              <FaUser className="me-1" /> Login
                             </Button>                   </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default MyNavbar;
