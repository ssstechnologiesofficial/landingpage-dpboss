import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface AboutSectionProps {
  description: string;
  updatedDate: string;
  category: string;
}

export default function AboutSection({
  description,
  updatedDate,
  category,
}: AboutSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground flex items-center justify-between gap-2">
        About this app
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </h2>

      <div>
        <p
          className={`text-sm text-muted-foreground leading-relaxed ${
            !expanded ? "line-clamp-3" : ""
          }`}
          data-testid="text-description"
        >
          {description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-[#1976D2] mt-2 hover:underline"
          data-testid="button-see-more"
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>

      <div className="flex items-center gap-3 flex-wrap pt-2">
        <div className="text-xs text-muted-foreground">
          Updated on <span className="text-foreground">{updatedDate}</span>
        </div>
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
      </div>
    </div>
  );
}
