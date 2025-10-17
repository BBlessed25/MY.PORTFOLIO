import { Card, Button } from './UI';
import { cn } from '../utils/cn';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    { title: 'Job-Tracker', description: 'A modern, responsive React app for managing a job search. Users can sign up / log in, then add, edit, and track applications across stages (e.g., wishlist → applied → interviewing → offer → rejected). It includes a dashboard, a Kanban-style job board, and profile/settings—all with smooth page transitions and clean, mobile-first UI.', tech: ['React','Next.js','JavaScript','Tailwind','Axios'], gradient: 'from-amber-500 to-orange-600' },
    { title: 'E-Commerce Website', description: 'A responsive online store for clothing sales', tech: ['React','Tailwind','JavaScript'], gradient: 'from-yellow-600 to-amber-700' },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={cn('space-y-16', isVisible && 'animate-slide-up')}>
          <div className="text-center">
            <h2 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">A showcase of my recent work using modern React ecosystem and best practices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden group hover:scale-105 transition-all duration-300" style={{animationDelay: `${index*0.1}s`}}>
                <div
                  className={cn(
                    'h-48 relative overflow-hidden',
                    (project.title === 'Job-Tracker' || project.title === 'E-Commerce Website')
                      ? 'bg-cover bg-center bg-no-repeat'
                      : `bg-gradient-to-br ${project.gradient}`
                  )}
                  style={
                    project.title === 'Job-Tracker'
                      ? { backgroundImage: 'url(/Job%20tracker.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }
                      : project.title === 'E-Commerce Website'
                        ? { backgroundImage: 'url(/commerce.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }
                        : {}
                  }
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        onClick={() => {
                          if (project.title === 'Job-Tracker') {
                            window.open('https://project-jobtracker.netlify.app', '_blank');
                          } else if (project.title === 'E-Commerce Website') {
                            window.open('https://johnayodeji-e-commerce-clothing-app.netlify.app', '_blank');
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-white hover:bg-white/20"
                        onClick={() => {
                          if (project.title === 'Job-Tracker') {
                            window.open('https://github.com/BBlessed25/Job-Tracker', '_blank');
                          } else if (project.title === 'E-Commerce Website') {
                            window.open('https://github.com/BBlessed25/CLOTHING-E-COMMERCE-WEBSITE', '_blank');
                          }
                        }}
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">{t}</span>)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
