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
    <section id={id} className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skillCategory, index) => (
            <Card 
              key={skillCategory.category} 
              className="bg-background shadow-lg hover:shadow-glow-accent transition-shadow duration-300 animate-fade-in-up"
              // @ts-ignore
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                {skillCategory.icon}
                <CardTitle className="font-headline text-xl text-accent">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill) => (
                    <li key={skill} className="text-foreground flex items-center">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mr-3"></span>
                      {skill}
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
