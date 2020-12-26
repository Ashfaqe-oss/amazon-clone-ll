import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__part1">
                <div className="footer__part1_parts">
                  <h4>Get to know Us</h4>
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Amazon cares</p>
                  <p>Gift a Smile</p>
                </div>
                <div className="footer__part1_parts">
                  <h4>Make Money with Us</h4>
                  <p>Sell on Amazon</p>
                  <p>Become an Affiliate</p>
                  <p>Fulfilment by Amazon</p>
                  <p>Advertise your Products</p>
                </div>
                <div className="footer__part1_parts">
                  <h4>Let Us Help You</h4>
                  <p>Corona and Amazon</p>
                  <p>Your Account</p>
                  <p>100% Purchase Protection</p>
                  <p>Help</p>
                </div>
            </div>
            <div className="footer__part2">
              <div className="footer__part2_parts">
                <Link to="/">
                  <img
                    className="footer__logo"
                    src="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg"
                    alt=""
                    />
                    </Link>
                    
                <h5>English</h5>
              </div>
              <div className="footer__part2_parts">
                <h4>Connect with Us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
            </div>
            <div className="footer__part3">
              <div className="footer__services">
                <div className="footer__services1Components">
                  <h5>AbeBook</h5>
                  <h6>Books, art and collectibles</h6>
                </div>
                <div className="footer__services1Components">
                  <h5>AWS</h5>
                  <h6>Scalable cloud computing services</h6>
                </div>
                <div className="footer__services1Components">
                  <h5>Audible</h5>
                  <h6>Download Audio Books</h6>
                </div>
              </div>
              
                <div className="footer__services">
                  <div className="footer__services1Components">
                  <h5>ShopBox</h5>
                    <h6>Designer Fashion Brands</h6>
                  </div>
                  <div className="footer__services1Components">
                  <h5>Amazon business</h5>
                    <h6>Everyting For your Business</h6>
                  </div>
                  <div className="footer__services1Components">
                  <h5>Prime Now</h5>
                    <h6>2hr Delivery on selected items</h6>
                    </div>
                </div>
                <div className="footer__final">
                        <h5>Conditions of Use & Sale</h5>
                        <h5>Privacy Notice</h5>
                        <h5>Interest-Based Ads</h5>
                        <p>© 2020, Amazon-clone! no rights reserved - demo purpose only , Inc. or its affiliates</p>
                  </div>
              </div>
            </div>
    )
}

export default Footer;
