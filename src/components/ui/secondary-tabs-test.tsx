/**
 * SecondaryTabs Integration Tests
 * 
 * Test cases to verify the component works correctly in all scenarios.
 */

import React, { useState } from 'react';
import { SecondaryTabs } from './secondary-tabs';
import { SecondaryTabButton } from './secondary-tab-button';

/**
 * Test 1: Basic Tabs
 * Verify basic functionality
 */
export const Test1_BasicTabs = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'tab1', label: 'Tab 1' },
          { id: 'tab2', label: 'Tab 2' },
          { id: 'tab3', label: 'Tab 3' }
        ]}
        defaultActiveTab="tab1"
      />
    </div>
  );
};

/**
 * Test 2: Tabs with Count Badges
 * Verify count badge display
 */
export const Test2_CountBadges = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'recent', label: 'Recent' },
          { id: 'saved', label: 'Saved', count: 12 },
          { id: 'favorites', label: 'Favorites', count: 5 }
        ]}
      />
    </div>
  );
};

/**
 * Test 3: Disabled Tabs
 * Verify disabled state works
 */
export const Test3_DisabledTabs = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'active', label: 'Active' },
          { id: 'disabled1', label: 'Disabled 1', disabled: true },
          { id: 'enabled', label: 'Enabled' },
          { id: 'disabled2', label: 'Disabled 2', disabled: true }
        ]}
      />
    </div>
  );
};

/**
 * Test 4: Complete Features
 * All features combined
 */
export const Test4_Complete = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'department', label: 'My Department' },
          { id: 'saved', label: 'Saved', count: 6 },
          { id: 'archived', label: 'Archived', disabled: true }
        ]}
      />
    </div>
  );
};

/**
 * Test 5: State Management
 * Verify onTabChange callback works
 */
export const Test5_StateManagement = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [history, setHistory] = useState<string[]>([]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setHistory([...history, tabId]);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'recent', label: 'Recent' },
          { id: 'saved', label: 'Saved', count: 12 }
        ]}
        defaultActiveTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm"><strong>Current Tab:</strong> {activeTab}</p>
        <p className="text-sm"><strong>History:</strong> {history.join(' → ')}</p>
      </div>
    </div>
  );
};

/**
 * Test 6: Dynamic Count Updates
 * Verify counts can be updated dynamically
 */
export const Test6_DynamicCounts = () => {
  const [count, setCount] = useState(5);

  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'recent', label: 'Recent' },
          { id: 'saved', label: 'Saved', count: count }
        ]}
      />
      <div className="mt-4 flex gap-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
        >
          Increment Count
        </button>
        <button 
          onClick={() => setCount(Math.max(0, count - 1))}
          className="px-4 py-2 bg-gray-500 text-white rounded text-sm"
        >
          Decrement Count
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-500 text-white rounded text-sm"
        >
          Reset to 0
        </button>
      </div>
    </div>
  );
};

/**
 * Test 7: Content Switching
 * Verify tab content switching pattern
 */
export const Test7_ContentSwitching = () => {
  const [activeTab, setActiveTab] = useState('recent');

  return (
    <div className="bg-white p-6 rounded-lg">
      <SecondaryTabs
        tabs={[
          { id: 'recent', label: 'Recent' },
          { id: 'saved', label: 'Saved', count: 12 }
        ]}
        defaultActiveTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-6 p-4 border-t border-gray-200">
        {activeTab === 'recent' && (
          <div>
            <h4 className="font-semibold mb-2">Recent Documents</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Document 1.pdf</li>
              <li>• Document 2.doc</li>
              <li>• Document 3.xlsx</li>
            </ul>
          </div>
        )}
        {activeTab === 'saved' && (
          <div>
            <h4 className="font-semibold mb-2">Saved Documents (12)</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Saved Document 1.pdf</li>
              <li>• Saved Document 2.doc</li>
              <li>• Saved Document 3.xlsx</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Test 8: SecondaryTabButton Standalone
 * Verify button can be used independently
 */
export const Test8_StandaloneButton = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex gap-3 border-b border-gray-200">
        <SecondaryTabButton
          label="Button 1"
          isActive={active === '1'}
          onClick={() => setActive('1')}
        />
        <SecondaryTabButton
          label="Button 2"
          count={5}
          isActive={active === '2'}
          onClick={() => setActive('2')}
        />
        <SecondaryTabButton
          label="Disabled"
          disabled={true}
          onClick={() => setActive('3')}
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Active button: {active || 'None'}
      </p>
    </div>
  );
};

/**
 * Test 9: Edge Cases
 * Test unusual but valid configurations
 */
export const Test9_EdgeCases = () => {
  return (
    <div className="space-y-6">
      {/* Single tab */}
      <div className="bg-white p-6 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Single Tab</p>
        <SecondaryTabs
          tabs={[
            { id: 'only', label: 'Only Tab' }
          ]}
        />
      </div>

      {/* All disabled except one */}
      <div className="bg-white p-6 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">All Disabled Except One</p>
        <SecondaryTabs
          tabs={[
            { id: 'enabled', label: 'Enabled' },
            { id: 'disabled1', label: 'Disabled 1', disabled: true },
            { id: 'disabled2', label: 'Disabled 2', disabled: true }
          ]}
        />
      </div>

      {/* Zero count */}
      <div className="bg-white p-6 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Zero Count Badge</p>
        <SecondaryTabs
          tabs={[
            { id: 'recent', label: 'Recent' },
            { id: 'saved', label: 'Saved', count: 0 }
          ]}
        />
      </div>

      {/* Many tabs */}
      <div className="bg-white p-6 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Many Tabs (5+)</p>
        <SecondaryTabs
          tabs={[
            { id: 'tab1', label: 'Tab 1', count: 1 },
            { id: 'tab2', label: 'Tab 2', count: 2 },
            { id: 'tab3', label: 'Tab 3', count: 3 },
            { id: 'tab4', label: 'Tab 4', count: 4 },
            { id: 'tab5', label: 'Tab 5', count: 5 }
          ]}
        />
      </div>
    </div>
  );
};

/**
 * Test 10: Accessibility
 * Verify keyboard navigation and ARIA attributes
 */
export const Test10_Accessibility = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-4 p-4 bg-blue-50 rounded">
        <p className="text-sm font-semibold mb-2">Keyboard Navigation Test:</p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>1. Click to focus the first tab</li>
          <li>2. Use Arrow Left/Right to navigate</li>
          <li>3. Press Enter to activate</li>
          <li>4. Use Home/End to jump</li>
          <li>5. Disabled tabs should be skipped</li>
        </ul>
      </div>
      <SecondaryTabs
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
 * Test 11: In Widget Context
 * Verify it works within a widget-like container
 */
export const Test11_WidgetContext = () => {
  const [activeTab, setActiveTab] = useState('department');

  return (
    <div className="bg-white rounded-lg border border-gray-200 max-w-md">
      <div className="p-6">
        {/* Widget Title */}
        <h3 className="font-['CD_Fedra_Pro',_sans-serif] font-medium text-[22px] mb-6">
          My Contacts
        </h3>

        {/* Tabs */}
        <SecondaryTabs
          tabs={[
            { id: 'department', label: 'My Department' },
            { id: 'saved', label: 'Saved', count: 6 }
          ]}
          defaultActiveTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content */}
        <div className="mt-6 space-y-3">
          <div className="p-3 border border-gray-200 rounded">
            <p className="font-medium text-sm">Contact Name</p>
            <p className="text-xs text-gray-500">Position</p>
          </div>
          <div className="p-3 border border-gray-200 rounded">
            <p className="font-medium text-sm">Contact Name</p>
            <p className="text-xs text-gray-500">Position</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            View all (28) →
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * All Tests Component
 * Render all tests at once for visual verification
 */
export const AllSecondaryTabsTests = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">SecondaryTabs Tests</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 1: Basic Tabs</h2>
        <Test1_BasicTabs />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 2: Count Badges</h2>
        <Test2_CountBadges />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 3: Disabled Tabs</h2>
        <Test3_DisabledTabs />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 4: Complete Features</h2>
        <Test4_Complete />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 5: State Management</h2>
        <Test5_StateManagement />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 6: Dynamic Counts</h2>
        <Test6_DynamicCounts />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 7: Content Switching</h2>
        <Test7_ContentSwitching />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 8: Standalone Button</h2>
        <Test8_StandaloneButton />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 9: Edge Cases</h2>
        <Test9_EdgeCases />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 10: Accessibility</h2>
        <Test10_Accessibility />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test 11: Widget Context</h2>
        <Test11_WidgetContext />
      </section>
    </div>
  );
};
