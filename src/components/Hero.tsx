import React from 'react';
import Header from './Header';

const Hero: React.FC = () => {
  return (
    <>
      <Header />
      <section id="hero" className="flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold">Pouya Rashidi Kia</h1>
        <p className="mt-4 text-xl">Researcher & Software Engineer</p>
      </section>
    </>
  );
};

export default Hero;
