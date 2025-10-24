import * as React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export interface BannerSlide {
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface BannerCarouselProps {
  /** Array of banner slides */
  slides: BannerSlide[];
  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;
  /** Optional CSS classes */
  className?: string;
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const totalSlides = slides.length;

  // Auto-play with progress tracking
  React.useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const progressInterval = 50; // Update progress every 50ms
    const progressStep = (progressInterval / autoPlayInterval) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + progressStep;
        
        // When progress reaches 100%, move to next slide
        if (newProgress >= 100) {
          setCurrentSlide((current) => (current + 1) % totalSlides);
          return 0;
        }
        
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, totalSlides]);

  // Reset progress when manually changing slides
  const goToSlide = React.useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const togglePlayPause = React.useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ${className}`}
      data-name="BannerCarousel"
    >
      {/* Banner Image with Preserved Aspect Ratio */}
      <div className="aspect-[3/2] relative rounded-[8px] shrink-0 w-full overflow-hidden" data-name="Banner">
        {/* Image Container with Slide Transition */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          {slides.map((slide, index) => (
            <img
              key={index}
              alt={slide.title || `Banner ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              src={slide.image}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                pointerEvents: index === currentSlide ? 'auto' : 'none',
              }}
            />
          ))}
        </div>

        {/* Content Overlay (if needed) */}
        <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-center justify-end p-[12px] md:p-[16px] w-full" />
        </div>

        {/* Border */}
        <div 
          aria-hidden="true" 
          className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" 
        />
      </div>

      {/* Controls Row */}
      <div 
        className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" 
        data-name="Row"
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
          aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          type="button"
        >
          {isPlaying ? (
            <div className="relative shrink-0 size-[20px]" data-name="pause-circle">
              <Pause className="size-full text-[#717680]" strokeWidth={1.66667} />
            </div>
          ) : (
            <div className="relative shrink-0 size-[20px]" data-name="play-circle">
              <Play className="size-full text-[#717680]" strokeWidth={1.66667} />
            </div>
          )}
        </button>

        {/* Banner Pagination - New Design */}
        <div 
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-auto" 
          data-name="BannerPagination"
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="size-full text-[#717680]" strokeWidth={1.66667} />
          </button>

          {/* Inner pagination: inline-flex so width equals items width */}
          <div 
            className="inline-flex items-center justify-center gap-[8px]" 
            data-name="PaginationDots"
          >
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'w-[32px] h-[8px]' // Blue oval for active slide
                      : 'w-[8px] h-[8px]'   // Gray dot for inactive slides
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  type="button"
                >
                  {isActive ? (
                    // Active: Flat loader animation - no gradients or shadows
                    <div className="relative w-full h-full bg-[#b3d9f2] rounded-[4px] overflow-hidden">
                      {/* Loader track: lighter blue background */}
                      <div className="absolute inset-0 bg-[#b3d9f2] rounded-[4px]" />
                      
                      {/* Animated progress fill: darker blue, flat color */}
                      <div 
                        className="absolute left-0 top-0 h-full bg-[#009fda] rounded-[4px] transition-all duration-75 ease-linear"
                        style={{ 
                          width: `${progress}%`,
                          minWidth: '2px'
                        }}
                      />
                    </div>
                  ) : (
                    // Inactive Slide: Gray Dot
                    <div className="w-full h-full bg-[#d1d5db] rounded-full hover:bg-[#9ca3af] transition-colors duration-200" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="size-full text-[#717680]" strokeWidth={1.66667} />
          </button>
        </div>
      </div>
    </div>
  );
};
