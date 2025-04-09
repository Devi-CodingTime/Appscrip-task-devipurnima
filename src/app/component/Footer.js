// components/Footer.js

import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Subscription & Contact */}
      <div className="footer-top">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 • USD</p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>

      <hr />

      {/* Bottom Footer Links */}
      <div className="footer-bottom">
        <div className="footer-col">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📷</span>
            <span>🔗</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg" alt="Google Pay" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Google_Pay_Logo.svg" alt="GPay" />
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="footer-note">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
