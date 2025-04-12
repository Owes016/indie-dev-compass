
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "@/data/mockData";
import { Edit, ExternalLink, Github, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LayoutHeader from "@/components/LayoutHeader";
import StatusBadge from "@/components/StatusBadge";
import TechBadge from "@/components/TechBadge";
import Layout from "@/components/Layout";
import { Task } from "@/types";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>(project?.tasks || []);
  
  if (!project) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/">Back to Dashboard</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    
    const newTaskItem: Task = {
      id: `task-${Date.now()}`,
      title: newTask,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <Layout>
      <LayoutHeader 
        title={project.name}
        breadcrumbs={[
          { label: "Projects", href: "/" },
          { label: project.name }
        ]}
        action={{
          label: "Edit Project",
          href: `/project/${project.id}/edit`,
          icon: <Edit size={16} />,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-secondary/50 border border-white/10 rounded-lg p-6">
            <div className="mb-6">
              <StatusBadge status={project.status} className="mb-4" />
              
              <h2 className="text-xl font-medium mb-2">Description</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <TechBadge key={tech.id} tech={tech} />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Start Date</h3>
                <p>{project.startDate || "Not set"}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Target Completion</h3>
                <p>{project.targetCompletionDate || "Not set"}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">GitHub Repository</h3>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <Github size={16} className="mr-1" />
                    Repository
                  </a>
                ) : (
                  <p>Not set</p>
                )}
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Deployment URL</h3>
                {project.deploymentUrl ? (
                  <a
                    href={project.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    View Live
                  </a>
                ) : (
                  <p>Not deployed</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-secondary/50 border border-white/10 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Tasks</h2>
              <span className="text-sm text-muted-foreground">
                {completedTasks} of {tasks.length} completed
              </span>
            </div>
            
            <div className="w-full bg-secondary rounded-full h-2 mb-6">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="mb-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddTask();
                  }}
                />
                <Button onClick={handleAddTask} size="sm">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {tasks.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No tasks yet. Add your first task above.
                </p>
              ) : (
                tasks.map(task => (
                  <div 
                    key={task.id} 
                    className="flex items-start justify-between p-2 hover:bg-secondary/80 rounded-md group"
                  >
                    <div className="flex items-start gap-2">
                      <Checkbox 
                        id={task.id} 
                        checked={task.completed}
                        onCheckedChange={() => handleToggleTask(task.id)}
                        className="mt-1"
                      />
                      <label 
                        htmlFor={task.id}
                        className={`text-sm cursor-pointer ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                      >
                        {task.title}
                      </label>
                    </div>
                    <button 
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
