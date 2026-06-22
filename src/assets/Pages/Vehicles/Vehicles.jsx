import './Vehicles.css'
import Navbar from '../../../components/Navbar/Navbar'
import Cards from './Cards/Cards'
import Footer from '../../../components/Footer/Footer'
import Fortuner from '../../Carimages/Fortuner.avif'
import Creta from '../../Carimages/Creta.jpg'
import Swift from '../../Carimages/Swift.jpg'
import Thar from '../../Carimages/Thar.avif'
import Hector from '../../Carimages/Hector.jpg'
import Nexon from '../../Carimages/Nexon.avif'
import Seltos from '../../Carimages/seltos.avif'
import Hondacity from '../../Carimages/Hondacity.avif'

const carsData = [
{
    id: 1,
    name: "Toyota Fortuner",
    pricePerDay: 5500,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    image: Fortuner,
  },
  {
    id: 2,
    name: "Hyundai Creta",
    pricePerDay: 3200,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: Creta
  },
  {
    id: 3,
    name: "Maruti Swift",
    pricePerDay: 1800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    image: Swift,
  },
  {
    id: 4,
    name: "Mahindra Thar",
    pricePerDay: 4500,
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    image: Thar,
  },
  {
    id: 5,
    name: "Honda City",
    pricePerDay: 2800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: Hondacity,
  },
  {
    id: 6,
    name: "Kia Seltos",
    pricePerDay: 3500,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: Seltos,
  },
  {
    id: 7,
    name: "Tata Nexon",
    pricePerDay: 3000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    image: Nexon,
  },
  {
    id: 8,
    name: "MG Hector",
    pricePerDay: 4000,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    image: Hector,
  },
  {
    id: 9,
    name: "BMW X5",
    pricePerDay: 12000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  },
  {
    id: 10,
    name: "Mercedes C-Class",
    pricePerDay: 10000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
  },
]

const Vehicles = () => {
  return (
    <div>
      <Navbar />

      <div className="title">
        <span>Autoride</span>
        <h1>Select the vehicle</h1>
        <p>Browse our full range of well-maintained vehicles and find the perfect match for your next trip.</p>
        <span className="title-line"></span>
      </div>

      <div className="cards">
        {carsData.map((car) => (
          <Cards key={car.id} car={car} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default Vehicles
