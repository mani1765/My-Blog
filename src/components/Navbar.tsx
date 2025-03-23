
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 font-medium">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blog-blue to-blog-purple">
              Minima
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: "Categories", path: "/categories" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "nav-link text-base font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="font-medium">
              Sign in
            </Button>
            <Button size="sm" className="font-medium">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 flex flex-col space-y-4 animate-fade-in">
            {[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: "Categories", path: "/categories" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-lg font-medium transition-colors py-2",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    `animate-slide-in stagger-${i + 1}`
                  )
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-2 pt-4 animate-slide-in stagger-3">
              <Button variant="ghost" className="justify-start font-medium">
                Sign in
              </Button>
              <Button className="w-full font-medium">
                Get started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
