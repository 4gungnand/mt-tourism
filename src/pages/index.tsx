import Nav from 'components/Nav';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Welcome to Our Village</title>
        <meta name="description" content="Discover the beauty of our village" />
      </Head>
      
      <Nav/>

      <header className="bg-green-600 text-white py-4">
        <h1 className="text-4xl text-center">Welcome to Our Village</h1>
      </header>
      
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl mb-4">About Our Village</h2>
          <p>
            Our village is a beautiful place with rich history and vibrant culture. 
            Nestled in the heart of nature, it offers scenic views, friendly locals, 
            and a peaceful atmosphere.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Attractions</h2>
          <p>
            From ancient landmarks to modern amenities, our village has something 
            for everyone. Enjoy hiking trails, local cuisine, and cultural festivals.
          </p>
        </section>
      </main>
      
      <footer className="bg-green-600 text-white py-4 text-center">
        <p>© 2024 Our Village. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;