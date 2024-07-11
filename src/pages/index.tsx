import Landing from 'components/Landing';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the Map component
const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Landing />
      <Map />
    </div>
  );
};

export default Home;