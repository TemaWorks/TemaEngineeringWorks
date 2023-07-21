import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const whatsApp = () =>{
    window.open('https://wa.me/9892322821', '_blank');
  }

  return (
    <>
      <div className="footer">
        <div className="footer_info section_padding">
          <div className="footer_links">
            <div className="data">
              <p>
                We have been guided by our manager, 'Mr. Paul Fernandes', who
                has enabled us in gaining an eminent market position. His
                expertise in the domain, brilliant managerial skills and
                in-depth knowledge encourages our team members to work hard and
                move towards the path of success.
              </p>
            </div>
            <div className="data">
              <h4>Pages</h4>
              <a href="/">
                <p style={{"color": "white"}}>Home</p>
              </a>
              <a href="/service/he">
                <p style={{"color": "white"}}>Service</p>
              </a>
              <a href="/contact">
                <p style={{"color": "white"}}>Contact</p>
              </a>
              <a href="/about">
                <p style={{"color": "white"}}>About Us</p>
              </a>
            </div>
            <div className="data">
              <h4>Hero Products</h4>
              <a href="/service/he">
                <p style={{"color": "white"}}>Heat Exchnager</p>
              </a>
              <a href="/service/hc">
                <p style={{"color": "white"}}>Heating Coil</p>
              </a>
              <a href="/service/ia">
                <p style={{"color": "white"}}>Industrial Agitator</p>
              </a>
              
            </div>
            <div className="data">
              <h4>Speed Dial</h4>
              <a href="tel:9892322821">
                <p style={{"color": "white"}}>Phone - 9892322821</p>
              </a>
              <a href="mailto:tema_ew@yahoo.com">
                <p style={{"color": "white"}} >Email - tema_ew@yahoo.com</p>
              </a>
              <a href="/contact">
                <p style={{"color": "white"}}>Location</p>
              </a>
              
            </div>
            <div className="data">
              <h4>Connect Us</h4>
              
                <a href="mailto:tema_ew@yahoo.com"><FontAwesomeIcon icon={faEnvelope} size="3px" color="white"/></a><br/>
                <a><FontAwesomeIcon icon={faLinkedin} size="5px" color="white"/></a><br/>
                <a><FontAwesomeIcon icon={faWhatsapp} onClick={whatsApp} size="5px" color="white"/></a><br/>
                <a href="tel:9892322821"><FontAwesomeIcon icon={faPhone}  size="5px" color="white"/></a>
              
              
            </div>
          </div>
          <hr/>
          <div className="footer_below">
            <div className="footer_copyright">
              <p>
                @{new Date().getFullYear()} Tema Engineering Works. All Right Reserved.
              </p>
            </div>
            <div className="footer_terms">
              <a href=""><div><p>Terms & Conditions</p></div></a>
              <a href=""><div><p>Privacy</p></div></a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
