import { Card } from './UI';
import { cn } from '../utils/cn';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const AboutSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={cn('space-y-16', isVisible && 'animate-slide-up')}>
          <div className="text-center">
            <h2 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Frontend developer with a passion for creating exceptional digital experiences</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4"><svg className="w-16 h-16 mx-auto" id="fi_12035023" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m308.365 52.365c-55.706 0-100.865 45.158-100.865 100.864v9.393c0 12.207-9.896 22.104-22.104 22.104h-102.555c-45.752 0-82.841 37.089-82.841 82.841v22.838c0 93.463 75.767 169.23 169.23 169.23h139.135c112.465 0 203.635-91.17 203.635-203.635 0-112.465-91.17-203.635-203.635-203.635zm-115.376 228.56c0 17.732-14.374 32.106-32.106 32.106h-61.723c-17.732 0-32.106-14.374-32.106-32.106 0-17.732 14.374-32.106 32.106-32.106h61.723c17.731 0 32.106 14.375 32.106 32.106z" fill="#be7c49"></path><path d="m308.365 52.365c-19.176 0-37.101 5.352-52.365 14.642v392.629h52.365c112.465-.001 203.635-91.171 203.635-203.636 0-112.465-91.17-203.635-203.635-203.635z" fill="#a45c34"></path><circle cx="256" cy="370.539" fill="#ffe49f" r="43.261"></circle><circle cx="376.364" cy="342.311" fill="#8fbff9" r="43.261"></circle><circle cx="424.698" cy="234.217" fill="#25bea6" r="43.261"></circle><circle cx="329.582" cy="147.978" fill="#ff424a" r="43.261"></circle><path d="m299.262 370.539c0-23.893-19.369-43.261-43.261-43.261v86.523c23.892 0 43.261-19.369 43.261-43.262z" fill="#ffd16c"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Design-Driven Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">I bridge the gap between design and development, ensuring pixel-perfect implementations with smooth interactions.</p>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>I specialize in the React ecosystem, creating scalable applications with modern tools like TypeScript, Next.js, and Tailwind CSS.</p>
                <p>I'm passionate about performance optimization, accessibility, and creating delightful user experiences. My approach combines technical excellence with creative problem-solving.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
