import './Hero.css'
import { useNavigate } from 'react-router-dom'
import Form from './Form/Form'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='hero'>
        <div className="container">
        <div className="left">
            <div className="title">
                <h1>Experience the road like never before</h1>
            </div>
            <div className="content">
                <p>Drive with confidence and convenience. Choose from a wide range of premium vehicles, enjoy a seamless booking experience, and travel wherever your journey takes you.</p>
            </div>
            <button className='left-btn' onClick={() => navigate('/vehicles')}>View all cars</button>
        </div>
        <div className="right">
            <Form />
        </div>
        </div>
    </div>
  )
}

export default Hero