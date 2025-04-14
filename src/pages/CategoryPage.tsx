
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameGrid from '@/components/GameGrid';
import { games, categories } from '@/data/games';
import { motion } from 'framer-motion';
import { ArrowLeft, Gamepad2 } from 'lucide-react';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Filter games for this category
  const filteredGames = games.filter(game => 
    game.category.includes(categoryName || '')
  );
  
  // Get a background color based on category
  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      'Action': 'bg-red-50',
      'Adventure': 'bg-blue-50',
      'Arcade': 'bg-purple-50',
      'Board': 'bg-amber-50',
      'Card': 'bg-emerald-50',
      'Casino': 'bg-rose-50',
      'Casual': 'bg-teal-50',
      'Educational': 'bg-lime-50',
      'Fighting': 'bg-orange-50',
      'Multiplayer': 'bg-cyan-50',
      'Puzzle': 'bg-indigo-50',
      'Racing': 'bg-sky-50',
      'RPG': 'bg-violet-50',
      'Shooter': 'bg-amber-50',
      'Simulation': 'bg-emerald-50',
      'Sports': 'bg-green-50',
      'Strategy': 'bg-blue-50',
    };
    
    return categoryColors[category] || 'bg-gray-50';
  };
  
  // Get a text color based on category
  const getCategoryTextColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      'Action': 'text-red-700',
      'Adventure': 'text-blue-700',
      'Arcade': 'text-purple-700',
      'Board': 'text-amber-700',
      'Card': 'text-emerald-700',
      'Casino': 'text-rose-700',
      'Casual': 'text-teal-700',
      'Educational': 'text-lime-700',
      'Fighting': 'text-orange-700',
      'Multiplayer': 'text-cyan-700',
      'Puzzle': 'text-indigo-700',
      'Racing': 'text-sky-700',
      'RPG': 'text-violet-700',
      'Shooter': 'text-amber-700',
      'Simulation': 'text-emerald-700',
      'Sports': 'text-green-700',
      'Strategy': 'text-blue-700',
    };
    
    return categoryColors[category] || 'text-gray-700';
  };
  
  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Action':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Adventure':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Arcade':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Board':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Card':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Casino':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Casual':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Educational':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Fighting':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Multiplayer':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Puzzle':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Racing':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'RPG':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Shooter':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Simulation':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Sports':
        return <Gamepad2 size={24} className="mr-2" />;
      case 'Strategy':
        return <Gamepad2 size={24} className="mr-2" />;
      default:
        return <Gamepad2 size={24} className="mr-2" />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${getCategoryColor(categoryName || '')}`}>
      <Navbar />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <Link to="/categories" className="inline-flex items-center text-gray-600 hover:text-joy-600 mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Categories
          </Link>
          
          <motion.div 
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`mr-4 p-3 rounded-lg ${getCategoryColor(categoryName || '')}`}>
              {getCategoryIcon(categoryName || '')}
            </div>
            <h1 className={`text-4xl font-bold ${getCategoryTextColor(categoryName || '')}`}>
              {categoryName} Games
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore our collection of {filteredGames.length} {categoryName} games. 
            From classic favorites to new releases, find your next gaming adventure here!
          </motion.p>
          
          {filteredGames.length > 0 ? (
            <GameGrid 
              title={`All ${categoryName} Games`}
              games={filteredGames}
            />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-600">No games found in this category</h3>
              <p className="mt-2 text-gray-500">Check back later for new additions!</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
