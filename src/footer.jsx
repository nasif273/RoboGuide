import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h2>About Us</h2>
          <p>RoboGuide is website for robotics enthusiast. Our aim is to help those who want to make robotics product</p>
        </div>
        <div className="footer__section">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, Dhaka, Bangladesh</li>
          </ul>
        </div>
        <div className="footer__section">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 RoboGuide. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
