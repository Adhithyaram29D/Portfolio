import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'adhithyaram002@gmail.com',
      href: 'mailto:adhithyaram002@gmail.com',
      icon: <Mail className="w-8 h-8" />,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      name: 'LinkedIn',
      value: 'adhithyaram-d',
      href: 'https://linkedin.com/in/adhithyaram-d',
      icon: <Linkedin className="w-8 h-8" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      value: 'Adhithyaram29D',
      href: 'https://github.com/Adhithyaram29D',
      icon: <Github className="w-8 h-8" />,
      color: 'bg-gray-800 hover:bg-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about design and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110`}>
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{link.name}</h3>
              <p className="text-gray-600 break-all">{link.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start a conversation?</h3>
            <p className="text-gray-600 mb-6">
              Whether you're looking for a designer, developer, or just want to say hello, I'd love to hear from you.
            </p>
            <a 
              href="mailto:adhithyaram002@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;