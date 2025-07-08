import React from 'react';
import { Code, Palette, Database, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Python', 'Java', 'SQL'],
      color: 'bg-blue-500'
    },
    {
      title: 'Design & Web',
      icon: <Palette className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'Figma', 'UI/UX Design'],
      color: 'bg-purple-500'
    },
    {
      title: 'AI & Data Science',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'Decision Trees', 'Linear Regression', 'Clustering'],
      color: 'bg-green-500'
    },
    {
      title: 'Tools & Technologies',
      icon: <Database className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Data Analysis', 'Problem Solving'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating innovative solutions across design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;