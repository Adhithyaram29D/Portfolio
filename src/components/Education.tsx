import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Saveetha Engineering College',
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      period: '2022–2026',
      grade: 'CGPA: 8.80',
      description: 'Specializing in AI and Data Science with strong foundation in machine learning, data analysis, and product design.'
    },
    {
      institution: 'Sethu Bhaskara Matric Hr. Sec. School',
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2022',
      grade: '94%',
      description: 'Completed with distinction in Mathematics and Science subjects.'
    },
    {
      institution: 'Sethu Bhaskara Matric Hr. Sec. School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      period: '2020',
      grade: '73%',
      description: 'Foundation in core subjects with focus on analytical thinking.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic journey building strong foundations in technology and design
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{edu.institution}</h3>
                    <span className="text-blue-600 font-semibold">{edu.period}</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-2">{edu.degree}</p>
                  <p className="text-gray-600 mb-3">{edu.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">{edu.grade}</span>
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

export default Education;