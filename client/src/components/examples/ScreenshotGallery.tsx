import ScreenshotGallery from "../ScreenshotGallery";

export default function ScreenshotGalleryExample() {
  // todo: remove mock functionality
  const screenshots = [
    "screenshot1.png",
    "screenshot2.png",
    "screenshot3.png",
    "screenshot4.png",
    "screenshot5.png",
  ];

  return <ScreenshotGallery screenshots={screenshots} />;
}
