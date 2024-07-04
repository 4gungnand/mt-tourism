import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Our Village</title>
        <meta name="description" content="Learn more about our village" />
      </Head>
      
      <header className="bg-green-600 text-white py-4">
        <h1 className="text-4xl text-center">About Our Village</h1>
      </header>
      
      <main className="p-8">
        <section>
          <h2 className="text-2xl mb-4">Our History</h2>
          <p>
            Our village has a long and storied history, dating back hundreds of years.
            Discover the events and people that have shaped our community.
          </p>
        </section>
      </main>
      
      <footer className="bg-green-600 text-white py-4 text-center">
        <p>© 2024 Our Village. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;