
import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import TechBadge from "./TechBadge";
import { CalendarClock, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    id,
    name,
    description,
    status,
    githubUrl,
    deploymentUrl,
    technologies,
    tasks
  } = project;

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Card className="overflow-hidden border border-white/10 h-full glass-card hover:bg-secondary/80 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Link 
            to={`/project/${id}`}
            className="text-xl font-semibold hover:text-primary transition-colors"
          >
            {name}
          </Link>
          <StatusBadge status={status} />
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
          <CalendarClock size={14} />
          <span>{completedTasks} of {totalTasks} tasks completed</span>
        </div>
        
        <div className="w-full bg-secondary rounded-full h-1.5 mb-5">
          <div 
            className="bg-primary h-1.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {technologies.slice(0, 3).map(tech => (
            <TechBadge key={tech.id} tech={tech} />
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-white/5 pt-3">
        <div className="flex items-center justify-start space-x-4 w-full">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {deploymentUrl && (
            <a 
              href={deploymentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
