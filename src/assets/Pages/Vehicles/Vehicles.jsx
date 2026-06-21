import './Vehicles.css'
import Navbar from '../../../components/Navbar/Navbar'
import Cards from './Cards/Cards'
import Footer from '../../../components/Footer/Footer'

const carsData = [
  {
    id: 1,
    name: "Toyota Fortuner",
    pricePerDay: 5500,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    image: "/images/fortuner.jpg",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    pricePerDay: 3200,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/images/creta.jpg",
  },
  {
    id: 3,
    name: "Maruti Swift",
    pricePerDay: 1800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    image: "/images/swift.jpg",
  },
  {
    id: 4,
    name: "Mahindra Thar",
    pricePerDay: 4500,
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    image: "/images/thar.jpg",
  },
  {
    id: 5,
    name: "Honda City",
    pricePerDay: 2800,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/images/city.jpg",
  },
  {
    id: 6,
    name: "Kia Seltos",
    pricePerDay: 3500,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/images/seltos.jpg",
  },
  {
    id: 7,
    name: "Tata Nexon",
    pricePerDay: 3000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    image: "/images/nexon.jpg",
  },
  {
    id: 8,
    name: "MG Hector",
    pricePerDay: 4000,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    image: "/images/hector.jpg",
  },
  {
    id: 9,
    name: "BMW X5",
    pricePerDay: 12000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/images/bmwx5.jpg",
  },
  {
    id: 10,
    name: "Mercedes C-Class",
    pricePerDay: 10000,
    seats: 5,
    fuel: "Petrol",
    transmission: "Automatic",
    image: "/images/cclass.jpg",
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
