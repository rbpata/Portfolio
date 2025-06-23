"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';

export default function ContactSection({ id }: { id: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', formData);
    setSubmitMessage('Your message has been sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };
  
  return (
    <section id={id} className="relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background"></div>
      
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-secondary/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I'm always excited to discuss new projects, opportunities, or just chat about tech. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="mailto:imrbp.2k04@gmail.com" className="flex items-center text-foreground hover:text-primary transition-all duration-300 text-lg group hover:translate-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 mr-3 group-hover:shadow-glow-accent transition-all duration-300">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                imrbp.2k04@gmail.com
              </a>
              <a href="tel:+919724160978" className="flex items-center text-foreground hover:text-primary transition-all duration-300 text-lg group hover:translate-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 mr-3 group-hover:shadow-glow-accent transition-all duration-300">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                +91 9724160978
              </a>
              <Link href="https://linkedin.com/in/ram-pata" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary transition-all duration-300 text-lg group hover:translate-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 mr-3 group-hover:shadow-glow-accent transition-all duration-300">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                LinkedIn Profile
              </Link>
              <Link href="https://github.com/rbpata" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary transition-all duration-300 text-lg group hover:translate-x-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 mr-3 group-hover:shadow-glow-accent transition-all duration-300">
                  <Github className="h-5 w-5 text-accent" />
                </div>
                GitHub Profile
              </Link>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/60 shadow-2xl border border-border/50 backdrop-blur-sm animate-fade-in-up card-hover" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl gradient-text">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    required 
                    className="mt-1 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input/50 backdrop-blur-sm transition-all duration-300 hover:bg-input/70" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="your.email@example.com" 
                    required 
                    className="mt-1 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input/50 backdrop-blur-sm transition-all duration-300 hover:bg-input/70" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    className="mt-1 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 bg-input/50 backdrop-blur-sm transition-all duration-300 hover:bg-input/70 resize-none" 
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-button-glow transition-all duration-300 transform hover:scale-105 border-0"
                >
                  {isSubmitting ? (
                    <><Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
              {submitMessage && (
                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <p className="text-sm text-center text-green-400">{submitMessage}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
