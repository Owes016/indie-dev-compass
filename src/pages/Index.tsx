
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { getProjectsByStatus, mockProjects } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectStatus } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import LayoutHeader from "@/components/LayoutHeader";
import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";

const tabItems: { value: ProjectStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'planning', label: 'Planning' },
  { value: 'completed', label: 'Completed' },
  { value: 'on-hold', label: 'On Hold' },
  { value: 'archived', label: 'Archived' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<ProjectStatus | 'all'>('all');
  
  const filteredProjects = activeTab === 'all' 
    ? mockProjects
    : getProjectsByStatus(activeTab);

  return (
    <Layout>
      <LayoutHeader 
        title="Projects Dashboard" 
        action={{
          label: "New Project",
          href: "/new-project",
          icon: <PlusIcon size={16} />,
        }}
      />

      <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value as ProjectStatus | 'all')}>
        <TabsList className="mb-6">
          {tabItems.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabItems.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.value === activeTab && (
              <>
                {filteredProjects.length === 0 ? (
                  <EmptyState 
                    title="No projects found"
                    description={`You don't have any ${tab.value === 'all' ? '' : tab.value} projects yet.`}
                    action={{
                      label: "Create Project",
                      href: "/new-project",
                    }}
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
