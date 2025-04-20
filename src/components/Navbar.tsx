import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-primary-600">
                MeridenDAO
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#community"
                  className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2 text-sm font-medium"
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
          <a
  href="https://t.me/+IzgQXVV44_M1YmE0"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200"
>
  Join DAO
</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#about"
            className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600"
          >
            About
          </a>
          <a
            href="#community"
            className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600"
          >
            Community
          </a>
          <div className="pt-4">
          <a
  href="https://t.me/+IzgQXVV44_M1YmE0"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-md text-base font-medium transition-colors duration-200"
>
  Join DAO
</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;