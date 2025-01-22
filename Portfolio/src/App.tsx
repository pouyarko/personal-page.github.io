import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="sections-wrapper">
        <section className="section">
          <Hero />
        </section>
        <section className="section">
          <Research />
        </section>
        <section className="section">
          <Publications />
        </section>
        <section className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;