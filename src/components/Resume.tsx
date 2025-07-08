import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-gray-900" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and achievements in a comprehensive PDF format
          </p>
        </div>

        <a 
          href="assets\AdhithyaramD.pdf" 
          download
          className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Download className="w-6 h-6" />
          Download Resume
        </a>

        <div className="mt-8 text-gray-400">
          <p>PDF • Last updated: January 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;