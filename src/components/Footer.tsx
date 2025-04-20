import React from 'react';
import { Twitter, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div>
            <h2 className="text-2xl font-bold text-primary-400 mb-4">MeridenDAO</h2>
            <p className="text-neutral-400 mb-6 max-w-md">
              Building a more inclusive and transparent governance model for the digital age through decentralized technology.
            </p>
            <div className="flex space-x-4">
  <a
    href="https://x.com/itsmeridendao"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-400 hover:text-white transition-colors duration-200"
  >
    <Twitter className="h-5 w-5" />
    <span className="sr-only">Twitter</span>
  </a>

  <a
    href="https://t.me/+IzgQXVV44_M1YmE0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-400 hover:text-white transition-colors duration-200"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="sr-only">Telegram</span>
  </a>

  <a
    href="mailto:itsmeridendao@gmail.com"
    className="text-neutral-400 hover:text-white transition-colors duration-200"
  >
    <Mail className="h-5 w-5" />
    <span className="sr-only">Email</span>
  </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MeridenDAO. All rights reserved.
          </p>
          <div className="flex space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;