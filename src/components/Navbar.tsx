
import React, { useState } from 'react';
import { Menu, X, GamepadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, implement search functionality
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GamepadIcon className="h-8 w-8 text-joy-600" />
            <span className="text-2xl font-bold text-joy-600">MiN JoY</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-joy-600 font-medium">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-joy-600 font-medium">Categories</Link>
            <Link to="/trending" className="text-gray-700 hover:text-joy-600 font-medium">Trending</Link>
            <Link to="/new" className="text-gray-700 hover:text-joy-600 font-medium">New Games</Link>
          </div>
          
          {/* Search Bar (desktop) */}
          <div className="hidden md:block w-1/3">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-joy-600 font-medium py-2">Home</Link>
              <Link to="/categories" className="text-gray-700 hover:text-joy-600 font-medium py-2">Categories</Link>
              <Link to="/trending" className="text-gray-700 hover:text-joy-600 font-medium py-2">Trending</Link>
              <Link to="/new" className="text-gray-700 hover:text-joy-600 font-medium py-2">New Games</Link>
              <SearchBar onSearch={handleSearch} className="py-2" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
