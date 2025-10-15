import { cn } from '../utils/cn';

export const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600',
    secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
  };
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };
  return (
    <button className={cn('font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus-ring', variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ glass = false, className = '', children, ...props }) => (
  <div className={cn('rounded-2xl transition-all duration-300', glass ? 'glass shadow-soft' : 'bg-white dark:bg-gray-800 shadow-medium hover:shadow-hard', className)} {...props}>
    {children}
  </div>
);
