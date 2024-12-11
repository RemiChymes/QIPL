import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { Project } from '../../types';
import { format } from 'date-fns';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Process Optimization - Manufacturing',
    framework: 'Six Sigma',
    progress: 75,
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    metrics: { completion: 75, quality: 92, efficiency: 88 }
  },
  {
    id: '2',
    name: 'Healthcare Quality Improvement',
    framework: 'Lean',
    progress: 45,
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-07-15',
    metrics: { completion: 45, quality: 87, efficiency: 82 }
  }
];

const ProjectList: React.FC = () => {
  return (
    <div className="space-y-4">
      {mockProjects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
              <span className="inline-block px-3 py-1 mt-2 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                {project.framework}
              </span>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${project.status === 'active' ? 'bg-green-100 text-green-800' : 
                project.status === 'completed' ? 'bg-gray-100 text-gray-800' : 
                'bg-yellow-100 text-yellow-800'}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>
          
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{format(new Date(project.startDate), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{format(new Date(project.endDate), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>{project.progress}% Complete</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;