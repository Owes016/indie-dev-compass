
export type ProjectStatus = 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'archived';

export type Technology = {
  id: string;
  name: string;
  color?: string;
};

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  createdAt: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  githubUrl?: string;
  deploymentUrl?: string;
  startDate?: string;
  targetCompletionDate?: string;
  tasks: Task[];
  technologies: Technology[];
  createdAt: string;
  updatedAt: string;
};
