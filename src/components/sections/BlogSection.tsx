import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Generative AI",
    date: "October 26, 2023",
    excerpt: "Exploring the rapid advancements in generative AI and its potential impact across industries...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "AI abstract",
    slug: "/blog/future-of-generative-ai"
  },
  {
    title: "Getting Started with PyTorch",
    date: "September 15, 2023",
    excerpt: "A beginner-friendly guide to setting up your PyTorch environment and building your first neural network...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "code screen",
    slug: "/blog/getting-started-pytorch"
  },
  {
    title: "Ethical Considerations in AI Development",
    date: "August 02, 2023",
    excerpt: "A deep dive into the ethical challenges and responsibilities that come with developing AI systems...",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "brain gears",
    slug: "/blog/ethical-ai-development"
  }
];

export default function BlogSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">My Thoughts & Insights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className="bg-card shadow-lg hover:shadow-glow-accent transition-shadow duration-300 flex flex-col animate-fade-in-up"
              // @ts-ignore
              style={{ animationDelay: `${index * 0.1}s` }}
              >
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                    data-ai-hint={post.imageHint} 
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="font-headline text-xl mb-2 text-accent">{post.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground mb-3">{post.date}</CardDescription>
                <p className="text-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                <Button variant="link" asChild className="p-0 text-primary self-start hover:text-primary/80">
                  <Link href={post.slug}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Posts (Coming Soon)
          </Button>
        </div>
      </div>
    </section>
  );
}
