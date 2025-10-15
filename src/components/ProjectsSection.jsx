import { Card, Button } from './UI';
import { cn } from '../utils/cn';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ProjectsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    { title: 'Job-Tracker', description: 'A modern, responsive React app for managing a job search. Users can sign up / log in, then add, edit, and track applications across stages (e.g., wishlist → applied → interviewing → offer → rejected). It includes a dashboard, a Kanban-style job board, and profile/settings—all with smooth page transitions and clean, mobile-first UI.', tech: ['React','Next.js','JavaScript','Tailwind','Axios'], gradient: 'from-amber-500 to-orange-600', icon: '🛍️' },
    { title: 'Analytics Dashboard', description: 'Real-time data visualization dashboard built with React and D3.js. Includes interactive charts, custom date ranges, and export functionality.', tech: ['React','D3.js','Chart.js','Redux','Material-UI'], gradient: 'from-yellow-600 to-amber-700', icon: '📊' },
    { title: 'Design System', description: 'Comprehensive design system with React components, Storybook documentation, and automated testing. Used across multiple products.', tech: ['React','Storybook','Jest','Chromatic','Figma'], gradient: 'from-orange-500 to-red-600', icon: <svg className="w-6 h-6" id="fi_12035023" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m308.365 52.365c-55.706 0-100.865 45.158-100.865 100.864v9.393c0 12.207-9.896 22.104-22.104 22.104h-102.555c-45.752 0-82.841 37.089-82.841 82.841v22.838c0 93.463 75.767 169.23 169.23 169.23h139.135c112.465 0 203.635-91.17 203.635-203.635 0-112.465-91.17-203.635-203.635-203.635zm-115.376 228.56c0 17.732-14.374 32.106-32.106 32.106h-61.723c-17.732 0-32.106-14.374-32.106-32.106 0-17.732 14.374-32.106 32.106-32.106h61.723c17.731 0 32.106 14.375 32.106 32.106z" fill="#be7c49"></path><path d="m308.365 52.365c-19.176 0-37.101 5.352-52.365 14.642v392.629h52.365c112.465-.001 203.635-91.171 203.635-203.636 0-112.465-91.17-203.635-203.635-203.635z" fill="#a45c34"></path><circle cx="256" cy="370.539" fill="#ffe49f" r="43.261"></circle><circle cx="376.364" cy="342.311" fill="#8fbff9" r="43.261"></circle><circle cx="424.698" cy="234.217" fill="#25bea6" r="43.261"></circle><circle cx="329.582" cy="147.978" fill="#ff424a" r="43.261"></circle><path d="m299.262 370.539c0-23.893-19.369-43.261-43.261-43.261v86.523c23.892 0 43.261-19.369 43.261-43.262z" fill="#ffd16c"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden group hover:scale-105 transition-all duration-300" style={{animationDelay: `${index*0.1}s`}}>
                <div className={cn('h-48 bg-gradient-to-br', project.gradient, 'relative overflow-hidden')}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="secondary">Live Demo</Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-white hover:bg-white/20"
                        onClick={() => {
                          if (project.title === 'Job-Tracker') {
                            window.open('https://github.com/BBlessed25/Job-Tracker', '_blank');
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
