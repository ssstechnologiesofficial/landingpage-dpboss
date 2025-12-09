import ReviewCard from "../ReviewCard";

export default function ReviewCardExample() {
  // todo: remove mock functionality
  return (
    <ReviewCard
      id="1"
      userName="Rajesh Kumar"
      userInitials="RK"
      avatarColor="#4285f4"
      date="November 15, 2025"
      rating={5}
      review="Best app for matka results. Very accurate and fast updates. Highly recommended!"
      helpfulCount={45}
    />
  );
}
