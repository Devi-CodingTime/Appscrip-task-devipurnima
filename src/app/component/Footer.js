// components/Footer.js
import React from 'react';
import '../styles/footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettā muse.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className="footer-columns">
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 • USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>

        <div className="footer-links">
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

        <div className="footer-links">
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

        <div className="footer-follow">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📷</span>
            <span>🔗</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payments">
            <img src="/images/gpay.png" alt="Google Pay" />
            <img src="/images/mastercard.png" alt="Mastercard" />
            <img src="/images/paypal.png" alt="PayPal" />
            <img src="/images/amex.png" alt="American Express" />
            <img src="/images/applepay.png" alt="Apple Pay" />
            <img src="/images/stripe.png" alt="Stripe" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
