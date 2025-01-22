import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (section: string) => {
    const sectionIndex = {
      'experience': 1,
      'publications': 2,
      'contact': 3
    }[section.toLowerCase()];

    if (sectionIndex !== undefined) {
      window.scrollTo({
        top: window.innerHeight * sectionIndex,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap"
          >
            Pouya Rashidi Kia
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onNavigate={scrollToSection} />
            <SocialLinks />
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <NavLinks onNavigate={scrollToSection} />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ onNavigate }: { onNavigate: (section: string) => void }) => (
  <>
    {['Experience', 'Publications', 'Contact'].map((item) => (
      <button
        key={item}
        onClick={() => onNavigate(item)}
        className="text-gray-300 hover:text-white transition-colors"
      >
        {item}
      </button>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com/pouyarko" className="text-gray-300 hover:text-white transition-colors">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/pouya-rashidi-kia-52088a1a4/" className="text-gray-300 hover:text-white transition-colors">
      <Linkedin size={20} />
    </a>
    <a href="mailto:pouyarashidikia102@gmail.com" className="text-gray-300 hover:text-white transition-colors">
      <Mail size={20} />
    </a>
  </div>
);

export default Header;