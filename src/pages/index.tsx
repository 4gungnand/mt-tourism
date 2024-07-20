import Destinasi from 'components/Destinasi';
import Footer from 'components/Footer';
import Intro from 'components/Intro';
import Landing from 'components/Landing';
import Paket from 'components/Paket';
import Umkm from 'components/Umkm';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Landing />
      <div className='-mt-20 relative z-10' id='destinasi-section'>
        <Destinasi />
      </div>
      <Intro />
      <Map />
      <div id="umkm-section">
        <Umkm />
      </div>
      <div id="paket-section">
        <Paket />
      </div>
      <Footer />
    </div>
  );
};

export default Home;