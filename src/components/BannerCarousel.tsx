import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import imgBanner from "../imports/Home";

interface BannerCarouselProps {
  images?: string[];
  autoPlayInterval?: number;
}

export function BannerCarousel({ images = [imgBanner], autoPlayInterval = 5000 }: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalSlides = 5; // As shown in the design

  // Auto-play with progress tracking
  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const progressInterval = 50;
    const progressStep = (progressInterval / autoPlayInterval) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + progressStep;
        
        if (newProgress >= 100) {
          setCurrentSlide((current) => (current + 1) % totalSlides);
          return 0;
        }
        
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0); // Reset progress when manually changing slides
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  return (
    <div className="w-full min-w-0 flex flex-col gap-[16px] items-start">
      <div className="aspect-[3/2] relative rounded-[8px] w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
            src={images[0]}
          />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>

      <div className="flex gap-[16px] items-center justify-center w-full">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="size-full text-[#717680]" />
          ) : (
            <Play className="size-full text-[#717680]" />
          )}
        </button>

        <div className="flex gap-[16px] items-center w-auto">
          <button
            onClick={prevSlide}
            className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-full text-[#717680]" />
          </button>

          <div className="inline-flex items-center justify-center gap-[8px]">
            {Array.from({ length: totalSlides }).map((_, index) => {
              const isActive = index === currentSlide;
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'w-[32px] h-[8px]' // Blue oval for active
                      : 'w-[8px] h-[8px]'   // Gray dot for inactive
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {isActive ? (
                    // Active: Flat loader - no gradients or shadows
                    <div className="relative w-full h-full bg-[#b3d9f2] rounded-[4px] overflow-hidden">
                      <div className="absolute inset-0 bg-[#b3d9f2] rounded-[4px]" />
                      <div 
                        className="absolute left-0 top-0 h-full bg-[#009fda] rounded-[4px] transition-all duration-75 ease-linear"
                        style={{ 
                          width: `${progress}%`,
                          minWidth: '2px'
                        }}
                      />
                    </div>
                  ) : (
                    // Inactive: Gray dot
                    <div className="w-full h-full bg-[#d1d5db] rounded-full hover:bg-[#9ca3af] transition-colors duration-200" />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="size-full text-[#717680]" />
          </button>
        </div>
      </div>
    </div>
  );
}
