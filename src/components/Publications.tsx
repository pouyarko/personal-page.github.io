import React from 'react';
import { Helmet } from 'react-helmet-async';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-gray-800 text-white">
      <Helmet>
        <title>Publications - Pouya Rashidi Kia</title>
        <meta name="description" content="Explore the publications of Pouya Rashidi Kia, including research papers and articles on various topics in computer science." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Publications</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-bold">UDINET: A Universal Deep Network for Inpainting of Remote Sensing Images</h3>
            <p className="mt-2">Published in: 2020 28th Iranian Conference on Electrical Engineering (ICEE)</p>
            <a href="/publications/udinet.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-4 inline-block">Read Paper</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
