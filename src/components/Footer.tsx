import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Adhithya Ram</h3>
            <p className="text-gray-400">Product Designer & AI Enthusiast</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>&copy; 2025 Adhithya Ram. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>All rights reserved. Designed and developed with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;