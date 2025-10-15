import { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { cn } from '../utils/cn';

export const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/profile-image.jpeg" 
              alt="John Ayodeji" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent"></div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className={cn('px-4 py-2 rounded-lg transition-all duration-200 focus-ring',
                activeSection === id ? 'bg-gradient-to-r from-amber-600 to-yellow-700 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800')}>
                {label}
              </button>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-ring">
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navItems.map(({ id, label }) => (
              <button key={id} onClick={() => scrollToSection(id)} className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-ring">
                {label}
              </button>
            ))}
            <button onClick={toggleTheme} className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-ring">
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
