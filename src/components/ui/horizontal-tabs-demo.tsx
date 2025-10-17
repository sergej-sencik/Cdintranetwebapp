/**
 * HorizontalTabs Interactive Demo
 * 
 * This component demonstrates all features and states of the HorizontalTabs component.
 * Use this as a reference for implementation or testing.
 */

import React, { useState } from 'react';
import { HorizontalTabs } from './horizontal-tabs';
import { FileText, Calendar, Video, Bell, Archive, Home, Users } from 'lucide-react';

export const HorizontalTabsDemo: React.FC = () => {
  const [activeBasic, setActiveBasic] = useState('tab1');
  const [activeBadges, setActiveBadges] = useState('inbox');
  const [activeIcons, setActiveIcons] = useState('news');
  const [activeComplete, setActiveComplete] = useState('notifications');

  return (
    <div className="space-y-[48px] p-[24px]">
      {/* Basic Example */}
      <div>
        <div className="mb-[16px]">
          <h3 className="text-[20px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
            Basic Tabs
          </h3>
          <p className="text-[14px] text-[color:var(--color-gray-500)]">
            Simple text-only tabs with hover and active states
          </p>
        </div>
        <HorizontalTabs
          tabs={[
            { id: 'tab1', label: 'Overview' },
            { id: 'tab2', label: 'Details' },
            { id: 'tab3', label: 'Settings' }
          ]}
          defaultActiveTab={activeBasic}
          onTabChange={setActiveBasic}
        />
        <div className="mt-[16px] p-[16px] bg-[color:var(--color-gray-50)] rounded-[var(--radius-md)]">
          <p className="text-[14px] text-[color:var(--color-gray-600)]">
            Active Tab: <strong>{activeBasic}</strong>
          </p>
        </div>
      </div>

      {/* Badges Example */}
      <div>
        <div className="mb-[16px]">
          <h3 className="text-[20px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
            Tabs with Badges
          </h3>
          <p className="text-[14px] text-[color:var(--color-gray-500)]">
            Display notification counts or status indicators
          </p>
        </div>
        <HorizontalTabs
          tabs={[
            { id: 'inbox', label: 'Inbox', badge: 12 },
            { id: 'drafts', label: 'Drafts', badge: 3 },
            { id: 'sent', label: 'Sent', badge: 0 },
            { id: 'spam', label: 'Spam', badge: '!' }
          ]}
          defaultActiveTab={activeBadges}
          onTabChange={setActiveBadges}
        />
        <div className="mt-[16px] p-[16px] bg-[color:var(--color-gray-50)] rounded-[var(--radius-md)]">
          <p className="text-[14px] text-[color:var(--color-gray-600)]">
            Active Tab: <strong>{activeBadges}</strong>
          </p>
          <p className="text-[12px] text-[color:var(--color-gray-500)] mt-[4px]">
            💡 Badges can display numbers or strings
          </p>
        </div>
      </div>

      {/* Icons Example */}
      <div>
        <div className="mb-[16px]">
          <h3 className="text-[20px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
            Tabs with Icons
          </h3>
          <p className="text-[14px] text-[color:var(--color-gray-500)]">
            Add visual context with icons from lucide-react
          </p>
        </div>
        <HorizontalTabs
          tabs={[
            { id: 'news', label: 'News', icon: FileText },
            { id: 'events', label: 'Events', icon: Calendar },
            { id: 'videos', label: 'Videos', icon: Video },
            { id: 'team', label: 'Team', icon: Users }
          ]}
          defaultActiveTab={activeIcons}
          onTabChange={setActiveIcons}
        />
        <div className="mt-[16px] p-[16px] bg-[color:var(--color-gray-50)] rounded-[var(--radius-md)]">
          <p className="text-[14px] text-[color:var(--color-gray-600)]">
            Active Tab: <strong>{activeIcons}</strong>
          </p>
        </div>
      </div>

      {/* Complete Example */}
      <div>
        <div className="mb-[16px]">
          <h3 className="text-[20px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
            Complete Example
          </h3>
          <p className="text-[14px] text-[color:var(--color-gray-500)]">
            All features: icons, badges, and disabled state
          </p>
        </div>
        <HorizontalTabs
          tabs={[
            { id: 'notifications', label: 'Alerts', icon: Bell, badge: 5 },
            { id: 'upcoming', label: 'Events', icon: Calendar, badge: 2 },
            { id: 'articles', label: 'Articles', icon: FileText },
            { id: 'home', label: 'Home', icon: Home },
            { id: 'archived', label: 'Archived', icon: Archive, disabled: true }
          ]}
          defaultActiveTab={activeComplete}
          onTabChange={setActiveComplete}
        />
        <div className="mt-[16px] p-[16px] bg-[color:var(--color-gray-50)] rounded-[var(--radius-md)]">
          <p className="text-[14px] text-[color:var(--color-gray-600)]">
            Active Tab: <strong>{activeComplete}</strong>
          </p>
          <p className="text-[12px] text-[color:var(--color-gray-500)] mt-[4px]">
            ⚠️ The "Archived" tab is disabled and cannot be clicked
          </p>
        </div>
      </div>

      {/* States Reference */}
      <div className="border-t border-[color:var(--color-gray-200)] pt-[24px]">
        <h3 className="text-[20px] font-medium text-[color:var(--color-gray-700)] mb-[16px]">
          States & Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div className="p-[16px] bg-white border border-[color:var(--color-gray-200)] rounded-[var(--radius-md)]">
            <h4 className="text-[16px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
              ✅ States
            </h4>
            <ul className="text-[14px] text-[color:var(--color-gray-600)] space-y-[4px]">
              <li>• <strong>Default:</strong> Transparent background</li>
              <li>• <strong>Hover:</strong> Semi-transparent white overlay</li>
              <li>• <strong>Active:</strong> Solid white background</li>
              <li>• <strong>Disabled:</strong> 50% opacity, non-interactive</li>
            </ul>
          </div>

          <div className="p-[16px] bg-white border border-[color:var(--color-gray-200)] rounded-[var(--radius-md)]">
            <h4 className="text-[16px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
              ⌨️ Keyboard Navigation
            </h4>
            <ul className="text-[14px] text-[color:var(--color-gray-600)] space-y-[4px]">
              <li>• <strong>←/→:</strong> Previous/Next tab</li>
              <li>• <strong>Home:</strong> First tab</li>
              <li>• <strong>End:</strong> Last tab</li>
              <li>• <strong>Enter:</strong> Activate focused tab</li>
            </ul>
          </div>

          <div className="p-[16px] bg-white border border-[color:var(--color-gray-200)] rounded-[var(--radius-md)]">
            <h4 className="text-[16px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
              🎨 Design System
            </h4>
            <ul className="text-[14px] text-[color:var(--color-gray-600)] space-y-[4px]">
              <li>• Background: <code>#009fda</code></li>
              <li>• Active: <code>#ffffff</code></li>
              <li>• Typography: Roboto Medium, 14px</li>
              <li>• Height: 48px</li>
            </ul>
          </div>

          <div className="p-[16px] bg-white border border-[color:var(--color-gray-200)] rounded-[var(--radius-md)]">
            <h4 className="text-[16px] font-medium text-[color:var(--color-gray-700)] mb-[8px]">
              ♿ Accessibility
            </h4>
            <ul className="text-[14px] text-[color:var(--color-gray-600)] space-y-[4px]">
              <li>• <code>role="tablist"</code> container</li>
              <li>• <code>aria-pressed</code> for active state</li>
              <li>• <code>aria-disabled</code> for disabled tabs</li>
              <li>• Full keyboard navigation support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
