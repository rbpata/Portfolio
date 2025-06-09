
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
    <section id={id} className="min-h-screen flex items-center bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            Ram
          </span>
          <span className="block md:inline"> The AI Innovator</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Aspiring AI/ML Engineer & Full-Stack Developer, crafting intelligent solutions and seamless digital experiences. Exploring the frontiers of technology, one project at a time.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
          <Button 
            size="lg" 
            asChild 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <Link href="#projects" onClick={(e) => handleScrollTo(e, '#projects')}>
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
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
