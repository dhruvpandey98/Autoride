import './Aboutus.css';
import Navbar from '../../../components/Navbar/Navbar';
import Abouthero from '../../../components/Abouthero/Abouthero'
import Review from '../../../components/Review/Review';
import Mobile from '../../../components/Mobile/Mobile'
import Accordian from '../../../components/Accordian/Accordian';
import PromoBanner from '../../../components/Promobanner/PromoBanner'
import Footer from '../../../components/Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Abouthero />
      <Review />
      <Mobile />
      <Accordian />
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default Aboutus
