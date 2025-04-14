
import React from 'react';
import { Game } from '@/data/games';
import GameCard from './GameCard';
import { motion } from 'framer-motion';

interface GameGridProps {
  title: string;
  games: Game[];
  className?: string;
}

const GameGrid: React.FC<GameGridProps> = ({ title, games, className }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={className}>
      <motion.h2 
        className="text-2xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </motion.div>
    </div>
  );
};

export default GameGrid;
