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
      <Card className="h-full flex flex-col overflow-hidden shadow-2xl bg-card hover:shadow-glow-primary transition-shadow duration-300">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint || "project technology"}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-2xl mb-3 text-primary">{title}</CardTitle>
          <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/70 text-secondary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-muted/30">
          <div className="flex justify-end space-x-3 w-full">
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center">
                <ExternalLink className="h-5 w-5 mr-1" /> Live Demo
              </Link>
            )}
            {repoLink && (
              <Link href={repoLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center">
                <Github className="h-5 w-5 mr-1" /> Repository
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
