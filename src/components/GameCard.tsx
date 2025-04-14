
import React from 'react';
import { Game } from '@/data/games';
import CategoryPill from './CategoryPill';
import { cn } from '@/lib/utils';

interface GameCardProps {
  game: Game;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ game, className }) => {
  return (
    <div className={cn(
      'rounded-xl overflow-hidden bg-white border border-gray-100 game-card-shadow game-card-hover',
      className
    )}>
      <div className="relative">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-40 object-cover"
        />
        {game.new && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
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
        <button className="w-full bg-joy-600 hover:bg-joy-700 text-white font-medium py-2 rounded-lg transition-colors">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;
