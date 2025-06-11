import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Dept. of Computer Science, Gujarat University',
    period: '2024 - Present',
    details: 'Focusing on advanced machine learning algorithms, deep learning, and AI ethics. Currently working on a thesis related to explainable AI.',
    icon: <GraduationCap className="h-8 w-8 text-primary" />
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'CPICA, Gujarat University',
    period: '2021 - 2024',
    details: 'Graduated with honors. Key coursework in data structures, algorithms, software engineering, and database management. Capstone project on a predictive analytics model.',
    icon: <GraduationCap className="h-8 w-8 text-primary" />
  },
];

export default function EducationSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={edu.degree} 
              className="bg-card shadow-lg hover:shadow-glow-primary transition-shadow duration-300 animate-fade-in-up"
              // @ts-ignore
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-2">
                  {edu.icon}
                  <CardTitle className="font-headline text-2xl text-primary">{edu.degree}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  <p className="font-semibold text-accent">{edu.institution}</p>
                  <p>{edu.period}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
