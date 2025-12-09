import screenshot1 from "@assets/WhatsApp_Image_2025-12-06_at_6.25.36_PM_1765263645916.jpeg";
import screenshot2 from "@assets/WhatsApp_Image_2025-12-07_at_8.44.48_AM_1765263633414.jpeg";
import screenshot3 from "@assets/WhatsApp_Image_2025-12-07_at_8.45.27_AM_1765263633415.jpeg";
import screenshot4 from "@assets/WhatsApp_Image_2025-12-07_at_8.45.48_AM_1765263633416.jpeg";
import screenshot5 from "@assets/WhatsApp_Image_2025-12-07_at_8.46.09_AM_1765263633416.jpeg";

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5];

export default function ScreenshotGallery() {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
      <div className="flex gap-3" style={{ width: "max-content" }}>
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="w-[160px] md:w-[200px] aspect-[9/19.5] rounded-lg bg-muted flex items-center justify-center shadow-sm overflow-hidden shrink-0"
            data-testid={`img-screenshot-${index + 1}`}
          >
            <img
              src={screenshot}
              alt={`App screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
