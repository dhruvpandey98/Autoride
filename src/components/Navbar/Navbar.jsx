import './Navbar.css'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className='navbar'>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/vehicles"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Vehicles
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="contact">
        <p>
          Need help? <br />
          <span className="">+996 247-1680</span>
        </p>
      </div>
    </div>
  )
}

export default Navbar
