import * as React from 'react';
import { PageHeader } from '../../components/ui/page-header';
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseSection,
  ShowcaseSectionContent,
  useShowcaseScroll 
} from '../../components/ui/showcase';
import { ShowcaseColorCard } from '../../components/ui/showcase-color-card';
import { showcaseContent } from '../../content/showcase-content';

export function ColorStylesShowcase() {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);
  const { activeSection, scrollToSection } = useShowcaseScroll('brand');
  const { sections } = showcaseContent.colorStyles;

  const copyToClipboard = (colorVar: string, colorValue: string) => {
    navigator.clipboard.writeText(colorValue);
    setCopiedColor(colorVar);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <>
      <PageHeader 
        title="Color Styles Showcase"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Showcase', href: '#' },
          { label: 'Color Styles' }
        ]}
      />
      <ShowcaseLayout>
        <ShowcaseSidebar
          title="Color System"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <ShowcaseContent>
          {/* Brand Colors */}
          <ShowcaseSection
            id="brand"
            title="Brand Colors"
            description="Primary brand colors used throughout the application."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ShowcaseColorCard 
                name="Brand Primary" 
                cssVar="--color-brand-primary" 
                value="#009FDA"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Brand Primary Dark" 
                cssVar="--color-brand-primary-dark" 
                value="#008BBE"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Brand Primary Light" 
                cssVar="--color-brand-primary-light" 
                value="#0097CF"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Brand Secondary" 
                cssVar="--color-brand-secondary" 
                value="#002664"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Brand Accent" 
                cssVar="--color-brand-accent" 
                value="#00AF3F"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
            </div>
          </ShowcaseSection>

          {/* Neutral Colors */}
          <ShowcaseSection
            id="neutral"
            title="Neutral Colors"
            description="Grayscale palette for backgrounds, borders, and text."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ShowcaseColorCard 
                name="White" 
                cssVar="--color-white" 
                value="#FFFFFF"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 50" 
                cssVar="--color-gray-50" 
                value="#FAFAFA"
                textColor="text-gray-900"
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
                name="Gray 200" 
                cssVar="--color-gray-200" 
                value="#E9EAEB"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 300" 
                cssVar="--color-gray-300" 
                value="#D5D7DA"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 400" 
                cssVar="--color-gray-400" 
                value="#A2A6AD"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 500" 
                cssVar="--color-gray-500" 
                value="#717680"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 600" 
                cssVar="--color-gray-600" 
                value="#535862"
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
              <ShowcaseColorCard 
                name="Gray 800" 
                cssVar="--color-gray-800" 
                value="#141A20"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Gray 900" 
                cssVar="--color-gray-900" 
                value="#0A0D12"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Black" 
                cssVar="--color-black" 
                value="#000000"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
            </div>
          </ShowcaseSection>

          {/* Blue Palette */}
          <ShowcaseSection
            id="blue"
            title="Blue Palette"
            description="Extended blue color scale for interactive elements and highlights."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ShowcaseColorCard 
                name="Blue 50" 
                cssVar="--color-blue-50" 
                value="#F2FBFF"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 100" 
                cssVar="--color-blue-100" 
                value="#E6F7FF"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 200" 
                cssVar="--color-blue-200" 
                value="#A0E1F9"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 300" 
                cssVar="--color-blue-300" 
                value="#63CDF5"
                textColor="text-gray-900"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 400" 
                cssVar="--color-blue-400" 
                value="#22B4EA"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 500" 
                cssVar="--color-blue-500" 
                value="#0097CF"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 600" 
                cssVar="--color-blue-600" 
                value="#008BBE"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 700" 
                cssVar="--color-blue-700" 
                value="#006E96"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 800" 
                cssVar="--color-blue-800" 
                value="#00526E"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
              <ShowcaseColorCard 
                name="Blue 900" 
                cssVar="--color-blue-900" 
                value="#003649"
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
            </div>
          </ShowcaseSection>

          {/* Semantic Colors */}
          <ShowcaseSection
            id="semantic"
            title="Semantic Colors"
            description="Contextual colors for UI elements like backgrounds, foregrounds, borders, and interactive states."
          >
            <ShowcaseSectionContent>
              {/* Background Colors */}
              <div>
                <h3 className="text-h4 mb-4">Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Background" 
                    cssVar="--background" 
                    value="#FFFFFF"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Background Subtle" 
                    cssVar="--background-subtle" 
                    value="#FAFAFA"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Background Muted" 
                    cssVar="--background-muted" 
                    value="#F2F3F5"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>

              {/* Foreground Colors */}
              <div>
                <h3 className="text-h4 mb-4">Foreground (Text)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Foreground" 
                    cssVar="--foreground" 
                    value="#002664"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Foreground Muted" 
                    cssVar="--foreground-muted" 
                    value="#535862"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Foreground Subtle" 
                    cssVar="--foreground-subtle" 
                    value="#717680"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>

              {/* Card Colors */}
              <div>
                <h3 className="text-h4 mb-4">Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Card Background" 
                    cssVar="--card" 
                    value="#FFFFFF"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Card Foreground" 
                    cssVar="--card-foreground" 
                    value="#252B37"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>

              {/* Border Colors */}
              <div>
                <h3 className="text-h4 mb-4">Borders</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Border" 
                    cssVar="--border" 
                    value="#D5D7DA"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Border Muted" 
                    cssVar="--border-muted" 
                    value="#E9EAEB"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Border Strong" 
                    cssVar="--border-strong" 
                    value="#A2A6AD"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>

              {/* Interactive Colors */}
              <div>
                <h3 className="text-h4 mb-4">Interactive Elements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Primary" 
                    cssVar="--primary" 
                    value="#009FDA"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Primary Hover" 
                    cssVar="--primary-hover" 
                    value="#008BBE"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Primary Active" 
                    cssVar="--primary-active" 
                    value="#006E96"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Secondary" 
                    cssVar="--secondary" 
                    value="#535862"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Secondary Hover" 
                    cssVar="--secondary-hover" 
                    value="#252B37"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Secondary Active" 
                    cssVar="--secondary-active" 
                    value="#141A20"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Accent" 
                    cssVar="--accent" 
                    value="#00AF3F"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Accent Hover" 
                    cssVar="--accent-hover" 
                    value="#067647"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Accent Active" 
                    cssVar="--accent-active" 
                    value="#05603A"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>

              {/* Input Colors */}
              <div>
                <h3 className="text-h4 mb-4">Input Fields</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard 
                    name="Input Background" 
                    cssVar="--input-background" 
                    value="#FFFFFF"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Input Border" 
                    cssVar="--input-border" 
                    value="#D5D7DA"
                    textColor="text-gray-900"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                  <ShowcaseColorCard 
                    name="Input Border Focus" 
                    cssVar="--input-border-focus" 
                    value="#009FDA"
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Status Colors */}
          <ShowcaseSection
            id="status"
            title="Status Colors"
            description="Colors for success, warning, and error states."
          >
            <ShowcaseSectionContent>
              {/* Success Colors */}
              <div>
                <h3 className="text-h4 mb-4">Success (Green)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard name="Success 50" cssVar="--color-success-50" value="#ECFDF3" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 100" cssVar="--color-success-100" value="#D1FADF" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 200" cssVar="--color-success-200" value="#A6F4C5" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 300" cssVar="--color-success-300" value="#6CE9A6" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 400" cssVar="--color-success-400" value="#32D583" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 500" cssVar="--color-success-500" value="#00AF3F" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 600" cssVar="--color-success-600" value="#067647" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 700" cssVar="--color-success-700" value="#05603A" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 800" cssVar="--color-success-800" value="#054F31" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Success 900" cssVar="--color-success-900" value="#053321" copiedColor={copiedColor} onCopy={copyToClipboard} />
                </div>
              </div>

              {/* Warning Colors */}
              <div>
                <h3 className="text-h4 mb-4">Warning (Orange)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard name="Warning 50" cssVar="--color-warning-50" value="#FFFBEB" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 100" cssVar="--color-warning-100" value="#FEF3C7" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 200" cssVar="--color-warning-200" value="#FDE68A" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 300" cssVar="--color-warning-300" value="#FCD34D" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 400" cssVar="--color-warning-400" value="#FBBF24" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 500" cssVar="--color-warning-500" value="#F59E0B" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 600" cssVar="--color-warning-600" value="#D97706" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 700" cssVar="--color-warning-700" value="#B45309" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 800" cssVar="--color-warning-800" value="#92400E" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Warning 900" cssVar="--color-warning-900" value="#78350F" copiedColor={copiedColor} onCopy={copyToClipboard} />
                </div>
              </div>

              {/* Error/Destructive Colors */}
              <div>
                <h3 className="text-h4 mb-4">Error / Destructive (Red)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard name="Error 50" cssVar="--color-error-50" value="#FEF2F2" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 100" cssVar="--color-error-100" value="#FEE2E2" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 200" cssVar="--color-error-200" value="#FECACA" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 300" cssVar="--color-error-300" value="#FCA5A5" textColor="text-gray-900" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 400" cssVar="--color-error-400" value="#F87171" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 500" cssVar="--color-error-500" value="#D92D20" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 600" cssVar="--color-error-600" value="#DC2626" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 700" cssVar="--color-error-700" value="#B91C1C" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 800" cssVar="--color-error-800" value="#991B1B" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Error 900" cssVar="--color-error-900" value="#7F1D1D" copiedColor={copiedColor} onCopy={copyToClipboard} />
                </div>
              </div>

              {/* Destructive Semantic */}
              <div>
                <h3 className="text-h4 mb-4">Destructive (Semantic)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ShowcaseColorCard name="Destructive" cssVar="--destructive" value="#D92D20" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Destructive Hover" cssVar="--destructive-hover" value="#DC2626" copiedColor={copiedColor} onCopy={copyToClipboard} />
                  <ShowcaseColorCard name="Destructive Active" cssVar="--destructive-active" value="#B91C1C" copiedColor={copiedColor} onCopy={copyToClipboard} />
                </div>
              </div>
            </ShowcaseSectionContent>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>
    </>
  );
}
