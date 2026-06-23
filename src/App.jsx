import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './assets/Pages/Home/Home'
import Vehicles from './assets/Pages/Vehicles/Vehicles'
import Aboutus from './assets/Pages/Aboutus/Aboutus'
import Contact from './assets/Pages/Contactus/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
