import * as React from 'react';
import { PageHeader } from '../../components/ui/page-header';
import { 
  ShowcaseLayout, 
  ShowcaseSidebar, 
  ShowcaseContent, 
  ShowcaseSection,
  ShowcaseCard,
  ShowcaseSectionContent,
  useShowcaseScroll 
} from '../../components/ui/showcase';
import { showcaseContent } from '../../content/showcase-content';

export function FontStylesShowcase() {
  const { activeSection, scrollToSection } = useShowcaseScroll('headings');
  const { sections } = showcaseContent.fontStyles;

  return (
    <>
      <PageHeader 
        title="Font Styles Showcase"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Showcase', href: '#' },
          { label: 'Font Styles' }
        ]}
      />
      <ShowcaseLayout>
        <ShowcaseSidebar
          title="Font Styles"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <ShowcaseContent>
          {/* Headings Section */}
          <ShowcaseSection
            id="headings"
            title="Headings (H1-H6)"
            description="Major headings (H1-H4) use CD Fedra Pro, while minor headings (H5-H6) use Roboto Medium."
          >
            <ShowcaseSectionContent>
              <ShowcaseCard
                title="H1 - Main Page Title"
                subtitle="CD Fedra Pro • 48px • Medium (500) • 1.2"
              >
                <h1 className="text-h1">The quick brown fox jumps over the lazy dog</h1>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h1 className="text-h1">...</h1>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="H2 - Section Title"
                subtitle="CD Fedra Pro • 30px • Medium (500) • 1.3"
              >
                <h2 className="text-h2">The quick brown fox jumps over the lazy dog</h2>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h2 className="text-h2">...</h2>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="H3 - Subsection Title"
                subtitle="CD Fedra Pro • 22px • Medium (500) • 1.3"
              >
                <h3 className="text-h3">The quick brown fox jumps over the lazy dog</h3>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h3 className="text-h3">...</h3>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="H4 - Main Card Title"
                subtitle="CD Fedra Pro • 20px • Medium (500) • 1.4"
              >
                <h4 className="text-h4">The quick brown fox jumps over the lazy dog</h4>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h4 className="text-h4">...</h4>'}</code>
                  <div className="mt-2">
                    Used in: EventCard, NewsArticleCard, VideoArticleCard, ContentCard
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="H5 - Minor Card Title"
                subtitle="Roboto • 16px • Medium (500) • 1.4"
              >
                <h5 className="text-h5">The quick brown fox jumps over the lazy dog</h5>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h5 className="text-h5">...</h5>'}</code>
                  <div className="mt-2">
                    Used in: LinkCard, NotificationCard
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="H6 - Small Heading"
                subtitle="Roboto • 14px • Medium (500) • 1.4"
              >
                <h6 className="text-h6">The quick brown fox jumps over the lazy dog</h6>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h6 className="text-h6">...</h6>'}</code>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Card Titles Section */}
          <ShowcaseSection
            id="card-titles"
            title="Card Titles"
            description="Specialized title styles for different card components."
          >
            <ShowcaseSectionContent>
              <ShowcaseCard
                title="Card Title (Large)"
                subtitle="CD Fedra Pro • 20px • Medium (500) • 1.4"
              >
                <h4 className="text-card-title">Main content card heading style</h4>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h4 className="text-card-title">...</h4>'}</code>
                  <div className="mt-2">
                    Used in: EventCard, NewsArticleCard, VideoArticleCard
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="Card Title (Small)"
                subtitle="CD Fedra Pro • 18px • Medium (500) • 1.4"
              >
                <h4 className="text-card-title-sm">Smaller variant for compact cards</h4>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<h4 className="text-card-title-sm">...</h4>'}</code>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Body Text Section */}
          <ShowcaseSection
            id="body-text"
            title="Body Text"
            description="All body text uses Roboto font family with various sizes and weights."
          >
            <ShowcaseSectionContent>
              <ShowcaseCard
                title="Paragraph Large"
                subtitle="Roboto • 20px • Regular (400) • 1.5"
              >
                <p className="text-p-large">
                  The quick brown fox jumps over the lazy dog. This is a large paragraph style used for introductory text and important content.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<p className="text-p-large">...</p>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="Base Text"
                subtitle="Roboto • 16px • Regular (400) • 1.5"
              >
                <p className="text-base">
                  The quick brown fox jumps over the lazy dog. This is the standard paragraph text used throughout the application.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<p className="text-base">...</p>'}</code> or <code>{'<p>...</p>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="Small Text"
                subtitle="Roboto • 14px • Regular (400) • 1.5"
              >
                <p className="text-sm">
                  The quick brown fox jumps over the lazy dog. This is small text used for metadata, captions, and secondary information.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<p className="text-sm">...</p>'}</code>
                </div>
              </ShowcaseCard>

              <ShowcaseCard
                title="Extra Small Text"
                subtitle="Roboto • 12px • Regular (400) • 1.5"
              >
                <p className="text-xs">
                  The quick brown fox jumps over the lazy dog. This is extra small text used for fine print and labels.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <code>{'<p className="text-xs">...</p>'}</code>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* CSS Variables Section */}
          <ShowcaseSection
            id="variables"
            title="CSS Variables Reference"
            description="All typography styles use these CSS custom properties defined in globals.css."
          >
            <div className="space-y-6">
              {/* Font Families */}
              <ShowcaseCard title="Font Families">
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-family-heading</span>
                    <span className="text-foreground">'CD Fedra Pro', sans-serif</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-family-body</span>
                    <span className="text-foreground">'Roboto', sans-serif</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">--font-family-mono</span>
                    <span className="text-foreground">'Courier New', monospace</span>
                  </div>
                </div>
              </ShowcaseCard>

              {/* Font Sizes */}
              <ShowcaseCard title="Font Sizes">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-h1</span>
                      <span className="text-foreground">48px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-h2</span>
                      <span className="text-foreground">30px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-h3</span>
                      <span className="text-foreground">22px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-h4</span>
                      <span className="text-foreground">20px</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">--text-h5</span>
                      <span className="text-foreground">16px</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-h6</span>
                      <span className="text-foreground">14px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-p-large</span>
                      <span className="text-foreground">20px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-base</span>
                      <span className="text-foreground">16px</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">--text-sm</span>
                      <span className="text-foreground">14px</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">--text-xs</span>
                      <span className="text-foreground">12px</span>
                    </div>
                  </div>
                </div>
              </ShowcaseCard>

              {/* Font Weights */}
              <ShowcaseCard title="Font Weights">
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-weight-light</span>
                    <span className="text-foreground">300</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-weight-normal</span>
                    <span className="text-foreground">400</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-weight-medium</span>
                    <span className="text-foreground">500</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--font-weight-semibold</span>
                    <span className="text-foreground">600</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">--font-weight-bold</span>
                    <span className="text-foreground">700</span>
                  </div>
                </div>
              </ShowcaseCard>

              {/* Line Heights */}
              <ShowcaseCard title="Line Heights">
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--line-height-none</span>
                    <span className="text-foreground">1.0</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--line-height-tight</span>
                    <span className="text-foreground">1.2</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--line-height-snug</span>
                    <span className="text-foreground">1.3</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--line-height-normal</span>
                    <span className="text-foreground">1.4</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">--line-height-relaxed</span>
                    <span className="text-foreground">1.5</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">--line-height-loose</span>
                    <span className="text-foreground">1.75</span>
                  </div>
                </div>
              </ShowcaseCard>
            </div>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>
    </>
  );
}
