import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 mb-4 md:mb-0">© 2024 Rob Hope. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-black">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-black">GitHub</a>
        </div>
      </div>
    </footer>
  );
}