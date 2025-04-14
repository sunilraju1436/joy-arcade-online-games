
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Award, Star, Calendar, Users, Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { games } from '@/data/games';
import { toast } from 'sonner';
import CategoryPill from '@/components/CategoryPill';

const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find(g => g.id === gameId);
  
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center mb-4">Game Not Found</h1>
          <p className="text-gray-600 mb-8">The game you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="bg-joy-600 text-white px-6 py-2 rounded-lg hover:bg-joy-700 transition-colors">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handlePlayGame = () => {
    toast.success(`Starting ${game.title}...`, {
      description: "Game loading in progress",
      position: "bottom-right",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero section with game image */}
        <div className="w-full h-80 bg-gradient-to-r from-purple-700 to-joy-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src={game.thumbnail} 
              alt={game.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <Link to="/categories" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to Categories
              </Link>
              <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {game.category.map(cat => (
                  <Link to={`/category/${cat}`} key={cat}>
                    <CategoryPill 
                      category={cat} 
                      className="text-xs px-3 py-1 bg-white/20 text-white hover:bg-white/30"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Game details */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-20 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Game cover */}
              <motion.div 
                className="w-full md:w-1/3 mb-6 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={game.thumbnail} 
                    alt={game.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <button 
                  onClick={handlePlayGame}
                  className="w-full mt-4 bg-joy-600 hover:bg-joy-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={20} /> Play Now
                </button>
              </motion.div>
              
              {/* Game info */}
              <motion.div 
                className="w-full md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">About this game</h2>
                <p className="text-gray-700 mb-6">{game.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {game.featured && (
                    <div className="flex items-center text-gray-700">
                      <Award className="mr-2 text-joy-600" size={20} />
                      <span>Featured Game</span>
                    </div>
                  )}
                  {game.popular && (
                    <div className="flex items-center text-gray-700">
                      <Star className="mr-2 text-amber-500" size={20} />
                      <span>Popular</span>
                    </div>
                  )}
                  {game.new && (
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-2 text-green-500" size={20} />
                      <span>New Release</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-2 text-blue-500" size={20} />
                    <span>5-10 min</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="mr-2 text-purple-500" size={20} />
                    <span>1-4 Players</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">How to play</h3>
                <p className="text-gray-700">
                  Use your keyboard arrows or mouse to control the game. Follow the in-game instructions
                  to progress through levels and achieve the highest score possible. Have fun!
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Similar games section could go here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GamePage;
