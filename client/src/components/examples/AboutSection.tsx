import AboutSection from "../AboutSection";

export default function AboutSectionExample() {
  // todo: remove mock functionality
  const description = `For the Fastest and Accurate results of markets and bazar Download Our App

DP Boss Trusts is Online Matka App! It provides all Matka results, including Kalyan, Time Bazar, Milan Day, Milan Night, Rajdhani Day, Rajdhani Night and many more. Get live updates, panel charts, and Jodi charts all in one place. The app is designed to be fast, reliable, and easy to use.`;

  return (
    <AboutSection
      description={description}
      updatedDate="Oct 28, 2025"
      category="Entertainment"
    />
  );
}
