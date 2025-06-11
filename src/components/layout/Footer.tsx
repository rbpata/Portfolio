import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:your.email@example.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Ram. All rights reserved.
        </p>
        {/* <p className="text-xs mt-2">
          Built with Next.js and Tailwind CSS.
        </p> */}
      </div>
    </footer>
  );
}
