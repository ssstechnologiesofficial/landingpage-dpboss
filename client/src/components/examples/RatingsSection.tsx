import RatingsSection from "../RatingsSection";

export default function RatingsSectionExample() {
  // todo: remove mock functionality
  const distribution = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <RatingsSection rating={4.7} reviewCount={138} distribution={distribution} />
  );
}
