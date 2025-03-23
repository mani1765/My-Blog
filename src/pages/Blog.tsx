
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(blogPosts);
  const [isLoading, setIsLoading] = useState(true);
  
  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  // Simulating data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter posts by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setVisiblePosts(blogPosts);
    } else {
      setVisiblePosts(
        blogPosts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero 
          title="Our Blog" 
          subtitle="Explore our latest articles, insights, and company updates."
        />
        
        {/* Category Filter */}
        <section className="py-8 bg-secondary/30">
          <div className="container px-6 mx-auto">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              {selectedCategory === 'all' 
                ? 'All Articles' 
                : `${selectedCategory} Articles`}
            </h2>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-muted animate-pulse h-80"></div>
                ))}
              </div>
            ) : visiblePosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    category={post.category}
                    imageUrl={post.imageUrl}
                    author={post.author}
                    className={`animate-scale-in opacity-0 stagger-${Math.min(index % 3 + 1, 3)}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  There are no articles in the {selectedCategory} category yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
