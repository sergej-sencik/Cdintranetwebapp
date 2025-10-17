/**
 * HorizontalTabs Integration Tests
 * 
 * This file contains test cases and examples to verify the component works correctly.
 * Import and run these in your test environment or use as reference.
 */

import React, { useState } from 'react';
import { HorizontalTabs } from './horizontal-tabs';
import { TabButton } from './tab-button';
import { FileText, Calendar, Video, Bell, Archive, Home } from 'lucide-react';

/**
 * Test 1: Basic Tabs (Backward Compatibility)
 * Verify old code still works without modifications
 */
export const Test1_BasicTabs = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2' },
        { id: 'tab3', label: 'Tab 3' }
      ]}
      defaultActiveTab="tab1"
    />
  );
};

/**
 * Test 2: Tabs with Badges (Number)
 * Verify numeric badge display
 */
export const Test2_BadgesNumber = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'inbox', label: 'Inbox', badge: 12 },
        { id: 'drafts', label: 'Drafts', badge: 3 },
        { id: 'sent', label: 'Sent', badge: 0 }
      ]}
    />
  );
};

/**
 * Test 3: Tabs with Badges (String)
 * Verify string badge display
 */
export const Test3_BadgesString = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'urgent', label: 'Urgent', badge: '!' },
        { id: 'new', label: 'New', badge: 'NEW' },
        { id: 'hot', label: 'Hot', badge: '🔥' }
      ]}
    />
  );
};

/**
 * Test 4: Tabs with Icons
 * Verify icon rendering
 */
export const Test4_Icons = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'news', label: 'News', icon: FileText },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'videos', label: 'Videos', icon: Video }
      ]}
    />
  );
};

/**
 * Test 5: Disabled Tabs
 * Verify disabled state works
 */
export const Test5_Disabled = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'active', label: 'Active' },
        { id: 'disabled1', label: 'Disabled 1', disabled: true },
        { id: 'enabled', label: 'Enabled' },
        { id: 'disabled2', label: 'Disabled 2', disabled: true }
      ]}
    />
  );
};

/**
 * Test 6: Complete Features
 * All features combined
 */
export const Test6_Complete = () => {
  return (
    <HorizontalTabs
      tabs={[
        { id: 'alerts', label: 'Alerts', icon: Bell, badge: 5 },
        { id: 'events', label: 'Events', icon: Calendar, badge: 2 },
        { id: 'news', label: 'News', icon: FileText },
        { id: 'home', label: 'Home', icon: Home },
        { id: 'archived', label: 'Archived', icon: Archive, disabled: true }
      ]}
    />
  );
};

/**
 * Test 7: State Management
 * Verify onTabChange callback works
 */
export const Test7_StateManagement = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [history, setHistory] = useState<string[]>([]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setHistory([...history, tabId]);
  };

  return (
    <div>
      <HorizontalTabs
        tabs={[
          { id: 'tab1', label: 'Tab 1' },
          { id: 'tab2', label: 'Tab 2' },
          { id: 'tab3', label: 'Tab 3' }
        ]}
        defaultActiveTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="mt-4 p-4 bg-gray-100">
        <p><strong>Current Tab:</strong> {activeTab}</p>
        <p><strong>History:</strong> {history.join(' → ')}</p>
      </div>
    </div>
  );
};

/**
 * Test 8: Dynamic Badge Updates
 * Verify badges can be updated dynamically
 */
export const Test8_DynamicBadges = () => {
  const [count, setCount] = useState(5);

  return (
    <div>
      <HorizontalTabs
        tabs={[
          { id: 'notifications', label: 'Notifications', badge: count },
          { id: 'messages', label: 'Messages' }
        ]}
      />
      <div className="mt-4">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          Increment Badge
        </button>
        <button 
          onClick={() => setCount(Math.max(0, count - 1))}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Decrement Badge
        </button>
      </div>
    </div>
  );
};

/**
 * Test 9: Content Switching
 * Verify tab content switching pattern
 */
export const Test9_ContentSwitching = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div>
      <HorizontalTabs
        tabs={[
          { id: 'news', label: 'News', icon: FileText },
          { id: 'events', label: 'Events', icon: Calendar },
          { id: 'videos', label: 'Videos', icon: Video }
        ]}
        defaultActiveTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="p-8 bg-white">
        {activeTab === 'news' && (
          <div>
            <h3 className="text-xl font-bold mb-4">News Content</h3>
            <p>This is the news section content.</p>
          </div>
        )}
        {activeTab === 'events' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Events Content</h3>
            <p>This is the events section content.</p>
          </div>
        )}
        {activeTab === 'videos' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Videos Content</h3>
            <p>This is the videos section content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Test 10: TabButton Standalone
 * Verify TabButton can be used independently
 */
export const Test10_StandaloneTabButton = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[#009fda] flex">
      <TabButton
        label="Button 1"
        isActive={active === '1'}
        onClick={() => setActive('1')}
      />
      <TabButton
        label="Button 2"
        icon={Bell}
        badge={5}
        isActive={active === '2'}
        onClick={() => setActive('2')}
      />
      <TabButton
        label="Disabled"
        disabled={true}
        onClick={() => setActive('3')}
      />
    </div>
  );
};

/**
 * Test 11: Edge Cases
 * Test unusual but valid configurations
 */
export const Test11_EdgeCases = () => {
  return (
    <div className="space-y-4">
      {/* Single tab */}
      <HorizontalTabs
        tabs={[
          { id: 'only', label: 'Only Tab' }
        ]}
      />

      {/* All disabled except one */}
      <HorizontalTabs
        tabs={[
          { id: 'enabled', label: 'Enabled' },
          { id: 'disabled1', label: 'Disabled 1', disabled: true },
          { id: 'disabled2', label: 'Disabled 2', disabled: true }
        ]}
      />

      {/* Long labels */}
      <HorizontalTabs
        tabs={[
          { id: 'short', label: 'Short' },
          { id: 'long', label: 'Very Long Tab Label Here' }
        ]}
      />

      {/* Many tabs */}
      <HorizontalTabs
        tabs={Array.from({ length: 10 }, (_, i) => ({
          id: `tab${i}`,
          label: `Tab ${i + 1}`
        }))}
      />
    </div>
  );
};

/**
 * Test 12: Accessibility
 * Verify keyboard navigation and ARIA attributes
 */
export const Test12_Accessibility = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Test keyboard navigation:
      </p>
      <ul className="text-sm text-gray-600 list-disc ml-6">
        <li>Tab to focus the first tab</li>
        <li>Use Arrow Left/Right to navigate</li>
        <li>Press Enter to activate</li>
        <li>Use Home/End to jump</li>
        <li>Disabled tabs should be skipped</li>
      </ul>
      <HorizontalTabs
        tabs={[
          { id: 'first', label: 'First' },
          { id: 'second', label: 'Second' },
          { id: 'disabled', label: 'Disabled', disabled: true },
          { id: 'last', label: 'Last' }
        ]}
      />
    </div>
  );
};

/**
 * All Tests Component
 * Render all tests at once for visual verification
 */
export const AllTests = () => {
  return (
    <div className="space-y-8 p-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Test 1: Basic Tabs</h2>
        <Test1_BasicTabs />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 2: Badges (Number)</h2>
        <Test2_BadgesNumber />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 3: Badges (String)</h2>
        <Test3_BadgesString />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 4: Icons</h2>
        <Test4_Icons />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 5: Disabled</h2>
        <Test5_Disabled />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 6: Complete</h2>
        <Test6_Complete />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 7: State Management</h2>
        <Test7_StateManagement />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 8: Dynamic Badges</h2>
        <Test8_DynamicBadges />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 9: Content Switching</h2>
        <Test9_ContentSwitching />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 10: Standalone TabButton</h2>
        <Test10_StandaloneTabButton />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 11: Edge Cases</h2>
        <Test11_EdgeCases />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 12: Accessibility</h2>
        <Test12_Accessibility />
      </section>
    </div>
  );
};
