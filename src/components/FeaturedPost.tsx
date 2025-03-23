
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FeaturedPostProps = {
  post: {
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
  };
  className?: string;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-white border border-border",
      "transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="image-container relative w-full h-full min-h-[280px]">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700",
              imageLoaded ? "image-loaded" : "image-loading"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="flex flex-col p-6 md:p-8 justify-center">
          <div className="mb-3">
            <span className="category-pill inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {post.category}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center mb-5">
            {post.author.avatar ? (
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full mr-3 border border-border"
              />
            ) : (
              <div className="w-10 h-10 rounded-full mr-3 bg-muted flex items-center justify-center">
                <span className="font-medium">
                  {post.author.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium">{post.author.name}</p>
              <time className="text-sm text-muted-foreground">{post.date}</time>
            </div>
          </div>
          
          <Button asChild className="w-fit">
            <Link to={`/blog/${post.id}`}>
              Read article
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
