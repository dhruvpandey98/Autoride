import './Banner.css'
import Cards from './Cards/Cards'
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="title">
            <h1>Facts in numbers</h1>
        </div>
        <div className="content">
            <p>Choose from a wide range of well-maintained vehicles and enjoy convenient, affordable, and hassle-free travel wherever you go.</p>
        </div>
        <div className="cards">
            <Cards />
        </div>
      </div>
    </div>
  )
}

export default Banner
