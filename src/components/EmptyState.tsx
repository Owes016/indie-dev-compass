
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: {
    label: string;
    href: string;
  };
};

const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center border border-dashed border-white/10 rounded-lg bg-secondary/30">
      {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      
      {action && (
        <Button asChild>
          <Link to={action.href} className="inline-flex items-center">
            <PlusIcon className="mr-2 h-4 w-4" />
            {action.label}
          </Link>
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
