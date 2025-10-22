import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { SidebarWidget } from './sidebar-widget';
import { DepartmentBanner } from './department-banner';
import { ContactCard, ContactCardProps } from './contact-card';
import { QuickLink } from './quick-link';
import { cn } from './utils';

/**
 * My Department Widget Component
 * 
 * Displays department information, key contacts, and quick links
 * 
 * @component
 * @example
 * ```tsx
 * <MyDepartmentWidget
 *   title="Muj odbor"
 *   banner={{
 *     image: "/department.jpg",
 *     departmentName: "Odbor údržby a oprav",
 *     location: "Depo Plzeň"
 *   }}
 *   contacts={contacts}
 *   quickLinks={links}
 *   cta={{ text: "View department", href: "#" }}
 * />
 * ```
 */

export interface MyDepartmentWidgetProps {
  title: string;
  banner: {
    image?: string;
    departmentName: string;
    location: string;
    icon?: 'wrench' | 'tool';
  };
  keyContacts: {
    title: string;
    contacts: ContactCardProps[];
  };
  quickLinks: {
    title: string;
    links: Array<{
      id: string;
      title: string;
      href: string;
    }>;
  };
  cta: {
    text: string;
    href: string;
  };
  className?: string;
}

export const MyDepartmentWidget = React.forwardRef<HTMLDivElement, MyDepartmentWidgetProps>(
  ({ title, banner, keyContacts, quickLinks, cta, className }, ref) => {
    return (
      <div ref={ref} className={cn('content-stretch flex flex-col items-start relative shrink-0 w-full', className)}>
        <SidebarWidget
          title={title}
          footer={
            <a
              href={cta.href}
              className="relative rounded-[4px] shrink-0 w-full block hover:bg-[#f0f9ff] transition-colors"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[10px] relative w-full">
                  <div className="box-border content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0">
                    <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[22px] relative shrink-0 text-[#009fda] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {cta.text}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-[#009FDA]" strokeWidth={1.66667} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#009fda] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </a>
          }
        >
          {/* Banner */}
          <DepartmentBanner
            image={banner.image}
            departmentName={banner.departmentName}
            location={banner.location}
            icon={banner.icon}
          />

          {/* Key Contacts Section */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {keyContacts.title}
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {keyContacts.contacts.map((contact, index) => (
                <ContactCard key={index} {...contact} compact />
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              {quickLinks.title}
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {quickLinks.links.map((link) => (
                <QuickLink
                  key={link.id}
                  title={link.title}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        </SidebarWidget>
      </div>
    );
  }
);

MyDepartmentWidget.displayName = 'MyDepartmentWidget';
