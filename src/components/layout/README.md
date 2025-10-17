# Global Layout Components

This directory contains reusable, global layout components for the Header and Footer.

## Header Component

The `Header` component provides a complete header with logo, search bar, notifications, user profile, and navigation menu.

### Basic Usage

```tsx
import { Header } from './components/layout';

function App() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  );
}
```

### With Custom Props

```tsx
import { Header } from './components/layout';

function App() {
  return (
    <div>
      <Header
        notificationCount={5}
        userProfile={{
          name: 'Jan Novotný',
          role: 'Technik kolejových vozidel',
          avatarSrc: '/path/to/avatar.jpg'
        }}
        navItems={[
          { label: 'Novinky a média', onClick: () => console.log('News clicked') },
          { label: 'Pro zaměstnance', href: '/employees' },
          { label: 'Naše firma', href: '/company' },
          { label: 'Dokumenty', href: '/documents' },
          { label: 'Podpora', href: '/support' },
          { label: 'Nástroje a aplikace', href: '/tools' },
        ]}
      />
      {/* Your page content */}
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notificationCount` | `number` | `undefined` | Number of notifications to display in badge |
| `userProfile` | `UserProfileProps` | Default profile | User information for profile dropdown |
| `userProfile.name` | `string` | `'Jan Novotný'` | User's full name |
| `userProfile.role` | `string` | `'Technik kolejových vozidel'` | User's role/position |
| `userProfile.avatarSrc` | `string` | Default avatar | URL to user's avatar image |
| `navItems` | `NavItem[]` | Default nav items | Navigation menu items |

## Footer Component

The `Footer` component provides a complete footer with link columns, contact information, logo, copyright, and social icons.

### Basic Usage

```tsx
import { Footer } from './components/layout';

function App() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  );
}
```

### With Custom Props

```tsx
import { Footer } from './components/layout';

function App() {
  return (
    <div>
      {/* Your page content */}
      <Footer
        columns={[
          {
            title: 'O intranetu',
            links: [
              { label: 'Pravidla používání', href: '/terms' },
              { label: 'Mapa portálu', href: '/sitemap' },
              { label: 'Nápověda', href: '/help' },
            ]
          },
          {
            title: 'Užitečné odkazy',
            links: [
              { label: 'Webmail', href: 'https://webmail.example.com' },
              { label: 'MS Teams', href: 'https://teams.microsoft.com' },
            ]
          }
        ]}
        contactInfo={[
          {
            title: 'IT Helpdesk',
            phone: '+420 725 123 456',
            email: 'helpdesk.it@cd.cz'
          },
          {
            title: 'HR Department',
            email: 'hr@cd.cz'
          }
        ]}
        socialLinks={[
          { icon: 'facebook', href: 'https://facebook.com' },
          { icon: 'linkedin', href: 'https://linkedin.com' },
          { icon: 'twitter', href: 'https://twitter.com' },
        ]}
      />
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `FooterLinkColumn[]` | Default columns | Footer link columns configuration |
| `contactInfo` | `ContactInfo[]` | Default contacts | Contact information sections |
| `socialLinks` | `Array<{icon: string, href?: string}>` | `[]` | Social media links |

### Type Definitions

```typescript
interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  title: string;
  phone?: string;
  email?: string;
}
```

## Complete Layout Example

```tsx
import { Header, Footer } from './components/layout';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        notificationCount={3}
        userProfile={{
          name: 'Jan Novotný',
          role: 'Senior Developer'
        }}
      />
      
      <main className="flex-1">
        {/* Your page content */}
      </main>
      
      <Footer />
    </div>
  );
}
```

## Styling

Both components use the existing design system:
- Colors from the Figma design (e.g., `#002664`, `#009fda`)
- Roboto and CD Fedra Pro fonts
- Consistent spacing and sizing tokens
- All styling is embedded in the components using Tailwind CSS

## Responsive Design

The components are built to be responsive:
- Header adapts to different screen sizes
- Footer uses flexbox with wrapping for smaller screens
- Navigation menu can be extended with mobile menu support
