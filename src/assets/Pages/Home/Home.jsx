import './Home.css';
import { useState } from 'react';

import Loader from '../../../components/Loader/Loader';
import Navbar from '../../../components/Navbar/Navbar';
import Hero from '../../../components/Hero/Hero';
import Info from '../../../components/Info/Info';
import Infosecond from '../../../components/Infosecond/Infosecond';
import Selection from '../../../components/Selection/Selection';
import Banner from '../../../components/Banner/Banner';
import Mobile from '../../../components/Mobile/Mobile';
import Footer from '../../../components/Footer/Footer';


const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Info />
          <Infosecond />
          <Selection />
          <Banner />
          <Mobile />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;