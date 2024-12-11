import React from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Settings, 
  BarChart2, 
  Users,
  FileText,
  HelpCircle
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { icon: <ClipboardList className="w-5 h-5" />, label: 'Projects' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics' },
    { icon: <Users className="w-5 h-5" />, label: 'Team' },
    { icon: <FileText className="w-5 h-5" />, label: 'Reports' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help' },
  ];

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-md">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Quality Manager</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;