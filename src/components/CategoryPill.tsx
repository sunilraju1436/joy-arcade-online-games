
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryPillProps {
  category: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ 
  category, 
  active = false, 
  onClick,
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all',
        active 
          ? 'bg-joy-600 text-white hover:bg-joy-700' 
          : 'bg-joy-100 text-joy-800 hover:bg-joy-200',
        className
      )}
    >
      {category}
    </button>
  );
};

export default CategoryPill;
