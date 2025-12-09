import { useState } from "react";
import { Star, MoreVertical, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  id: string;
  userName: string;
  userInitials: string;
  avatarColor: string;
  date: string;
  rating: number;
  review: string;
  helpfulCount: number;
}

export default function ReviewCard({
  id,
  userName,
  userInitials,
  avatarColor,
  date,
  rating,
  review,
  helpfulCount,
}: ReviewCardProps) {
  const [votedHelpful, setVotedHelpful] = useState<boolean | null>(null);
  const [currentHelpfulCount, setCurrentHelpfulCount] = useState(helpfulCount);

  const handleVote = (helpful: boolean) => {
    if (votedHelpful === helpful) {
      setVotedHelpful(null);
      if (helpful) setCurrentHelpfulCount(helpfulCount);
    } else {
      if (votedHelpful === true && !helpful) {
        setCurrentHelpfulCount(helpfulCount);
      } else if (helpful) {
        setCurrentHelpfulCount(helpfulCount + 1);
      }
      setVotedHelpful(helpful);
    }
  };

  return (
    <div className="py-4" data-testid={`card-review-${id}`}>
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10">
          <AvatarFallback
            className="text-white text-sm font-medium"
            style={{ backgroundColor: avatarColor }}
          >
            {userInitials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-sm text-foreground" data-testid={`text-reviewer-${id}`}>
              {userName}
            </span>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= rating
                      ? "fill-[#01875f] text-[#01875f]"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>

          <p className="text-sm text-foreground mt-2 leading-relaxed">{review}</p>

          <div className="flex items-center gap-4 mt-3">
            <span className="text-xs text-muted-foreground">
              {currentHelpfulCount} people found this review helpful
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-muted-foreground">
              Did you find this helpful?
            </span>
            <Button
              variant={votedHelpful === true ? "secondary" : "outline"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => handleVote(true)}
              data-testid={`button-helpful-yes-${id}`}
            >
              Yes
            </Button>
            <Button
              variant={votedHelpful === false ? "secondary" : "outline"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => handleVote(false)}
              data-testid={`button-helpful-no-${id}`}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
