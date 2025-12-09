import AppHeader from "../AppHeader";

export default function AppHeaderExample() {
  return (
    <AppHeader
      title="DP BOSS TRUSTS"
      developer="Dp Boss"
      rating={4.7}
      reviewCount={138}
      downloads="100K+"
      ageRating="18+"
      hasAds={true}
    />
  );
}
