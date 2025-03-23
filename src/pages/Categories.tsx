
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { Book, Cloud, Server, GitBranch, Terminal, BarChart } from 'lucide-react';

const Categories = () => {
  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  // Get count of posts in each category
  const getCategoryCount = (category: string) => {
    return blogPosts.filter(post => post.category === category).length;
  };

  // Get icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Containers':
        return <Terminal size={40} />;
      case 'Cloud':
        return <Cloud size={40} />;
      case 'CI/CD':
        return <GitBranch size={40} />;
      case 'Infrastructure as Code':
        return <Server size={40} />;
      case 'DevOps Practices':
        return <BarChart size={40} />;
      default:
        return <Book size={40} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero 
          title="DevOps Categories" 
          subtitle="Explore our content organized by DevOps domains and technologies."
        />
        
        {/* Categories Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={category}
                  to={`/blog?category=${category}`}
                  className={`bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-scale-in opacity-0 stagger-${Math.min(index % 3 + 1, 3)}`}
                >
                  <div className="text-blue-500 mb-4">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our collection of articles, tutorials, and resources on {category.toLowerCase()}.
                  </p>
                  <div className="text-sm font-medium">
                    {getCategoryCount(category)} articles
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
