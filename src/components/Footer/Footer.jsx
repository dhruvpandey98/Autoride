import './Footer.css'
import Logo from '../../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={Logo} alt="AutoRide logo" />
          <p>
            Premium car rentals made simple. Drive with confidence, book in
            minutes, and travel wherever the road takes you.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v2.5h2V21h2.5v-6.5H15l.5-2.5h-3v-1.6c0-.7.3-1.4 1-1.4z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M4 4l7.2 8.6L4.4 20H6l6-6.4 4.8 6.4H20l-7.5-9.3L19.6 4H18l-5.5 5.9L8 4z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6.9 8.5H4.2V19h2.7V8.5zM5.6 4.2c-1 0-1.6.6-1.6 1.5 0 .8.6 1.5 1.6 1.5 1 0 1.6-.7 1.6-1.5 0-.9-.6-1.5-1.6-1.5zM19.8 12.8c0-2.8-1.5-4.1-3.5-4.1-1.6 0-2.3.9-2.7 1.5V8.5H11v10.5h2.7v-5.8c0-.6 0-1.2.2-1.6.3-.8 1-1.6 2.1-1.6 1.5 0 2.1 1.1 2.1 2.8v6.2h2.7v-6.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">Details</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4.5 5.5c0-1 .8-1.8 1.8-1.8h1.4c.6 0 1.1.4 1.3 1l1 2.6c.2.5 0 1-.3 1.4l-1.2 1.2c1 2.2 2.8 4 5 5l1.2-1.2c.4-.4.9-.5 1.4-.3l2.6 1c.6.2 1 .7 1 1.3v1.4c0 1-.8 1.8-1.8 1.8C10.5 19.9 4 13.4 4 6.4c0-.3 0-.6.5-.9z" />
              </svg>
              +996 247-1680
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="M4 6.5l8 6 8-6" />
              </svg>
              support@autoride.com
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.3" />
              </svg>
              Gurugram, Haryana, India
            </li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4>Stay updated</h4>
          <p>Get deals and updates straight to your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AutoRide. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
