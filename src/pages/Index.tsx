
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameGrid from '@/components/GameGrid';
import CategoryPill from '@/components/CategoryPill';
import Footer from '@/components/Footer';
import { games, categories } from '@/data/games';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const featuredGames = games.filter(game => game.featured);
  const popularGames = games.filter(game => game.popular);
  const newGames = games.filter(game => game.new);
  
  const filteredGames = activeCategory 
    ? games.filter(game => game.category.includes(activeCategory))
    : games;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6">
          <Hero featuredGames={featuredGames} />
        </section>
        
        {/* Categories Section */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Game Categories</h2>
          <div className="flex flex-wrap gap-2">
            <CategoryPill 
              category="All"
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {categories.slice(0, 10).map(category => (
              <CategoryPill 
                key={category}
                category={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </section>
        
        {/* Popular Games */}
        <section className="container mx-auto px-4 py-8">
          <GameGrid 
            title={activeCategory ? `${activeCategory} Games` : "Popular Games"}
            games={activeCategory ? filteredGames : popularGames}
          />
        </section>
        
        {/* New Games */}
        {!activeCategory && (
          <section className="container mx-auto px-4 py-8">
            <GameGrid 
              title="New Games"
              games={newGames}
            />
          </section>
        )}
        
        {/* Featured Games */}
        {!activeCategory && (
          <section className="container mx-auto px-4 py-8">
            <GameGrid 
              title="Featured Games" 
              games={featuredGames}
            />
          </section>
        )}
        
        {/* All Games */}
        {activeCategory && filteredGames.length > 8 && (
          <section className="container mx-auto px-4 py-8">
            <GameGrid 
              title={`More ${activeCategory} Games`}
              games={filteredGames.slice(8)}
            />
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
