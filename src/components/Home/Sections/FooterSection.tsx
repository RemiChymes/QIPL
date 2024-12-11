import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const FooterSection: React.FC = () => {
  const footerLinks = {
    features: ['Quality Control', 'HIPAA Compliance', 'Analytics', 'Team Management'],
    resources: ['Documentation', 'API Reference', 'Security', 'Support'],
    company: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold text-white">QI Platform</span>
            </div>
            <p className="text-sm">Secure, compliant quality management for healthcare excellence.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.features.map((link) => (
                <li key={link}>
                  <Link to={`/features/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <Link to={`/resources/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link to={`/company/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2024 QI Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;