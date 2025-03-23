
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

type NewsletterSignupProps = {
  className?: string;
};

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been signed up for our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={cn(
      "bg-secondary rounded-xl p-8 md:p-10",
      className
    )}>
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-2">Stay updated</h3>
        <p className="text-muted-foreground mb-6">
          Sign up for our newsletter to receive the latest blog posts and updates.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
