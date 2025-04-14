
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string[];
  description: string;
  featured: boolean;
  popular: boolean;
  new: boolean;
}

export const categories = [
  "Action",
  "Adventure",
  "Arcade",
  "Board",
  "Card",
  "Casino",
  "Casual",
  "Educational",
  "Fighting",
  "Multiplayer",
  "Puzzle",
  "Racing",
  "RPG",
  "Shooter",
  "Simulation",
  "Sports",
  "Strategy"
];

export const games: Game[] = [
  {
    id: "game1",
    title: "Pixel Warriors",
    thumbnail: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Action", "Fighting", "Multiplayer"],
    description: "Battle in epic pixel arenas with friends or against AI.",
    featured: true,
    popular: true,
    new: false
  },
  {
    id: "game2",
    title: "Speed Racers",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Racing", "Sports", "Multiplayer"],
    description: "Race against time and other players in this adrenaline-pumping racing game.",
    featured: true,
    popular: false,
    new: false
  },
  {
    id: "game3",
    title: "Puzzle Quest",
    thumbnail: "https://images.unsplash.com/photo-1628481058292-f0ee467a8cc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Puzzle", "Casual"],
    description: "Exercise your brain with challenging puzzles and mind-bending challenges.",
    featured: false,
    popular: true,
    new: false
  },
  {
    id: "game4",
    title: "Kingdom Builder",
    thumbnail: "https://images.unsplash.com/photo-1658193624937-50c114c2a679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Strategy", "Simulation"],
    description: "Build your medieval kingdom, gather resources, and defend against invaders.",
    featured: true,
    popular: true,
    new: false
  },
  {
    id: "game5",
    title: "Space Odyssey",
    thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Adventure", "Shooter"],
    description: "Explore the vast universe and encounter alien species in this space adventure.",
    featured: false,
    popular: false,
    new: true
  },
  {
    id: "game6",
    title: "Card Master",
    thumbnail: "https://images.unsplash.com/photo-1610890568384-56e5ddb242a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Card", "Strategy"],
    description: "Collect cards, build powerful decks, and duel against other players.",
    featured: false,
    popular: true,
    new: false
  },
  {
    id: "game7",
    title: "Zombie Survival",
    thumbnail: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Action", "Shooter", "Survival"],
    description: "Survive the zombie apocalypse by scavenging resources and fighting the undead.",
    featured: true,
    popular: true,
    new: false
  },
  {
    id: "game8",
    title: "Soccer Stars",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Sports", "Multiplayer"],
    description: "Play soccer with simplified controls and become the champion.",
    featured: false,
    popular: true,
    new: false
  },
  {
    id: "game9",
    title: "Fruit Slice",
    thumbnail: "https://images.unsplash.com/photo-1615484477344-2f0b1fb4af7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Arcade", "Casual"],
    description: "Slice flying fruits with your finger in this addictive arcade game.",
    featured: false,
    popular: false,
    new: true
  },
  {
    id: "game10",
    title: "Word Wizard",
    thumbnail: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Educational", "Puzzle"],
    description: "Form words from given letters and improve your vocabulary.",
    featured: false,
    popular: true,
    new: false
  },
  {
    id: "game11",
    title: "Desert Racer",
    thumbnail: "https://images.unsplash.com/photo-1561999458-1d07c38a13e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Racing", "Adventure"],
    description: "Race through desert terrains and overcome obstacles to reach the finish line.",
    featured: true,
    popular: false,
    new: true
  },
  {
    id: "game12",
    title: "Chess Master",
    thumbnail: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: ["Board", "Strategy"],
    description: "Play the classic game of chess against AI with different difficulty levels.",
    featured: false,
    popular: true,
    new: false
  }
];
