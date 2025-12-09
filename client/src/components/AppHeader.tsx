import { Star, Download, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import appLogo from "@assets/logo_1765263687347.png";

interface AppHeaderProps {
  title: string;
  developer: string;
  rating: number;
  reviewCount: number;
  downloads: string;
  ageRating: string;
  hasAds: boolean;
}

export default function AppHeader({
  title,
  developer,
  rating,
  reviewCount,
  downloads,
  ageRating,
  hasAds,
}: AppHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-4 md:gap-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
          <img src={appLogo} alt="DP Boss Trusts" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-medium text-foreground" data-testid="text-app-title">
            {title}
          </h1>
          <a 
            href="#" 
            className="text-[#1976D2] text-sm hover:underline"
            data-testid="link-developer"
          >
            {developer}
          </a>
          {hasAds && (
            <p className="text-xs text-muted-foreground mt-1">Contains ads</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 md:gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="font-medium text-foreground">{rating}</span>
            <Star className="w-4 h-4 fill-current text-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">{reviewCount} reviews</span>
        </div>
        
        <div className="h-6 w-px bg-border" />
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4 text-foreground" />
            <span className="font-medium text-foreground">{downloads}</span>
          </div>
          <span className="text-xs text-muted-foreground">Downloads</span>
        </div>
        
        <div className="h-6 w-px bg-border" />
        
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="text-xs font-medium">
            {ageRating}
          </Badge>
          <span className="text-xs text-muted-foreground mt-1">Rated for {ageRating}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <Button 
          className="flex-1 min-w-[120px] bg-[#01875f] hover:bg-[#016d4d] text-white"
          data-testid="button-install"
          asChild
        >
          <a href="/dpboss.apk" download="DPBOSS.apk">
            Install
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          data-testid="button-share"
        >
          <Share2 className="w-4 h-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          data-testid="button-wishlist"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
