import React from 'react';
import Navbar from '../Home/Navigation/Navbar';
import FooterSection from '../Home/Sections/FooterSection';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Documentation',
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      items: [
        { title: 'Getting Started Guide', type: 'PDF' },
        { title: 'API Documentation', type: 'Doc' },
        { title: 'Best Practices', type: 'PDF' }
      ]
    },
    {
      category: 'Video Tutorials',
      icon: <Video className="w-8 h-8 text-green-500" />,
      items: [
        { title: 'Platform Overview', type: 'Video' },
        { title: 'Advanced Features', type: 'Video' },
        { title: 'Admin Training', type: 'Video' }
      ]
    },
    {
      category: 'Templates',
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      items: [
        { title: 'Quality Report Template', type: 'Template' },
        { title: 'Audit Checklist', type: 'Template' },
        { title: 'Process Documentation', type: 'Template' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resources & Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to get the most out of QI Platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold ml-4">{section.category}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="text-sm text-gray-600">{item.type}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ResourcesPage;