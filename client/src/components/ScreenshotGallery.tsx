interface ScreenshotGalleryProps {
  screenshots: string[];
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
      <div className="flex gap-3" style={{ width: "max-content" }}>
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="w-[160px] md:w-[200px] aspect-[9/19.5] rounded-lg bg-muted flex items-center justify-center shadow-sm overflow-hidden shrink-0"
            data-testid={`img-screenshot-${index + 1}`}
          >
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white text-lg font-bold">DP</span>
              </div>
              <span className="text-xs text-muted-foreground">
                Screenshot {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
