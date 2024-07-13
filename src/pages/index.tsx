import Destinasi from 'components/Destinasi';
import Footer from 'components/Footer';
import Intro from 'components/Intro';
import Landing from 'components/Landing';
import Umkm from 'components/Umkm';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Landing />
      <Destinasi />
      <Intro />
      <Map />
      <Umkm />
      <Footer />
    </div>
  );
};

export default Home;