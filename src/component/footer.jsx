import { Container } from "react-bootstrap";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";




function Footer() {
  return (
    <footer className="  py-4 mt-5">
        <div className="d-flex justify-content-center " style={{margin:'10px',width:'100vw'}}>
          <div style={{ width: "300px", margin: "10px" }}className="col-xs-12 co,-md-3 col-md-6">
            <h5 className="text-danger">E-Commerce</h5>
            <div >
              <FaInstagramSquare size={22} style={{color:'grey'}}/>
              <FaTwitter size={22} style={{color:'grey', margin:'20px'}}/>
              <FaFacebookF size={22} style={{color:'grey', margin:'20px'}}/>
              <FaLinkedinIn size={22} style={{color:'grey', margin:'20px'}}/>
             </div>
             <p>© KiranaKart Technologies Private Limited</p>
          </div>
          <div style={{ width: "300px", margin: "10px" }} className="ms-5 col-xs-6 col-md-3 col-sm-6">
            <p>Home</p>
            <p>Delivery Areas</p>
            <p>Careeres</p>
            <p>Custmors Supports</p>
            <p>Press</p>
          </div>
          <div style={{ width: "300px", margin: "10px" }} className="col-xs-6 col-md-3 col-sm-6">
            <p>Privacy Policy</p>
            <p>Terms of Uses</p>
            <p>Responsible Disclosure Policy</p>
            <p>Mojon-a Zepto Blog</p>
            <p>Sell on Zepto</p>
            <p>Delivery with Zepto</p>
          </div>
          <div style={{ width: "300px", margin: "10px" }} className="col-md-3 col-sm-6 col-xs-12">
            <p>Download App</p>
            <input 
            type="playstore"
            placeholder=" Get it on PlayStore"
          aria-label="playstore"
            />
            <input type="app"
            placeholder="Get it on app store"
            aria-label="app"/>
            {/* <input type="" */}
          </div>
        </div>
    
    </footer>
  );
};
{/* <FaGooglePlay /> */}
export default Footer;
