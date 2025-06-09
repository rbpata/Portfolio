"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2 } from 'lucide-react';
import { optimizeContent, type OptimizeContentInput, type OptimizeContentOutput } from '@/ai/flows/optimize-content';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AiOptimizerSection({ id }: { id: string }) {
  const [content, setContent] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [optimizedContent, setOptimizedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setOptimizedContent(null);

    try {
      const input: OptimizeContentInput = { content, targetAudience };
      const result: OptimizeContentOutput = await optimizeContent(input);
      setOptimizedContent(result.optimizedContent);
    } catch (err) {
      console.error(err);
      setError('Failed to optimize content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={id} className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">AI Content Optimizer</h2>
        <Card className="max-w-2xl mx-auto bg-background shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent flex items-center">
              <Wand2 className="mr-2 h-6 w-6" />
              Optimize Your Message
            </CardTitle>
            <CardDescription>
              Use AI to rewrite and tailor your text content for a specific target audience, enhancing its impact.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="content" className="text-foreground">Your Content</Label>
                <Textarea
                  id="content"
                  placeholder="Enter the text you want to optimize (e.g., project description, about me section)..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                  className="border-border focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-foreground">Target Audience</Label>
                <Input
                  id="targetAudience"
                  placeholder="e.g., Tech Recruiters, Potential Clients, AI Enthusiasts"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="border-border focus:border-primary"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" /> Optimize
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {error && (
          <Alert variant="destructive" className="mt-8 max-w-2xl mx-auto">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {optimizedContent && (
          <Card className="mt-8 max-w-2xl mx-auto bg-background shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-accent">Optimized Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-wrap">{optimizedContent}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
