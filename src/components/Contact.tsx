import React from 'react';
import { Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import FadeSection from './FadeSection';

const Contact = () => {
  return (
    <FadeSection index={3}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Information
          </span>
        </h2>

        <div className="max-w-2xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a href="mailto:pouyarashidikia@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  pouyarashidikia@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Department</h3>
                <p className="text-gray-400">Computer Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400">Tabriz, Iran</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Academic Profiles</h3>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/pouyarko" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
                <span>GitHub Research Projects</span>
              </a>
              <a href="https://www.linkedin.com/in/pouya-rashidi-kia-52088a1a4/" className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
                <span>Academic Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
};

export default Contact;