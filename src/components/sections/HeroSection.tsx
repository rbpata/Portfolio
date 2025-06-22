"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection({ id }: { id: string }) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id={id} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 animate-pulse"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce opacity-25"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary rounded-full animate-ping opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-up relative z-10">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text">
            Ram
          </span>
          <span className="block md:inline text-foreground"> The AI Innovator</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Aspiring AI/ML Engineer & Full-Stack Developer, crafting intelligent solutions and seamless digital experiences. Exploring the frontiers of technology, one project at a time.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-button-glow transition-all duration-300 transform hover:scale-105 w-full sm:w-auto border-0"
          >
            <Link href="#projects" onClick={(e) => handleScrollTo(e, '#projects')}>
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105 w-full sm:w-auto backdrop-blur-sm"
          >
            <Link href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
              Get In Touch <Briefcase className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
