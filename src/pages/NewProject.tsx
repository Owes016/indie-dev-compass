
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import LayoutHeader from "@/components/LayoutHeader";
import { ProjectStatus } from "@/types";
import { technologies } from "@/data/mockData";
import { Check, X } from "lucide-react";
import TechBadge from "@/components/TechBadge";
import { toast } from "@/components/ui/use-toast";

const statusOptions: { value: ProjectStatus; label: string }[] = [
  { value: "planning", label: "Planning" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "on-hold", label: "On Hold" },
  { value: "archived", label: "Archived" },
];

const NewProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "planning" as ProjectStatus,
    githubUrl: "",
    deploymentUrl: "",
    startDate: "",
    targetCompletionDate: "",
    selectedTechnologies: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: ProjectStatus) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const toggleTechnology = (techId: string) => {
    setFormData((prev) => {
      const selected = prev.selectedTechnologies;
      if (selected.includes(techId)) {
        return {
          ...prev,
          selectedTechnologies: selected.filter((id) => id !== techId),
        };
      } else {
        return { ...prev, selectedTechnologies: [...selected, techId] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Project name is required",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would save the project to the database here
    toast({
      title: "Project created successfully",
      description: "Your project has been created.",
    });
    
    // Redirect to the dashboard after a short delay
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Layout>
      <LayoutHeader
        title="Create New Project"
        breadcrumbs={[
          { label: "Projects", href: "/" },
          { label: "New Project" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit}>
          <Card className="border border-white/10 shadow-md glass-card mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Project Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="My Awesome Project"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="A brief description of your project"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="status"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Status
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(val) => handleStatusChange(val as ProjectStatus)}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="githubUrl"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      GitHub Repository
                    </label>
                    <Input
                      id="githubUrl"
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/project"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="deploymentUrl"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Deployment URL
                    </label>
                    <Input
                      id="deploymentUrl"
                      name="deploymentUrl"
                      value={formData.deploymentUrl}
                      onChange={handleInputChange}
                      placeholder="https://myproject.vercel.app"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="startDate"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Start Date
                    </label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="targetCompletionDate"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Target Completion Date
                    </label>
                    <Input
                      id="targetCompletionDate"
                      name="targetCompletionDate"
                      type="date"
                      value={formData.targetCompletionDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Technologies
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => toggleTechnology(tech.id)}
                        className={`px-2 py-1 text-xs rounded-full border flex items-center gap-1 transition-colors ${
                          formData.selectedTechnologies.includes(tech.id)
                            ? 'border-white/20 bg-accent/30'
                            : 'border-white/10 bg-secondary hover:bg-secondary/70'
                        }`}
                      >
                        {tech.name}
                        {formData.selectedTechnologies.includes(tech.id) ? (
                          <X size={12} className="ml-1" />
                        ) : (
                          <Check size={12} className="ml-1 opacity-0 group-hover:opacity-100" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" asChild>
              <Link to="/">Cancel</Link>
            </Button>
            <Button type="submit">Create Project</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewProject;
