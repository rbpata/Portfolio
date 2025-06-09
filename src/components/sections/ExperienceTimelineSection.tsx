
import React from 'react';
import { Briefcase, Zap } from 'lucide-react';

const timelineData = [
  {
    type: 'experience',
    title: 'AI/ML Intern',
    company: 'Innovatech Solutions',
    period: 'Summer 2022',
    description: 'Developed and implemented machine learning models for data analysis. Contributed to a major project on predictive maintenance, improving system efficiency by 15%. Collaborated with a team of 5 engineers.',
    icon: <Briefcase />,
  },
  {
    type: 'project',
    title: 'Lead Developer - Sentiment Analysis Tool',
    company: 'University Capstone Project',
    period: '2022 - 2023',
    description: 'Led a team of 3 to design and build a real-time sentiment analysis tool for social media trends. Utilized Python, NLTK, and Flask. Presented to faculty and industry panel.',
    icon: <Zap />,
  },
  {
    type: 'experience',
    title: 'Software Development Intern',
    company: 'CodeCrafters Inc.',
    period: 'Summer 2021',
    description: 'Assisted in the development of a web application using React and Node.js. Focused on front-end components and API integration. Gained experience in agile methodologies and version control.',
    icon: <Briefcase />,
  },
];

export default function ExperienceTimelineSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-16 text-center text-primary">Experience & Milestones</h2>
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-border -translate-x-1/2"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex w-full animate-fade-in-up group ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-start`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Desktop Spacer */}
              <div className="hidden md:block md:flex-1"></div>

              {/* Desktop Icon (no circle, icon size increased) */}
              <div className="hidden md:block relative w-12 h-12 flex-shrink-0 flex items-center justify-center z-10 md:mx-4">
                {React.cloneElement(item.icon, { className: `${item.type === 'experience' ? 'text-primary' : 'text-accent'} h-8 w-8` })}
              </div>

              {/* Mobile Dot and Line */}
              <div className="md:hidden absolute left-3 top-1 h-full flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 border-background z-10 ${item.type === 'experience' ? 'bg-primary' : 'bg-accent'}`}></div>
                {index < timelineData.length - 1 && (
                  <div className="flex-grow w-0.5 bg-border"></div>
                )}
              </div>

              {/* Content Card */}
              <div className={`md:flex-1 bg-background p-6 rounded-lg shadow-xl relative
                                ml-10 md:ml-0
                                before:hidden md:before:block md:before:content-[''] md:before:absolute md:before:top-4 md:before:w-4 md:before:h-4 md:before:bg-background md:before:border-border md:before:transform
                                ${index % 2 === 0
                                  ? 'md:before:left-[-8px] md:before:rotate-45 md:before:border-b md:before:border-l'
                                  : 'md:before:right-[-8px] md:before:rotate-45 md:before:border-t md:before:border-r'}
                                `}>
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
