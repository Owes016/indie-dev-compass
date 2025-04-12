
import { cn } from "@/lib/utils";
import { Technology } from "@/types";

type TechBadgeProps = {
  tech: Technology;
  className?: string;
};

const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <span 
      className={cn(
        "px-2 py-1 text-xs font-medium rounded-full border border-white/10",
        className
      )}
      style={{
        backgroundColor: `${tech.color}20`,
        color: tech.color,
        borderColor: `${tech.color}50`
      }}
    >
      {tech.name}
    </span>
  );
};

export default TechBadge;
