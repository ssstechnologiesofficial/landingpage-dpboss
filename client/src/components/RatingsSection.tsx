import { Star, ChevronRight } from "lucide-react";

interface RatingDistribution {
  stars: number;
  percentage: number;
}

interface RatingsSectionProps {
  rating: number;
  reviewCount: number;
  distribution: RatingDistribution[];
}

export default function RatingsSection({
  rating,
  reviewCount,
  distribution,
}: RatingsSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground flex items-center justify-between gap-2">
        Ratings and reviews
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </h2>

      <p className="text-xs text-muted-foreground">
        Ratings and reviews are verified
      </p>

      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-light text-foreground">{rating}</span>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= Math.floor(rating)
                    ? "fill-[#01875f] text-[#01875f]"
                    : star - 0.5 <= rating
                    ? "fill-[#01875f]/50 text-[#01875f]"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground mt-1">
            {reviewCount} reviews
          </span>
        </div>

        <div className="flex-1 space-y-1">
          {distribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground w-2">
                {item.stars}
              </span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#01875f] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
