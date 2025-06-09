import Image from 'next/image';

export default function AboutSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://placehold.co/600x600.png"
              alt="Ram - AI/ML Student"
              width={600}
              height={600}
              className="rounded-lg shadow-xl object-cover aspect-square"
              data-ai-hint="student portrait"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
            <p className="font-body text-lg text-foreground mb-4">
              Hello! I'm Ram, a passionate student deeply immersed in the world of Artificial Intelligence and Machine Learning. My journey in technology has been driven by a curiosity to understand and build systems that can learn, adapt, and solve real-world problems.
            </p>
            <p className="font-body text-lg text-foreground mb-4">
              Beyond AI/ML, I also have a strong foundation in software development, enabling me to bring complex ideas to life from concept to deployment. I thrive on challenges and am constantly seeking opportunities to expand my knowledge and skills.
            </p>
            <p className="font-body text-lg text-foreground">
              This portfolio is a reflection of my dedication, showcasing projects that highlight my technical abilities and creative problem-solving approach. I'm excited to connect and explore how I can contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
