
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type BlogPostProps = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatar?: string;
  };
  className?: string;
};

const BlogCard: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  date,
  category,
  imageUrl,
  author,
  className
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/blog/${id}`}
      className={cn(
        "blog-card group flex flex-col rounded-xl overflow-hidden bg-white border border-border",
        className
      )}
    >
      <div className="image-container aspect-w-16 aspect-h-9 w-full">
        <img
          src={imageUrl}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            imageLoaded ? "image-loaded" : "image-loading"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="flex flex-col p-6 flex-grow">
        <div className="mb-2">
          <span className="category-pill inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blog-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            {author.avatar ? (
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-8 h-8 rounded-full mr-2 border border-border"
              />
            ) : (
              <div className="w-8 h-8 rounded-full mr-2 bg-muted flex items-center justify-center">
                <span className="text-xs font-medium">
                  {author.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          
          <time className="text-xs text-muted-foreground">{date}</time>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
