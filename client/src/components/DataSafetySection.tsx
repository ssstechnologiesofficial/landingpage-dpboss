import { Shield, Lock, Trash2, ChevronRight } from "lucide-react";

interface DataSafetyItem {
  icon: "share" | "collect" | "encrypt" | "delete";
  title: string;
  learnMoreText?: string;
}

interface DataSafetySectionProps {
  items: DataSafetyItem[];
}

const iconMap = {
  share: Shield,
  collect: Shield,
  encrypt: Lock,
  delete: Trash2,
};

export default function DataSafetySection({ items }: DataSafetySectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground flex items-center justify-between gap-2">
        Data safety
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </h2>

      <p className="text-sm text-muted-foreground">
        Safety starts with understanding how developers collect and share your
        data. Data privacy and security practices may vary based on your use,
        region, and age. The developer provided this information and may update
        it over time.
      </p>

      <div className="bg-muted/50 rounded-lg p-4 space-y-4">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={index} className="flex items-start gap-4">
              <Icon className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-foreground">{item.title}</p>
                {item.learnMoreText && (
                  <a
                    href="#"
                    className="text-sm text-[#1976D2] hover:underline"
                    data-testid={`link-learn-more-${index}`}
                  >
                    {item.learnMoreText}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="text-sm text-[#1976D2] hover:underline"
        data-testid="button-see-details"
      >
        See details
      </button>
    </div>
  );
}
