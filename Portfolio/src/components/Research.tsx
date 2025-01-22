import React, { useState } from 'react';
import { Brain, Code, GraduationCap, X } from 'lucide-react';
import FadeSection from './FadeSection';

const Research = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const interests = [
    {
      icon: Brain,
      title: 'Research Experience',
      shortDesc: 'Undergraduate research assistant for ADL lab in University of Tabriz',
      id: 'vision',
      fullDesc: `I have been a member of the Applied Deep Learning lab for the last 3 years working on different projects and teaching new interns.
      Key roles:
      
      • Implemented an algorithm to generate crumpled, wrinkled and wavy text images
      • Holding machine learning classes
      • Mentored an internship course for 5 teams of interns`,
    },
    {
      icon: GraduationCap,
      title: 'Teaching Experience',
      shortDesc: 'Teaching Assistant for Algorithm Design and Analysis',
      id: 'teaching',
      fullDesc: `I have served as a Teaching Assistant for multiple courses, focusing on algorithm design and competitive programming.
      
      • Teaching Assistant for Logic circuits and computer architecture course (Jan. 2023 - present)
      • Conducted weekly problem-solving sessions for ICPC preparation
      • Created comprehensive course materials and programming exercises
      • Mentored students in advanced algorithmic concepts and problem-solving strategies
      • Organized mock programming contests to simulate competitive environments`,
    },
    {
      icon: Code,
      title: 'Competitive Programming',
      shortDesc: 'Interested in the competitive side of programming',
      id: 'algorithms',
      fullDesc: `I have participated in different programming contests and helped organize competitive programming events.
      
      • Two 8th place finishes in the ACM-ICPC West Asia Regionals Tehran site contest 
      • Conducted the first nationwide programming contest at my university
      • Co-coach of university's 2024 ICPC team
      • Regular participant in online programming contests
      • Developed training materials for competitive programming preparation`,
    },
  ];

  const selectedItem = interests.find(item => item.id === selectedInterest);

  return (
    <>
      <FadeSection index={1}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => setSelectedInterest(interest.id)}
                className="glass-card p-4 md:p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group text-left h-auto"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <interest.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {interest.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {interest.shortDesc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* Details Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedInterest(null);
            }
          }}
        >
          <div className="glass-card max-w-2xl w-full p-4 md:p-6 rounded-xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedInterest(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                <selectedItem.icon size={24} className="text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {selectedItem.title}
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {selectedItem.fullDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Research;