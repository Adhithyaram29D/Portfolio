import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const Internship = () => {
  const internships = [
    {
      company: 'Arjun Vision Tech Solutions',
      role: 'Machine Learning Intern',
      description: 'Gained hands-on experience in artificial intelligence and machine learning technologies.',
      achievements: [
        'Worked on Decision Trees, Linear and Logistic Regression, and Random Forest algorithms',
        'Applied clustering techniques for unsupervised learning and data grouping',
        'Gained practical experience in AI through hands-on projects and real-world applications',
        'Developed skills in data preprocessing and model evaluation'
      ],
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'AI Projects']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical experience in machine learning and AI development
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{internship.company}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{internship.role}</p>
                  <p className="text-gray-700 mb-6">{internship.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;