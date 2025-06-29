import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: '',
    description: 'An intelligent chatbot built with NLP techniques for customer support automation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Object Detection',
    tags: ['Python', 'TensorFlow', 'openCV', 'Flask'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Classifier',
    description: 'A mobile application that identifies objects in real-time using a deep learning model.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'image recognition',
    tags: ['Python', 'TensorFlow', 'Flask'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'IPL Win Prediction',
    description: 'My first personal portfolio website showcasing early projects and skills. Built with vanilla HTML, CSS, and JS.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website design',
    tags: ['Python','Flask','skikit-learn'],
    repoLink: '#',
  },
   {
    title: 'Image-Classification',
    description: 'A full-stack e-commerce website with features like product listing, cart, and user authentication.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['Python', 'TensorFlow', 'Flask'],
    liveLink: '#',
    repoLink: '#',
  },
];

export default function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
