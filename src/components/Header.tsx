import React from 'react';
import { Plus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onPostJob: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPostJob }) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">FitJobs</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
                Browse Jobs
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
                Companies
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
                Resources
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={onPostJob}
              className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-3 h-3" />
              <span>Post Job</span>
            </button>
            
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;