import * as React from 'react';
import svgPaths from '../../imports/svg-sjo69dtk3d';
import { CustomButton } from '../ui/custom-button';
import { EventCard } from '../ui/event-card';
import { PageBlockHeader, PAGE_BLOCK_HEADER_BUTTON_SIZE } from '../ui/page-block-header';

export interface Event {
  dateDay: string;
  dateMonth: string;
  title: string;
  time: string;
  location: string;
  badge?: {
    text: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
  };
  href?: string;
}

export interface UpcomingEventsSectionProps {
  /** Section title */
  title?: string;
  /** Events data */
  events: Event[];
  /** Text for "View All" button */
  viewAllText?: string;
  /** Callback when "View All" is clicked */
  onViewAll?: () => void;
  /** Optional CSS classes */
  className?: string;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({
  title = 'Nadcházející události',
  events,
  viewAllText = 'Zobrazit vše',
  onViewAll,
  className = '',
}) => {
  return (
    <div 
      className={`content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full ${className}`}
      data-name="Events"
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
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#008BBE" strokeWidth="1.66667" />
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
          <div className="box-border content-stretch flex gap-[24px] items-start p-[24px] relative w-full">
            {events.map((event, index) => (
              <EventCard
                key={index}
                dateDay={event.dateDay}
                dateMonth={event.dateMonth}
                title={event.title}
                time={event.time}
                location={event.location}
                badge={event.badge}
                arrowIconPath={svgPaths.p35129400}
                href={event.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
