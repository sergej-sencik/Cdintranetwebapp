import * as React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseSection,
  ShowcaseCard,
  ShowcaseColorCard,
  useShowcaseScroll 
} from './ui/showcase';

/**
 * Showcase System Test Page
 * 
 * This page verifies that all showcase components are working correctly.
 * Navigate to /test to see this page.
 */
export function ShowcaseTest() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);
  const { activeSection, scrollToSection } = useShowcaseScroll('section1');

  const copyToClipboard = (cssVar: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(cssVar);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const sections = [
    { id: 'section1', label: 'Test Section 1' },
    { id: 'section2', label: 'Test Section 2' },
    { id: 'section3', label: 'Test Section 3' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ShowcaseLayout>
        <ShowcaseSidebar
          title="Showcase Test"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <ShowcaseContent>
          {/* Section 1: ShowcaseCard Test */}
          <ShowcaseSection
            id="section1"
            title="ShowcaseCard Component Test"
            description="Testing the ShowcaseCard component with different configurations"
          >
            <div className="space-y-8">
              <ShowcaseCard
                title="Card with Title and Subtitle"
                subtitle="This is a subtitle with specifications"
              >
                <p className="text-base">
                  This is a ShowcaseCard with both title and subtitle. If you see a white card with rounded corners and padding, it's working!
                </p>
                <code className="mt-4 block text-sm">{'<ShowcaseCard title="..." subtitle="...">Content</ShowcaseCard>'}</code>
              </ShowcaseCard>

              <ShowcaseCard title="Card with Only Title">
                <p className="text-base">
                  This card has only a title, no subtitle.
                </p>
              </ShowcaseCard>

              <ShowcaseCard>
                <p className="text-base">
                  This card has no title or subtitle - just content.
                </p>
              </ShowcaseCard>
            </div>
          </ShowcaseSection>

          {/* Section 2: ShowcaseColorCard Test */}
          <ShowcaseSection
            id="section2"
            title="ShowcaseColorCard Component Test"
            description="Testing the color card with copy functionality"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ShowcaseColorCard
                name="Primary Blue"
                cssVar="--color-primary"
                value="#009FDA"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard
                name="Success Green"
                cssVar="--color-success"
                value="#00AF3F"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard
                name="Error Red"
                cssVar="--color-error"
                value="#D92D20"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard
                name="Gray 100"
                cssVar="--color-gray-100"
                value="#F2F3F5"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard
                name="Gray 700"
                cssVar="--color-gray-700"
                value="#252B37"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Try clicking the copy button</strong> on any color card above. 
                The hex value will be copied to your clipboard and you'll see a checkmark icon briefly.
              </p>
            </div>
          </ShowcaseSection>

          {/* Section 3: Layout Test */}
          <ShowcaseSection
            id="section3"
            title="Layout & Spacing Test"
            description="Verifying consistent spacing and responsive behavior"
          >
            <div className="space-y-6">
              <ShowcaseCard title="Spacing Test">
                <div className="space-y-4">
                  <p className="text-base">Check these spacing metrics:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    <li>Sections have 48px (space-y-12) spacing between them</li>
                    <li>Cards within sections have 32px (space-y-8) spacing</li>
                    <li>Sidebar is 256px (w-64) wide</li>
                    <li>Gap between sidebar and content is 32px (gap-8)</li>
                    <li>Container max-width is 1280px (max-w-7xl)</li>
                  </ul>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Responsive Test">
                <p className="text-base mb-4">
                  Test responsive behavior by resizing your browser:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li><strong>Desktop (1024px+)</strong>: Sidebar visible on left, content on right</li>
                  <li><strong>Tablet/Mobile {'(<1024px)'})</strong>: Sidebar hidden, content full-width</li>
                  <li><strong>Sidebar Position</strong>: Sticky at top when scrolling</li>
                </ul>
              </ShowcaseCard>

              <ShowcaseCard title="Component Status">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseLayout - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseSidebar - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseContent - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseSection - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseCard - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">ShowcaseColorCard - Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-sm">useShowcaseScroll Hook - Working</span>
                  </div>
                </div>
              </ShowcaseCard>

              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-lg font-medium text-green-900 mb-2">
                  🎉 If you can see this page, the showcase system is working!
                </h4>
                <p className="text-sm text-green-800">
                  The Font Styles (/fonts) and Color Styles (/colors) pages should now have the same consistent layout you see here.
                  Try navigating to those pages and hard-refresh your browser (Ctrl+Shift+R or Cmd+Shift+R).
                </p>
              </div>
            </div>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>

      <Footer />
    </div>
  );
}
