
import React from 'react';
import { Game } from '@/data/games';
import GameCard from './GameCard';

interface GameGridProps {
  title: string;
  games: Game[];
  className?: string;
}

const GameGrid: React.FC<GameGridProps> = ({ title, games, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
