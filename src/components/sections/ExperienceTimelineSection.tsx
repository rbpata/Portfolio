import { Briefcase, Zap } from 'lucide-react'; // Zap for projects or notable achievements

const timelineData = [
  {
    type: 'experience',
    title: 'AI/ML Intern',
    company: 'Innovatech Solutions',
    period: 'Summer 2022',
    description: 'Developed and implemented machine learning models for data analysis. Contributed to a major project on predictive maintenance, improving system efficiency by 15%. Collaborated with a team of 5 engineers.',
    icon: <Briefcase className="text-primary" />,
  },
  {
    type: 'project',
    title: 'Lead Developer - Sentiment Analysis Tool',
    company: 'University Capstone Project',
    period: '2022 - 2023',
    description: 'Led a team of 3 to design and build a real-time sentiment analysis tool for social media trends. Utilized Python, NLTK, and Flask. Presented to faculty and industry panel.',
    icon: <Zap className="text-accent" />,
  },
  {
    type: 'experience',
    title: 'Software Development Intern',
    company: 'CodeCrafters Inc.',
    period: 'Summer 2021',
    description: 'Assisted in the development of a web application using React and Node.js. Focused on front-end components and API integration. Gained experience in agile methodologies and version control.',
    icon: <Briefcase className="text-primary" />,
  },
];

export default function ExperienceTimelineSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center text-primary">Experience & Milestones</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-border -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`mb-12 flex md:items-center w-full animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              // @ts-ignore
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 mx-auto">
                {React.cloneElement(item.icon, { className: `${item.type === 'experience' ? 'text-primary' : 'text-accent'} h-6 w-6` })}
              </div>
               {/* Mobile Dot */}
              <div className="md:hidden absolute left-0 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 transform -translate-x-1/2"></div>

              <div className="md:w-1/2 bg-background p-6 rounded-lg shadow-xl md:ml-6 relative md:before:hidden before:content-[''] before:absolute before:top-4 before:left-[-8px] before:w-4 before:h-4 before:bg-background before:border-l before:border-t before:border-border before:transform before:rotate-45">
                 {/* Mobile Connector Line */}
                <div className="md:hidden h-full w-px bg-border absolute left-[5px] top-5 bottom-[-2.5rem] -z-1"></div>
                <h3 className={`font-headline text-xl font-semibold mb-1 ${item.type === 'experience' ? 'text-primary' : 'text-accent'}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{item.company}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
                <p className="text-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
