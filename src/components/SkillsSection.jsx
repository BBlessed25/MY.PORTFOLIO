import { Card } from './UI';
import { cn } from '../utils/cn';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

export const SkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => { if (isVisible && !animatedSkills) setTimeout(()=>setAnimatedSkills(true),300); }, [isVisible, animatedSkills]);

  const skillCategories = [
    { title:'Frontend Frameworks', icon:<svg className="w-16 h-16 mx-auto" height="512pt" viewBox="0 -28 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" id="fi_1172027"><path d="m383.5 6.78125c-26.699219-15.300781-64.800781-4.5-107.402344 30.296875-6.597656 5.699219-13.5 11.699219-20.097656 18.300781-32.101562 30.898438-63.601562 72.601563-90.902344 119.699219-61.796875 107.101563-95.695312 239.101563-36.597656 273.300781 7.800781 4.5 16.800781 6.898438 26.699219 6.898438 22.800781 0 50.699219-12.597656 80.699219-37.199219 6.601562-5.699219 13.5-11.699219 20.101562-18.300781 32.097656-30.898438 63.597656-72.597656 90.898438-119.699219 61.800781-107.097656 95.699218-239.097656 36.601562-273.296875zm-62.402344 258.300781c-19.796875 34.199219-41.996094 65.398438-65.097656 91.199219-12.898438 14.699219-26.101562 27.597656-39.300781 38.398438-31.199219 25.800781-58.5 36.300781-73.199219 27.902343-30.601562-17.703125-16.800781-120.902343 47.402344-232.5 19.796875-34.203125 41.996094-65.402343 65.097656-91.203125 12.898438-14.699218 26.101562-27.597656 39.300781-38.398437 24-19.800781 45.898438-30.601563 61.199219-30.601563 4.5 0 8.699219.902344 12 2.703125 30.601562 17.699219 16.800781 120.898438-47.402344 232.5zm0 0" fill="#ff9f00"></path><path d="m346.902344 280.082031c-27.300782 47.097657-58.800782 88.796875-90.902344 119.699219v-43.5c23.101562-25.800781 45.300781-57 65.097656-91.199219 64.203125-111.601562 78.003906-214.800781 47.402344-232.5-3.300781-1.800781-7.5-2.703125-12-2.703125-15.300781 0-37.199219 10.800782-61.199219 30.601563-13.199219 10.800781-26.402343 23.699219-39.300781 38.398437v-43.5c6.597656-6.597656 13.5-12.597656 20.097656-18.300781 42.601563-34.796875 80.703125-45.597656 107.402344-30.296875 59.097656 34.199219 25.199219 166.199219-36.597656 273.300781zm0 0" fill="#ff7816"></path><path d="m346.902344 175.082031c-27.300782-47.101562-58.800782-88.800781-90.902344-119.703125-6.597656-6.597656-13.5-12.597656-20.097656-18.300781-42.601563-34.796875-80.703125-45.597656-107.402344-30.296875-59.097656 34.199219-25.199219 166.199219 36.597656 273.300781 27.300782 47.097657 58.800782 88.796875 90.902344 119.699219 6.597656 6.597656 13.5 12.597656 20.097656 18.296875 30 24.601563 57.902344 37.203125 80.703125 37.203125 9.898438 0 18.898438-2.402344 26.699219-6.902344 59.097656-34.199218 25.199219-166.199218-36.597656-273.296875zm21.597656 247.5c-14.699219 8.398438-42-2.101562-73.199219-27.902343-13.199219-10.800782-26.402343-23.699219-39.300781-38.398438-23.101562-25.800781-45.300781-57-65.097656-91.199219-64.203125-111.601562-78.003906-214.800781-47.402344-232.5 3.300781-1.800781 7.5-2.703125 12-2.703125 15.300781 0 37.199219 10.800782 61.199219 30.601563 13.199219 10.800781 26.402343 23.699219 39.300781 38.398437 23.101562 25.800782 45.300781 57 65.097656 91.203125 64.203125 111.597657 78.003906 214.796875 47.402344 232.5zm0 0" fill="#fdbf00"></path><path d="m256 122.582031c-123.601562 0-256 36.898438-256 105 0 68.097657 132.398438 105 256 105s256-36.902343 256-105c0-68.101562-132.398438-105-256-105zm0 180c-128.699219 0-226-39.601562-226-75 0-35.402343 97.300781-75 226-75s226 39.597657 226 75c0 35.398438-97.300781 75-226 75zm0 0" fill="#ffd400"></path><path d="m256 182.582031c-24.902344 0-45 20.097657-45 45 0 24.898438 20.097656 45 45 45s45-20.101562 45-45c0-24.902343-20.097656-45-45-45zm0 0" fill="#ff7816"></path><path d="m301 227.582031c0 24.898438-20.097656 45-45 45v-90c24.902344 0 45 20.097657 45 45zm0 0" fill="#f03800"></path><path d="m383.5 448.378906c-7.800781 4.5-16.800781 6.898438-26.699219 6.898438-22.800781 0-50.699219-12.597656-80.699219-37.199219-6.601562-5.699219-13.5-11.699219-20.101562-18.300781v-43.5c12.902344 14.703125 26.101562 27.601562 39.300781 38.402344 31.199219 25.800781 58.5 36.300781 73.199219 27.898437 30.601562-17.699219 16.800781-120.898437-47.398438-232.5-19.800781-34.199219-42-65.398437-65.101562-91.199219v-43.5c32.101562 30.902344 63.601562 72.601563 90.902344 119.703125 61.796875 107.097657 95.695312 239.097657 36.597656 273.296875zm0 0" fill="#ff9f00"></path><path d="m512 227.582031c0 68.097657-132.398438 105-256 105v-30c128.699219 0 226-39.601562 226-75 0-35.402343-97.300781-75-226-75v-30c123.601562 0 256 36.898438 256 105zm0 0" fill="#fdbf00"></path></svg>, skills:[
      { name:'React', level:95, color:'from-amber-500 to-orange-500' },
      { name:'Next.js', level:90, color:'from-amber-700 to-orange-800' },
      { name:'Vue.js', level:85, color:'from-yellow-500 to-amber-600' },
      { name:'JavaScript', level:92, color:'from-orange-600 to-red-700' },
    ]},
    { title:'Styling & Design', icon:<svg className="w-16 h-16 mx-auto" id="fi_12035023" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m308.365 52.365c-55.706 0-100.865 45.158-100.865 100.864v9.393c0 12.207-9.896 22.104-22.104 22.104h-102.555c-45.752 0-82.841 37.089-82.841 82.841v22.838c0 93.463 75.767 169.23 169.23 169.23h139.135c112.465 0 203.635-91.17 203.635-203.635 0-112.465-91.17-203.635-203.635-203.635zm-115.376 228.56c0 17.732-14.374 32.106-32.106 32.106h-61.723c-17.732 0-32.106-14.374-32.106-32.106 0-17.732 14.374-32.106 32.106-32.106h61.723c17.731 0 32.106 14.375 32.106 32.106z" fill="#be7c49"></path><path d="m308.365 52.365c-19.176 0-37.101 5.352-52.365 14.642v392.629h52.365c112.465-.001 203.635-91.171 203.635-203.636 0-112.465-91.17-203.635-203.635-203.635z" fill="#a45c34"></path><circle cx="256" cy="370.539" fill="#ffe49f" r="43.261"></circle><circle cx="376.364" cy="342.311" fill="#8fbff9" r="43.261"></circle><circle cx="424.698" cy="234.217" fill="#25bea6" r="43.261"></circle><circle cx="329.582" cy="147.978" fill="#ff424a" r="43.261"></circle><path d="m299.262 370.539c0-23.893-19.369-43.261-43.261-43.261v86.523c23.892 0 43.261-19.369 43.261-43.262z" fill="#ffd16c"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>, skills:[
      { name:'Tailwind CSS', level:98, color:'from-yellow-500 to-amber-500' },
      { name:'CSS3/SCSS', level:95, color:'from-amber-500 to-orange-600' },
      { name:'Styled Components', level:88, color:'from-orange-500 to-red-500' },
      { name:'Framer Motion', level:85, color:'from-amber-600 to-yellow-700' },
    ]},
    { title:'Tools & Ecosystem', icon:<svg className="w-16 h-16 mx-auto" id="fi_8316856" height="512" viewBox="0 0 60 60" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m1 18v-14a3 3 0 0 1 3-3h14.19a5 5 0 0 1 3.2 1.159l3.218 2.682a5 5 0 0 0 3.202 1.159h28.19a3 3 0 0 1 3 3v9z" fill="#e58b0a"></path><path d="m6 16v-3a3 3 0 0 1 3-3h42a3 3 0 0 1 3 3v3z" fill="#fff"></path><rect fill="#ffb90b" height="38" rx="3" width="58" x="1" y="15"></rect><path d="m47.382 35.336a9 9 0 0 1 -10.044 1.849c-2.928 3.868-12.532 16.482-16.1 20.061a6 6 0 0 1 -8.484-8.476c3.578-3.579 16.21-13.195 20.067-16.113a9.137 9.137 0 0 1 1.639-9.846 8.947 8.947 0 0 1 9.14-2.419.862.862 0 0 1 .33 1.429l-4.323 4.329a2 2 0 0 0 0 2.828l1.409 1.41a2 2 0 0 0 2.828 0l4.327-4.328a.869.869 0 0 1 1.439.339 8.923 8.923 0 0 1 -2.228 8.937z" fill="#394263"></path><g fill="#232944"><circle cx="16.996" cy="53.008" r="1.995"></circle><path d="m22 49a1 1 0 0 1 -.707-1.707l8-8a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1 -.707.293z"></path></g></svg>, skills:[
      { name:'Webpack/Vite', level:87, color:'from-amber-600 to-orange-700' },
      { name:'Jest/Testing Library', level:90, color:'from-orange-500 to-red-600' },
      { name:'Storybook', level:85, color:'from-yellow-600 to-orange-600' },
      { name:'Git/GitHub', level:93, color:'from-amber-700 to-yellow-800' },
    ]},
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={cn('space-y-16', isVisible && 'animate-slide-up')}>
          <div className="text-center">
            <h2 className="text-responsive-lg font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Modern React ecosystem and frontend technologies I use to build exceptional experiences</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, ci) => (
              <Card key={category.title} className="p-8 hover:scale-105 transition-all duration-300" style={{animationDelay: `${ci*0.1}s`}}>
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className={cn('h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out', skill.color)} style={{ width: animatedSkills ? `${skill.level}%` : '0%', transitionDelay: `${(ci*3+si)*0.1}s` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
