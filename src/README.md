# České dráhy Intranet - Responsive Web Application

This is a fully responsive and interactive web application based on the České dráhy (Czech Railways) intranet design from Figma.

## Features

### ✨ Component Architecture (Atomic Design)

The application follows Atomic Design principles:

- **Atoms**: Basic UI elements (buttons, inputs, icons)
- **Molecules**: Combined atoms (search bar, notification badge)
- **Organisms**: Complex components (header, navigation, news sections)
- **Templates/Pages**: Complete page layouts

### 📱 Fully Responsive Design

The application adapts to different screen sizes:

- **Desktop** (1440px+): Full layout with sidebar
- **Tablet** (768px - 1024px): Adjusted layout, stacked sidebar
- **Mobile** (< 768px): Mobile-optimized layout with hamburger menu

### 🎯 Interactive Features

1. **AI Assistant**
   - Expandable chat interface
   - Fixed position at bottom-right
   - Message input with send functionality

2. **Banner Carousel**
   - Auto-play functionality
   - Manual navigation (previous/next)
   - Play/pause controls
   - Slide indicators with click navigation
   - 5-second interval (configurable)

3. **Search Bar**
   - Live search input
   - Clear button when text is entered
   - Focus states with visual feedback
   - Placeholder text in Czech

4. **Notification System**
   - Badge with unread count
   - Dropdown notification panel
   - Individual notification dismissal
   - "Clear all" functionality
   - Mock notifications for demo

5. **News Tabs**
   - Three tab options: "Všechny", "Z mého odboru", "Z mého regionu"
   - Active tab highlighting
   - Smooth transitions

### 🎨 Design System

**Colors:**
- Primary Blue: `#009fda`
- Dark Blue: `#002664`
- Light Blue: `#e3f7ff`
- Gray scales: `#252b37`, `#535862`, `#717680`, `#e9eaeb`
- Success Green: `#00af3f`
- Warning Orange: `#dc6803`

**Typography:**
- Primary: Roboto (Regular, Medium, Semibold)
- Headings: CD Fedra Pro (Medium, Semibold, Bold)

### 🔧 Technology Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **CSS Modules** for responsive behavior

### 📦 Component Structure

```
/components
├── AIAssistant.tsx          # AI chat assistant (expandable)
├── BannerCarousel.tsx       # Image carousel with controls
├── MobileNav.tsx            # Mobile navigation menu
├── NewsTabs.tsx             # Tab navigation for news sections
├── NotificationBadge.tsx    # Notification bell with dropdown
├── ResponsiveHome.tsx       # Main responsive wrapper
├── SearchBar.tsx            # Enhanced search input
└── responsive.css           # Responsive styles
```

### 🚀 Usage

The application automatically loads with all interactive features enabled:

1. **Search**: Click the search bar to start typing
2. **Notifications**: Click the bell icon to view notifications
3. **Banner**: Carousel auto-plays; use controls to navigate manually
4. **AI Assistant**: Click the AI button in bottom-right to open chat
5. **Navigation**: On mobile, use hamburger menu for navigation

### 📐 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### ♿ Accessibility

- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure
- Alt text for images

### 🌐 Localization

All content is in Czech (cs-CZ) as per the original design.

### 🎭 Mock Data

The application includes mock data for:
- Notifications (4 sample notifications)
- News articles
- Events
- Documents
- Contacts

### 🔮 Future Enhancements

Potential improvements:
- Connect to real backend API
- User authentication
- Real-time notifications
- Advanced search with filters
- Document preview functionality
- Calendar integration
- Video player with controls
- Dark mode support

## Development

The application preserves the exact styling and layout from the Figma design while adding responsive behavior and interactivity. All Figma variables, styles, and design tokens are maintained for consistency.

### Key Files

- `/imports/Home.tsx` - Original Figma-imported component
- `/imports/svg-rjzw0joeqc.ts` - SVG path definitions
- `/styles/globals.css` - Global styles and custom utilities
- `/components/responsive.css` - Responsive media queries

## Credits

Design: České dráhy (Czech Railways) Intranet
Implementation: AI-powered web application builder
