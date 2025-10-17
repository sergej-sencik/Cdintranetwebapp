import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { CustomButton } from '../ui/custom-button';
import { VideoArticleCard } from '../ui/video-article-card';
import { PageBlockHeader, PAGE_BLOCK_HEADER_BUTTON_SIZE } from '../ui/page-block-header';

export interface VideoArticle {
  image: string;
  date: string;
  title: string;
  description?: string;
  href?: string;
}

export interface LatestVideosSectionProps {
  /** Section title */
  title?: string;
  /** Video articles data */
  videos: VideoArticle[];
  /** Text for "View All" button */
  viewAllText?: string;
  /** Callback when "View All" is clicked */
  onViewAll?: () => void;
  /** Optional CSS classes */
  className?: string;
}

export const LatestVideosSection: React.FC<LatestVideosSectionProps> = ({
  title = 'Nejnovější videa',
  videos,
  viewAllText = 'Zobrazit vše',
  onViewAll,
  className = '',
}) => {
  return (
    <div 
      className={`content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full ${className}`}
      data-name="Videos"
    >
      <PageBlockHeader
        title={title}
        actions={
          <CustomButton
            variant="link-color"
            size={PAGE_BLOCK_HEADER_BUTTON_SIZE}
            onClick={onViewAll}
            rightIcon={
              <div className="relative shrink-0 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#009FDA" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            }
          >
            {viewAllText}
          </CustomButton>
        }
      />
      <div className="bg-white relative shrink-0 w-full" data-name="Content">
        <div className="size-full">
          <div className="box-border content-start flex flex-wrap gap-[24px] items-stretch p-[24px] relative w-full">
            {videos.map((video, index) => (
              <VideoArticleCard
                key={index}
                image={video.image}
                date={video.date}
                title={video.title}
                description={video.description}
                playIconPath={svgPaths.p35f28e40}
                href={video.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
