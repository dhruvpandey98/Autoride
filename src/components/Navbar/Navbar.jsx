import './Navbar.css'
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className='navbar-container'>
        <div className="logo">
          <img src={Logo}></img>
        </div>
          <ul className='navbar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/aboutus">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        <div className="contact">
          <p>Need help? <br/>+996 247-1680</p> 
        </div>
    
    </div>
  )
}

export default Navbar
