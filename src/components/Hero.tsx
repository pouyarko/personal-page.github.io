import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import FadeSection from './FadeSection';

const Hero = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: window.innerHeight * 3,
      behavior: 'smooth'
    });
  };

  const handleDownloadCV = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default button behavior
    try {
      const response = await fetch('./cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Pouya_Rashidi_Kia_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <FadeSection index={0}>
      <ParticleBackground />
      <div className="container mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-4 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-6 md:mb-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1 flex-shrink-0 shadow-lg">
              <img 
                src="./profile2.jpg" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                Pouya Rashidi Kia
              </h1>
              <p className="text-lg md:text-2xl text-gray-300">
                Computer Engineering Student
              </p>
            </div>
          </div>
          
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            I'm a final-year Computer Engineering student at the University of Tabriz with a passion for AI, especially computer vision and robotics. I also love sharing what I learn, and I've been a teaching assistant for courses like Logic Circuits and Computer Architecture, plus I've helped run ICPC prep classes. On a different note, I love dancing!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button 
              onClick={handleDownloadCV}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
            >
              <Download size={20} />
              <span className="font-semibold">Download CV</span>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto border border-gray-500 text-gray-300 px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
            >
              <ChevronDown size={20} />
              <span className="font-semibold">Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

export default Hero;
