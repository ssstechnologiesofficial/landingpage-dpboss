import PageHeader from "@/components/PageHeader";
import AppHeader from "@/components/AppHeader";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import AboutSection from "@/components/AboutSection";
import DataSafetySection from "@/components/DataSafetySection";
import RatingsSection from "@/components/RatingsSection";
import ReviewCard from "@/components/ReviewCard";
import { Separator } from "@/components/ui/separator";

// todo: remove mock functionality
const appData = {
  title: "DP BOSS TRUSTS",
  developer: "Dp Boss",
  rating: 4.7,
  reviewCount: 138,
  downloads: "100K+",
  ageRating: "18+",
  hasAds: true,
};

const screenshots = [
  "screenshot1.png",
  "screenshot2.png",
  "screenshot3.png",
  "screenshot4.png",
  "screenshot5.png",
];

const description = `For the Fastest and Accurate results of markets and bazar Download Our App

DP Boss Trusts is Online Matka App! It provides all Matka results, including Kalyan, Time Bazar, Milan Day, Milan Night, Rajdhani Day, Rajdhani Night and many more. Get live updates, panel charts, and Jodi charts all in one place. The app is designed to be fast, reliable, and easy to use.`;

const dataSafetyItems = [
  {
    icon: "share" as const,
    title: "No data shared with third parties",
    learnMoreText: "Learn more about how developers declare sharing",
  },
  {
    icon: "collect" as const,
    title: "No data collected",
    learnMoreText: "Learn more about how developers declare collection",
  },
  {
    icon: "encrypt" as const,
    title: "Data is encrypted in transit",
  },
  {
    icon: "delete" as const,
    title: "You can request that data be deleted",
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

const reviews = [
  {
    id: "1",
    userName: "Rajesh Kumar",
    userInitials: "RK",
    avatarColor: "#4285f4",
    date: "November 15, 2025",
    rating: 5,
    review:
      "Best app for matka results. Very accurate and fast updates. Highly recommended!",
    helpfulCount: 45,
  },
  {
    id: "2",
    userName: "Amit Sharma",
    userInitials: "AS",
    avatarColor: "#ea4335",
    date: "October 22, 2025",
    rating: 5,
    review: "Fastest results in the market. Great app!",
    helpfulCount: 32,
  },
  {
    id: "3",
    userName: "Priya Patel",
    userInitials: "PP",
    avatarColor: "#fbbc05",
    date: "September 10, 2025",
    rating: 3,
    review: "Good app but sometimes slow to load",
    helpfulCount: 12,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <AppHeader {...appData} />

        <Separator />

        <ScreenshotGallery screenshots={screenshots} />

        <Separator />

        <AboutSection
          description={description}
          updatedDate="Oct 28, 2025"
          category="Entertainment"
        />

        <Separator />

        <DataSafetySection items={dataSafetyItems} />

        <Separator />

        <RatingsSection
          rating={appData.rating}
          reviewCount={appData.reviewCount}
          distribution={ratingDistribution}
        />

        <div className="divide-y divide-border">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        <footer className="py-6 text-center">
          <a
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-made-with"
          >
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            Made with Emergent
          </a>
        </footer>
      </main>
    </div>
  );
}
