"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  index: number;
}

export default function ProjectCard({ title, description, imageUrl, imageHint, tags, liveLink, repoLink, index }: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
      className="animate-fade-in-up"
      // @ts-ignore
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full flex flex-col overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/80 hover:shadow-card-elevated transition-all duration-500 card-hover border border-border/50 backdrop-blur-sm">
        <CardHeader className="p-0 relative">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
              data-ai-hint={imageHint || "project technology"}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl mb-3 gradient-text">{title}</CardTitle>
          <p className="text-muted-foreground text-sm mb-4 min-h-[60px] leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-gradient-to-r from-secondary/80 to-accent/80 text-secondary-foreground border border-secondary/30 hover:shadow-glow-secondary transition-all duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gradient-to-r from-muted/40 to-muted/20 border-t border-border/30">
          <div className="flex justify-end space-x-3 w-full">
            {liveLink && (
              <Link 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-accent/80 transition-all duration-300 flex items-center hover:scale-105 hover:shadow-glow-accent px-3 py-1 rounded-md"
              >
                <ExternalLink className="h-5 w-5 mr-1" /> Live Demo
              </Link>
            )}
            {repoLink && (
              <Link 
                href={repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:text-accent/80 transition-all duration-300 flex items-center hover:scale-105 hover:shadow-glow-accent px-3 py-1 rounded-md"
              >
                <Github className="h-5 w-5 mr-1" /> Repository
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
