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
  const totalSlides = 5; // As shown in the design

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full lg:w-[648px]">
      <div className="h-[408px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img
            alt="Banner"
            className="absolute h-[107.19%] left-0 max-w-none top-[-0.41%] w-full object-cover"
            src={images[0]}
          />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>

      <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
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

        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[348px]">
          <button
            onClick={prevSlide}
            className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-full text-[#717680]" />
          </button>

          <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`basis-0 grow h-[4px] min-h-px min-w-px shrink-0 transition-colors cursor-pointer ${
                  index === currentSlide ? "bg-[#009fda]" : "bg-[#e9eaeb] hover:bg-[#d5d7da]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
