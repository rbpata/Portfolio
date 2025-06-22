"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  // { href: '#blog', label: 'Blog' }, // Uncomment when blog section is ready
  { href: '#ai-optimizer', label: 'AI Optimizer' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'bg-background/90 backdrop-blur-xl shadow-2xl border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <Link 
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')} 
          className="text-2xl font-headline font-bold gradient-text hover:scale-105 transition-all duration-300"
        >
          Ram's Refraction
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-primary-foreground hover:shadow-button-glow transition-all duration-300 transform hover:scale-105"
          >
            <a href="/My_Resume_Updated.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/20 pb-6 animate-fade-in-up">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium text-lg hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-primary-foreground hover:shadow-button-glow transition-all duration-300 transform hover:scale-105 mt-4"
            >
              <a href="/My_Resume_Updated.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
