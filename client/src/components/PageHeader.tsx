import { ArrowLeft, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          {title && (
            <span className="font-medium text-foreground truncate">{title}</span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" data-testid="button-search">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="button-menu">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
