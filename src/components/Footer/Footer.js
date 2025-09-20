import React from "react";
import "./Footer.css";
import PopularCategories from "../PopularCategories/PopularCategories";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Секция 1: Логотип и подписка */}
        <div className="footer-section">
          <h2 className="footer-logo">Culinary World</h2>
          <p>
            Subscribe to our newsletter to get the latest recipes and updates!
          </p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>

        {/* Секция 2: Ссылки на разделы сайта */}
        <div className="footer-section">
          <div className="footer-divider"></div>
          <h3>Explore</h3>
          <ul className="footer-list">
            <li>
              <a href="/recipes" className="footer-link">
                Recipes
              </a>
            </li>
            <li>
              <a href="/categories" className="footer-link">
                Categories
              </a>
            </li>
            <li>
              <a href="/blog" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Секция 3: Полезные ссылки */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul className="footer-list">
            <li>
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="footer-link">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/faq" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/help" className="footer-link">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Секция 4: Социальные сети */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="social-icon facebook"
              aria-label="Facebook"
            ></a>
            <a
              href="https://twitter.com"
              className="social-icon twitter"
              aria-label="Twitter"
            ></a>
            <a
              href="https://instagram.com"
              className="social-icon instagram"
              aria-label="Instagram"
            ></a>
            <a
              href="https://pinterest.com"
              className="social-icon pinterest"
              aria-label="Pinterest"
            ></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Culinary World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
