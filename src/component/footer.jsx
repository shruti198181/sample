import { Container } from "react-bootstrap";
import InstagramIcon from '../icons/instagram';
import TwitterIcon from '../icons/twiter';
import FacebookIcon from '../icons/facebook';
import LinkedinIcon from '../icons/linked';

function Footer () {
  return (
    <>
    <div style={{backgroundColor: '#3949AB',color:'#ffffff'}}>
            <footer className="py-4 pt-5">
        <div style={{padding:'0px 50px'}}>
           <Container>
            <div style={{display:'flex',
                   justifyContent:'space-between',
                   flexWrap:'wrap',
                   gap:'20px'
            }}> 
            <div style={{flex:'1 1 250px'}}>
              <h4 className="text-danger">E-commarce</h4>
              <div style={{display:'flex'}}>
                <InstagramIcon size={24} color="grey" style={{ marginRight: "20px" }} />
                <TwitterIcon size={24} color="grey" style={{ marginRight: "20px" }} />
                <FacebookIcon size={24} color="grey" style={{ marginRight: "20px" }} />
                <LinkedinIcon size={24} color="grey" style={{ marginRight: "20px" }} />    
             </div>
              <p>© KiranaKart Technologies Private Limited</p>
             </div>
             <div style={{flex:'1 1 250px'}}>
              <p>Home</p>
              <p>Delivery Areas</p>
              <p>Careers</p>
              <p>Customer Support</p>
              <p>Press</p>
             </div>
             <div style={{flex:'1 1 200px'}}>
                <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Blog</p>
              <p>Sell on Platform</p>
           </div>
           <div style={{flex:'1 1 200px'}}>
                          <p>Download App</p>
              <input
                type="text"
                placeholder="Get it on PlayStore"
                aria-label="playstore"
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Get it on App Store"
                aria-label="app"
                className="form-control"
              />
           </div>
            </div>
           </Container>
        </div>
      </footer>
      </div>
    </>
  )
}
export default Footer;