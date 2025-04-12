
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type Breadcrumb = {
  label: string;
  href?: string;
};

type LayoutHeaderProps = {
  title: string;
  breadcrumbs?: Breadcrumb[];
  action?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
};

const LayoutHeader = ({ title, breadcrumbs = [], action }: LayoutHeaderProps) => {
  return (
    <div className="mb-8">
      {breadcrumbs.length > 0 && (
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Link to="/" className="hover:text-white transition-colors">
            <HomeIcon size={14} />
          </Link>
          
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <ChevronRightIcon size={14} className="mx-1" />
              {crumb.href ? (
                <Link 
                  to={crumb.href} 
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
        
        {action && (
          <Button asChild>
            <Link to={action.href} className="inline-flex items-center">
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default LayoutHeader;
