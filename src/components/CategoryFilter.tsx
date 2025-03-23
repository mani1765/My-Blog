
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Cloud, Server, GitBranch, BarChart } from 'lucide-react';

type CategoryProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Containers':
      return <Code size={16} className="mr-2" />;
    case 'Cloud':
      return <Cloud size={16} className="mr-2" />;
    case 'CI/CD':
      return <GitBranch size={16} className="mr-2" />;
    case 'Infrastructure as Code':
      return <Server size={16} className="mr-2" />;
    case 'DevOps Practices':
      return <BarChart size={16} className="mr-2" />;
    default:
      return null;
  }
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
          "category-pill px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center",
          selectedCategory === "all"
            ? "bg-blue-600 text-white shadow-sm"
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
            "category-pill px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center",
            selectedCategory === category
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {getCategoryIcon(category)}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
