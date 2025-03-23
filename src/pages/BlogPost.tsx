
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import BlogCard from '@/components/BlogCard';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(blogPosts.find((p) => p.id === id));
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // If post not found, redirect to blog page
    if (!post) {
      navigate('/blog');
      return;
    }
    
    // Find related posts (same category, excluding current post)
    const related = blogPosts
      .filter((p) => p.category === post.category && p.id !== post.id)
      .slice(0, 3);
    setRelatedPosts(related);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id, post, navigate]);

  // If no post found (and not yet redirected)
  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Article Header */}
        <header className="bg-white py-12 md:py-16">
          <div className="container px-6 mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to blog
            </Link>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>5 min read</span>
                </div>
              </div>
              
              <div className="flex items-center mb-8">
                {post.author.avatar ? (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full mr-4 border border-border"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full mr-4 bg-muted flex items-center justify-center">
                    <span className="font-medium">
                      {post.author.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Feature Image */}
        <div className="w-full aspect-video max-w-5xl mx-auto px-6 -mt-6 mb-12 relative">
          <div className="image-container rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className={cn(
                "w-full h-full object-cover transition-all duration-700",
                imageLoaded ? "image-loaded" : "image-loading"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
        
        {/* Article Content */}
        <article className="container px-6 mx-auto py-8">
          <div className="max-w-3xl mx-auto prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-secondary/20">
            <div className="container px-6 mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard
                    key={relatedPost.id}
                    id={relatedPost.id}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    date={relatedPost.date}
                    category={relatedPost.category}
                    imageUrl={relatedPost.imageUrl}
                    author={relatedPost.author}
                    className={`animate-scale-in opacity-0 stagger-${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this article?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Check out more of our content or get in touch with us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/blog">Read more articles</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
