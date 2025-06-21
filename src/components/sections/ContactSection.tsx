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
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-2xl font-semibold mb-6 text-accent">Contact Information</h3>
            <p className="text-lg text-foreground mb-6">
              I'm always excited to discuss new projects, opportunities, or just chat about tech. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="mailto:ram.student@example.com" className="flex items-center text-foreground hover:text-primary transition-colors text-lg">
                <Mail className="h-6 w-6 mr-3 text-accent" /> imrbp.2k04@gmail.com
              </a>
              <a href="tel:+919724160978" className="flex items-center text-foreground hover:text-primary transition-colors text-lg">
                <Phone className="h-6 w-6 mr-3 text-accent" /> +91 9724160978 (Placeholder)
              </a>
              <Link href="https://linkedin.com/in/ram-pata" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary transition-colors text-lg">
                <Linkedin className="h-6 w-6 mr-3 text-accent" /> LinkedIn Profile
              </Link>
              <Link href="https://github.com/rbpata" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-primary transition-colors text-lg">
                <Github className="h-6 w-6 mr-3 text-accent" /> GitHub Profile
              </Link>
            </div>
          </div>
          
          <Card className="bg-card shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="mt-1 border-border focus:border-primary" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="mt-1 border-border focus:border-primary" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." rows={5} required className="mt-1 border-border focus:border-primary" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {isSubmitting ? (
                    <><Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
              {submitMessage && <p className="mt-4 text-sm text-center text-green-400">{submitMessage}</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
