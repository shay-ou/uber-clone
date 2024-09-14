import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for styling

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <div className="footer-logo">Uber</div>
                    <a href="#" className="footer-help">Visit Help Center</a>
                </div>

                <div className="footer-columns">
                    <ul className="footer-list">
                        <h4>Company</h4>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Offerings</a></li>
                        <li><a href="#">Newsroom</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h4>Products</h4>
                        <li><a href="#">Ride</a></li>
                        <li><a href="#">Drive</a></li>
                        <li><a href="#">Deliver</a></li>
                        <li><a href="#">Eat</a></li>
                        <li><a href="#">Uber for Business</a></li>
                        <li><a href="#">Uber Freight</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h4>Legal</h4>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Licenses</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h4>Global Citizenship</h4>
                        <li><a href="#">Safety</a></li>
                        <li><a href="#">Diversity and Inclusion</a></li>
                        <li><a href="#">Sustainability</a></li>
                    </ul>

                    <ul className="footer-list">
                        <h4>Travel</h4>
                        <li><a href="#">Reserve</a></li>
                        <li><a href="#">Airports</a></li>
                        <li><a href="#">Cities</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <a href="https://www.facebook.com/uber" className="social-link facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/uber" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/uber" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/uber" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Uber Technologies Inc.</p>
                </div>
            </div>
        </footer>
    );
}
