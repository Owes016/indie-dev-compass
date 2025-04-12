
import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/types";

type StatusBadgeProps = {
  status: ProjectStatus;
  className?: string;
};

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  'planning': { 
    label: 'Planning',
    className: 'bg-blue-600/20 text-blue-400 border-blue-800/50'
  },
  'in-progress': { 
    label: 'In Progress',
    className: 'bg-purple-600/20 text-purple-400 border-purple-800/50'
  },
  'completed': { 
    label: 'Completed',
    className: 'bg-green-600/20 text-green-400 border-green-800/50'
  },
  'on-hold': { 
    label: 'On Hold',
    className: 'bg-yellow-600/20 text-yellow-400 border-yellow-800/50'
  },
  'archived': { 
    label: 'Archived',
    className: 'bg-gray-600/20 text-gray-400 border-gray-800/50'
  }
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const { label, className: badgeClass } = statusConfig[status];
  
  return (
    <span className={cn(
      "px-2.5 py-1 text-xs font-medium rounded-full border", 
      badgeClass,
      className
    )}>
      {label}
    </span>
  );
};

export default StatusBadge;
