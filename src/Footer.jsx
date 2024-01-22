import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <Link to="/branding" className="link link-hover">
            Branding
          </Link>
          <Link to="/design" className="link link-hover">
            Design
          </Link>
          <Link to="/marketing" className="link link-hover">
            Marketing
          </Link>
          <Link to="/advertisement" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/jobs" className="link link-hover">
            Jobs
          </Link>
          <Link to="/press-kit" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
