import React from 'react';
import { ClipboardCheck, GitBranch, BarChart2, RefreshCw } from 'lucide-react';
import { QualityFramework } from '../../types';

const frameworks: QualityFramework[] = [
  {
    id: 'six-sigma',
    name: 'Six Sigma',
    description: 'Data-driven methodology for eliminating defects and reducing variability',
    icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
    templates: [
      { name: 'DMAIC Project Template', description: 'Define, Measure, Analyze, Improve, Control' },
      { name: 'Process Capability Analysis', description: 'Statistical process control template' }
    ]
  },
  {
    id: 'lean',
    name: 'Lean Management',
    description: 'Focus on minimizing waste while maximizing value',
    icon: <RefreshCw className="w-6 h-6 text-green-500" />,
    templates: [
      { name: 'Value Stream Mapping', description: 'Visualize and optimize process flow' },
      { name: '5S Workplace Organization', description: 'Sort, Set in order, Shine, Standardize, Sustain' }
    ]
  }
];

const FrameworkTemplates: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {frameworks.map((framework) => (
        <div key={framework.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              {framework.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{framework.name}</h3>
              <p className="text-gray-600 mt-1">{framework.description}</p>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            {framework.templates.map((template, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-800">{template.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Use Template →
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrameworkTemplates;