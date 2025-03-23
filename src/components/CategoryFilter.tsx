
import React from 'react';
import { cn } from '@/lib/utils';

type CategoryProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
};

const CategoryFilter: React.FC<CategoryProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className
}) => {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "category-pill px-4 py-2 rounded-full text-sm font-medium transition-all",
          selectedCategory === "all"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        All categories
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "category-pill px-4 py-2 rounded-full text-sm font-medium transition-all",
            selectedCategory === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
