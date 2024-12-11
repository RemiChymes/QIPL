import React from 'react';
import { TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Quality Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    status: 'online'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Process Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    status: 'busy'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Data Analyst',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    status: 'offline'
  }
];

const TeamCollaboration: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Team Members</h3>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                  ${member.status === 'online' ? 'bg-green-500' :
                    member.status === 'busy' ? 'bg-red-500' : 'bg-gray-500'}`}
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;