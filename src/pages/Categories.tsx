
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryPill from '@/components/CategoryPill';
import GameGrid from '@/components/GameGrid';
import { games, categories } from '@/data/games';
import { motion } from 'framer-motion';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredGames = activeCategory 
    ? games.filter(game => game.category.includes(activeCategory))
    : games;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <motion.h1 
            className="text-3xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Game Categories
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CategoryPill 
              category="All Games"
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <CategoryPill 
                  category={category}
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <GameGrid 
            title={activeCategory ? `${activeCategory} Games` : "All Games"}
            games={filteredGames}
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
