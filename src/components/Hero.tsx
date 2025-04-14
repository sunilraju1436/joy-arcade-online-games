
import React from 'react';
import { Game } from '@/data/games';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  featuredGames: Game[];
}

const Hero: React.FC<HeroProps> = ({ featuredGames }) => {
  // Use only the first featured game for the hero
  const featuredGame = featuredGames[0];

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-joy-900/80 to-joy-900/40 z-10"></div>
      <img 
        src={featuredGame.thumbnail} 
        alt={featuredGame.title}
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-2/3">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white">
          <div className="flex gap-2 mb-3">
            {featuredGame.category.map(cat => (
              <span key={cat} className="text-xs bg-joy-500 px-2 py-1 rounded-full">
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-2">{featuredGame.title}</h1>
          <p className="mb-4">{featuredGame.description}</p>
          <button className="bg-joy-600 hover:bg-joy-700 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
            Play Now <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
