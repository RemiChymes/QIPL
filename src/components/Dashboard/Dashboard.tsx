import React from 'react';
import Sidebar from '../Layout/Sidebar';
import Header from '../Layout/Header';
import MetricsOverview from './MetricsOverview';
import QualityMetrics from '../Analytics/QualityMetrics';
import TrendAnalysis from '../Analytics/TrendAnalysis';
import RecommendationEngine from '../Analytics/RecommendationEngine';
import ProjectList from '../Projects/ProjectList';
import TeamCollaboration from '../Team/TeamCollaboration';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Quality Management Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor and improve your quality metrics</p>
          </div>
          
          <MetricsOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <QualityMetrics />
            <TrendAnalysis />
          </div>
          
          <div className="mt-8">
            <RecommendationEngine />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <ProjectList />
            <TeamCollaboration />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;