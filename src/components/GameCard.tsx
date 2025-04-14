
import React from 'react';
import { Game } from '@/data/games';
import CategoryPill from './CategoryPill';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Play } from 'lucide-react';

interface GameCardProps {
  game: Game;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, className }) => {
  const handlePlayGame = () => {
    // In a real implementation, this would navigate to the game page
    // For now, we'll show a toast notification
    toast.success(`Starting ${game.title}...`, {
      description: "Game loading in progress",
      position: "bottom-right",
    });
  };

  return (
    <motion.div 
      className={cn(
        'rounded-xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-xl',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative group">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {game.new && (
          <motion.span 
            className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            NEW
          </motion.span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-900">{game.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>
        <div className="flex flex-wrap gap-1">
          {game.category.slice(0, 2).map((cat) => (
            <CategoryPill 
              key={cat} 
              category={cat} 
              className="text-xs px-2 py-1"
            />
          ))}
          {game.category.length > 2 && (
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              +{game.category.length - 2}
            </span>
          )}
        </div>
      </div>
      <div className="p-4 pt-0">
        <motion.button 
          className="w-full bg-joy-600 hover:bg-joy-700 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          onClick={handlePlayGame}
          whileTap={{ scale: 0.95 }}
        >
          <Play size={18} /> Play Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;
