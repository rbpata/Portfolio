import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Database, Layers, Brain } from 'lucide-react'; // Example icons

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code className="h-8 w-8 text-accent" />,
    items: ['Python', 'JavaScript', 'Java', 'C++', "C", "PHP"],
  },
  {
    category: 'AI/ML',
    icon: <Brain className="h-8 w-8 text-accent" />,
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Pandas', 'NumPy'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Layers className="h-8 w-8 text-accent" />,
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Django'],
  },
  {
    category: 'Databases',
    icon: <Database className="h-8 w-8 text-accent" />,
    items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Cpu className="h-8 w-8 text-accent" />,
    items: ['Git & GitHub', 'Docker', 'AWS', 'Google Cloud', 'VS Code', 'Jupyter'],
  },
];

export default function SkillsSection({ id }: { id: string }) {
  return (
    <section id={id} className="relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card/50"></div>
      
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/3 to-secondary/5 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skillCategory, index) => (
            <Card 
              key={skillCategory.category} 
              className="bg-gradient-to-br from-card/80 to-card/60 shadow-lg hover:shadow-card-elevated transition-all duration-500 card-hover border border-border/50 backdrop-blur-sm animate-fade-in-up"
              // @ts-ignore
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30">
                  {skillCategory.icon}
                </div>
                <CardTitle className="font-headline text-xl gradient-text">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillCategory.items.map((skill) => (
                    <li key={skill} className="text-foreground flex items-center group hover:translate-x-1 transition-transform duration-300">
                      <span className="inline-block h-2 w-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover:shadow-glow-primary transition-all duration-300"></span>
                      <span className="group-hover:text-accent transition-colors duration-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
