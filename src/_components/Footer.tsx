import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Ranjit Kairi. Built with love⚡
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <span className="text-gray-500 text-sm">Connect with me:</span>
          <a href="https://linkedin.com/in/ranjitkairi/" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/ranjitkairi" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
          <a href="mailto:ranjitkairi.dev@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;