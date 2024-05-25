import "./Footer.css";
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
            <h3>Avirup</h3>
            <p>I am frontend developer, having an experience of 3 years in a fields line Web development, Email development, responsive design etc.</p>
        </div>
        <div className="footer_top_right">
            <div className="footer_email_input">
                <FaUserAlt className="user_icon" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer_subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <p className="footer_bottom_left">&copy; 2024 Avirup Saha. All right reseved.</p>
        <div className="footer_bottom_right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
