
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import FeaturedPost from '@/components/FeaturedPost';
import CategoryFilter from '@/components/CategoryFilter';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
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

  // Featured post is the most recent post
  const featuredPost = blogPosts[0];
  
  // Regular posts (excluding the featured one)
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero 
          title="News, insights and more" 
          subtitle="Learn more about our approach to development, design, and company news."
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
        
        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Post</h2>
            
            {isLoading ? (
              <div className="rounded-xl bg-muted animate-pulse h-96"></div>
            ) : (
              <FeaturedPost post={featuredPost} />
            )}
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-6 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Latest Articles</h2>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-muted animate-pulse h-80"></div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visiblePosts.slice(1, 7).map((post, index) => (
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
                
                {visiblePosts.length > 7 && (
                  <div className="mt-12 text-center">
                    <Link 
                      to="/blog" 
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                    >
                      View all articles
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <NewsletterSignup />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
