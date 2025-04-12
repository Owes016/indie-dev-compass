
import { Project, ProjectStatus, Technology } from '../types';

export const technologies: Technology[] = [
  { id: '1', name: 'React', color: '#61dafb' },
  { id: '2', name: 'Next.js', color: '#000000' },
  { id: '3', name: 'TypeScript', color: '#3178c6' },
  { id: '4', name: 'Node.js', color: '#68a063' },
  { id: '5', name: 'Tailwind CSS', color: '#38b2ac' },
  { id: '6', name: 'Supabase', color: '#3ecf8e' },
  { id: '7', name: 'PostgreSQL', color: '#336791' },
  { id: '8', name: 'Firebase', color: '#ffca28' },
  { id: '9', name: 'GraphQL', color: '#e535ab' },
  { id: '10', name: 'MongoDB', color: '#47a248' },
  { id: '11', name: 'Express', color: '#000000' },
  { id: '12', name: 'Prisma', color: '#2d3748' },
  { id: '13', name: 'Vercel', color: '#000000' },
  { id: '14', name: 'AWS', color: '#ff9900' },
  { id: '15', name: 'Docker', color: '#2496ed' },
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'DevHarbor',
    description: 'A developer portfolio platform with built-in analytics and customization options.',
    status: 'in-progress',
    githubUrl: 'https://github.com/username/devharbor',
    deploymentUrl: 'https://devharbor.vercel.app',
    startDate: '2023-10-15',
    targetCompletionDate: '2024-02-28',
    technologies: [
      technologies[0], // React
      technologies[1], // Next.js
      technologies[2], // TypeScript
      technologies[4], // Tailwind CSS
    ],
    tasks: [
      {
        id: 't1',
        title: 'Set up project structure and dependencies',
        completed: true,
        createdAt: '2023-10-15T10:30:00Z',
      },
      {
        id: 't2',
        title: 'Design responsive dashboard',
        completed: true,
        createdAt: '2023-10-18T14:00:00Z',
      },
      {
        id: 't3',
        title: 'Implement user authentication flow',
        completed: false,
        dueDate: '2024-01-25',
        createdAt: '2023-10-20T09:15:00Z',
      },
      {
        id: 't4',
        title: 'Create project showcase component',
        completed: false,
        dueDate: '2024-02-05',
        createdAt: '2023-10-25T16:45:00Z',
      },
    ],
    createdAt: '2023-10-15T09:00:00Z',
    updatedAt: '2024-01-10T11:30:00Z',
  },
  {
    id: '2',
    name: 'NomadNest',
    description: 'Remote work location finder and community for digital nomads.',
    status: 'planning',
    startDate: '2024-03-01',
    targetCompletionDate: '2024-06-30',
    technologies: [
      technologies[0], // React
      technologies[2], // TypeScript
      technologies[5], // Supabase
      technologies[4], // Tailwind CSS
    ],
    tasks: [
      {
        id: 't1',
        title: 'Research competitor platforms',
        completed: true,
        createdAt: '2024-01-05T10:00:00Z',
      },
      {
        id: 't2',
        title: 'Create wireframes for main user flows',
        completed: false,
        dueDate: '2024-01-20',
        createdAt: '2024-01-08T15:30:00Z',
      },
      {
        id: 't3',
        title: 'Define database schema',
        completed: false,
        dueDate: '2024-01-25',
        createdAt: '2024-01-12T11:20:00Z',
      },
    ],
    createdAt: '2024-01-05T09:00:00Z',
    updatedAt: '2024-01-12T11:20:00Z',
  },
  {
    id: '3',
    name: 'CodeCanvas',
    description: 'Interactive visual programming editor for teaching coding concepts.',
    status: 'completed',
    githubUrl: 'https://github.com/username/codecanvas',
    deploymentUrl: 'https://codecanvas.vercel.app',
    startDate: '2023-07-10',
    targetCompletionDate: '2023-11-30',
    technologies: [
      technologies[0], // React
      technologies[2], // TypeScript
      technologies[3], // Node.js
      technologies[12], // Vercel
    ],
    tasks: [
      {
        id: 't1',
        title: 'Design interactive code blocks',
        completed: true,
        createdAt: '2023-07-12T09:00:00Z',
      },
      {
        id: 't2',
        title: 'Implement syntax highlighting',
        completed: true,
        createdAt: '2023-08-05T14:20:00Z',
      },
      {
        id: 't3',
        title: 'Create tutorial mode with guided steps',
        completed: true,
        createdAt: '2023-09-10T11:00:00Z',
      },
      {
        id: 't4',
        title: 'Add sharing and export functionality',
        completed: true,
        createdAt: '2023-10-20T16:30:00Z',
      },
    ],
    createdAt: '2023-07-10T08:00:00Z',
    updatedAt: '2023-11-28T15:45:00Z',
  },
  {
    id: '4',
    name: 'HealthPulse',
    description: 'Wellness tracking application with habit formation and health metrics.',
    status: 'on-hold',
    githubUrl: 'https://github.com/username/healthpulse',
    startDate: '2023-09-01',
    technologies: [
      technologies[0], // React
      technologies[2], // TypeScript
      technologies[7], // Firebase
    ],
    tasks: [
      {
        id: 't1',
        title: 'Create user onboarding flow',
        completed: true,
        createdAt: '2023-09-05T10:00:00Z',
      },
      {
        id: 't2',
        title: 'Design habit tracking interface',
        completed: true,
        createdAt: '2023-09-15T13:40:00Z',
      },
      {
        id: 't3',
        title: 'Implement data visualization components',
        completed: false,
        createdAt: '2023-09-28T09:30:00Z',
      },
    ],
    createdAt: '2023-09-01T08:30:00Z',
    updatedAt: '2023-12-10T09:15:00Z',
  },
  {
    id: '5',
    name: 'MarketMosaic',
    description: 'AI-powered market research tool for independent businesses.',
    status: 'archived',
    startDate: '2023-05-15',
    targetCompletionDate: '2023-08-30',
    technologies: [
      technologies[0], // React
      technologies[2], // TypeScript
      technologies[10], // Express
      technologies[9], // MongoDB
    ],
    tasks: [
      {
        id: 't1',
        title: 'Research AI APIs for market analysis',
        completed: true,
        createdAt: '2023-05-18T11:00:00Z',
      },
      {
        id: 't2',
        title: 'Create data processing pipeline',
        completed: true,
        createdAt: '2023-06-10T09:30:00Z',
      },
      {
        id: 't3',
        title: 'Design dashboard UI',
        completed: true,
        createdAt: '2023-07-05T14:00:00Z',
      },
    ],
    createdAt: '2023-05-15T10:00:00Z',
    updatedAt: '2023-08-25T16:20:00Z',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};

export const getProjectsByStatus = (status?: ProjectStatus): Project[] => {
  if (!status) return mockProjects;
  return mockProjects.filter(project => project.status === status);
};
