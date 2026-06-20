import './Navbar.css'
import Logo from '../../assets/Logo.svg';
const Navbar = () => {
  return ( 
    <div className='navbar-container'>
        <div className="logo">
          <img src={Logo}></img>
        </div>
          <ul className='navbar'>
            <li> <a href='#'>Home</a></li>
            <li> <a href='#'>Vehicles</a></li>
            <li> <a href='#'>Details</a></li>
            <li> <a href='#'>About us </a></li>
            <li> <a href='#'>Contact us</a></li>
          </ul>
        <div className="contact">
          <p>Need help? <br/>+996 247-1680</p> 
        </div>
    
    </div>
  )
}

export default Navbar
