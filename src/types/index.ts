export interface Project {
  id: string;
  name: string;
  framework: string;
  progress: number;
  status: 'active' | 'completed' | 'on-hold';
  startDate: string;
  endDate: string;
  metrics: {
    completion: number;
    quality: number;
    efficiency: number;
  };
}

export interface MetricCard {
  title: string;
  value: number;
  trend: number;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
}

export interface QualityFramework {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  templates: {
    name: string;
    description: string;
  }[];
}