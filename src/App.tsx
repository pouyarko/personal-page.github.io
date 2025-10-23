import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Pouya Rashidi Kia - Personal Portfolio</title>
        <meta name="description" content="The personal and professional portfolio of Pouya Rashidi Kia, a researcher and software engineer. Explore my research, publications, and contact information." />
      </Helmet>
      <Hero />
      <Research />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;