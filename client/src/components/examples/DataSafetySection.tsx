import DataSafetySection from "../DataSafetySection";

export default function DataSafetySectionExample() {
  // todo: remove mock functionality
  const items = [
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

  return <DataSafetySection items={items} />;
}
