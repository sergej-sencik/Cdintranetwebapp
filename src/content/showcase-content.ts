/**
 * Showcase Pages Content
 * 
 * Centralized data for showcase pages (Components, Font Styles, Color Styles)
 */

export interface ShowcaseSection {
  id: string;
  label: string;
  items?: string[];
}

export const showcaseContent = {
  meta: {
    version: "1.0.0",
    lastUpdated: "2025-10-15",
    description: "Content for showcase pages"
  },

  /**
   * Components Showcase Sections
   */
  components: {
    title: "Components Showcase",
    description: "Complete reference of all UI components in the design system.",
    sections: [
      {
        id: 'buttons',
        label: 'Buttons',
        items: ['CustomButton', 'Button (ShadCN)', 'HeaderNavButton', 'UserNavButton', 'NotificationBadge', 'MegaMenu', 'DropdownMenuItem']
      },
      {
        id: 'cards',
        label: 'Cards',
        items: ['ContentCard', 'NewsArticleCard', 'VideoArticleCard', 'EventCard', 'LinkCard', 'NotificationCard']
      },
      {
        id: 'media',
        label: 'Media Components',
        items: ['ImagePlaceholder']
      },
      {
        id: 'layout',
        label: 'Layout Components',
        items: ['PageBlockHeader', 'Header', 'Footer', 'BannerCarousel']
      },
      {
        id: 'sidebar',
        label: 'Sidebar Widgets',
        items: ['ContactCard', 'FileItem', 'QuickLink', 'DepartmentBanner', 'My Department Widget', 'My Contacts Widget', 'My Documents Widget', 'Right Sidebar']
      },
      {
        id: 'navigation',
        label: 'Navigation',
        items: ['HorizontalTabs', 'SecondaryTabs', 'Tabs', 'Breadcrumb']
      },
      {
        id: 'forms',
        label: 'Form Components',
        items: ['SearchInput', 'Input', 'Textarea', 'Checkbox', 'Switch', 'Select', 'Slider', 'Label']
      },
      {
        id: 'feedback',
        label: 'Feedback Components',
        items: ['Alert', 'Badge', 'Progress', 'Skeleton', 'Tooltip']
      },
      {
        id: 'data',
        label: 'Data Display',
        items: ['Table', 'Card', 'Avatar', 'Separator', 'Accordion']
      }
    ] as ShowcaseSection[]
  },

  /**
   * Font Styles Showcase Sections
   */
  fontStyles: {
    title: "Font Styles Reference",
    description: "Complete typography system documentation for the project. All font styles use either CD Fedra Pro for headings or Roboto for body text.",
    sections: [
      { id: 'headings', label: 'Headings (H1-H6)' },
      { id: 'card-titles', label: 'Card Titles' },
      { id: 'body-text', label: 'Body Text' },
      { id: 'variables', label: 'CSS Variables' },
    ] as ShowcaseSection[]
  },

  /**
   * Color Styles Showcase Sections
   */
  colorStyles: {
    title: "Color System Reference",
    description: "Complete color palette documentation for the project. All colors are defined as CSS custom properties for easy theming and maintenance.",
    sections: [
      { id: 'brand', label: 'Brand Colors' },
      { id: 'neutral', label: 'Neutral Colors' },
      { id: 'blue', label: 'Blue Palette' },
      { id: 'semantic', label: 'Semantic Colors' },
      { id: 'status', label: 'Status Colors' },
    ] as ShowcaseSection[]
  }
} as const;

export default showcaseContent;
