# Content System Usage Examples

Complete, real-world examples showing how to use the content system in various components.

## 📋 Table of Contents

- [Simple Components](#simple-components)
- [Complex Components](#complex-components)
- [Layout Components](#layout-components)
- [Form Components](#form-components)
- [Advanced Patterns](#advanced-patterns)

## Simple Components

### Button Component

```tsx
import { getButtonLabels } from './data/content-loader';

interface ButtonProps {
  variant: 'save' | 'cancel' | 'submit' | 'close';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick }) => {
  const labels = getButtonLabels();
  
  return (
    <button onClick={onClick}>
      {labels[variant]}
    </button>
  );
};

// Usage
<Button variant="save" />      // "Uložit"
<Button variant="cancel" />    // "Zrušit"
```

### Error Message Component

```tsx
import { getErrorMessages } from './data/content-loader';

interface ErrorProps {
  type: '404' | '403' | '500' | 'network';
  onRetry?: () => void;
  onGoHome?: () => void;
}

export const ErrorMessage: React.FC<ErrorProps> = ({ 
  type, 
  onRetry, 
  onGoHome 
}) => {
  const error = getErrorMessages(type);
  
  return (
    <div className="error-container">
      <h1>{error.title}</h1>
      <p>{error.message}</p>
      <div className="actions">
        {error.retry && onRetry && (
          <button onClick={onRetry}>{error.retry}</button>
        )}
        {error.goHome && onGoHome && (
          <button onClick={onGoHome}>{error.goHome}</button>
        )}
      </div>
    </div>
  );
};
```

### Loading Spinner Component

```tsx
import { getCommonText } from './data/content-loader';

export const LoadingSpinner: React.FC = () => {
  const { labels } = getCommonText();
  
  return (
    <div className="spinner" role="status">
      <span className="sr-only">{labels.loading}</span>
      <div className="spinner-icon" />
    </div>
  );
};
```

## Complex Components

### News Section with Tabs

```tsx
import * as React from 'react';
import { getNewsSection, getButtonLabels } from './data/content-loader';
import { NewsArticleCard } from './NewsArticleCard';
import { HorizontalTabs } from './HorizontalTabs';

export const FeaturedNewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'department' | 'region'>('all');
  const { labels, data } = getNewsSection();
  const buttons = getButtonLabels();

  const tabs = [
    { id: 'all', label: labels.tabs.all },
    { id: 'department', label: labels.tabs.department },
    { id: 'region', label: labels.tabs.region },
  ];

  const currentArticles = data[activeTab];

  const handleViewAll = React.useCallback(() => {
    console.log('Navigate to all news');
  }, []);

  return (
    <section className="news-section">
      <div className="news-header">
        <h2>{labels.title}</h2>
        <HorizontalTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(id) => setActiveTab(id as typeof activeTab)}
        />
        <button onClick={handleViewAll}>
          {buttons.viewAll}
        </button>
      </div>

      {currentArticles.length > 0 ? (
        <div className="news-grid">
          {currentArticles.map(article => (
            <NewsArticleCard
              key={article.id}
              {...article}
            />
          ))}
        </div>
      ) : (
        <p className="no-results">{labels.noArticles}</p>
      )}
    </section>
  );
};
```

### Events Section with Empty State

```tsx
import * as React from 'react';
import { getEventsSection, getButtonLabels } from './data/content-loader';
import { EventCard } from './EventCard';

export const UpcomingEventsSection: React.FC = () => {
  const { labels, data: events } = getEventsSection();
  const buttons = getButtonLabels();

  const handleViewAll = () => {
    console.log('Navigate to all events');
  };

  const handleAddToCalendar = (eventId: string) => {
    console.log('Add to calendar:', eventId);
  };

  return (
    <section className="events-section">
      <div className="section-header">
        <h2>{labels.title}</h2>
        <button onClick={handleViewAll}>
          {buttons.viewAll}
        </button>
      </div>

      {events.length > 0 ? (
        <div className="events-list">
          {events.map(event => (
            <EventCard
              key={event.id}
              {...event}
              onAddToCalendar={() => handleAddToCalendar(event.id)}
              addToCalendarLabel={labels.addToCalendar}
              locationLabel={labels.location}
              timeLabel={labels.time}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>{labels.noEvents}</p>
        </div>
      )}
    </section>
  );
};
```

### Banner Carousel with Full Controls

```tsx
import * as React from 'react';
import { getBannerSection, getAccessibilityLabels, formatString } from './data/content-loader';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const BannerCarousel: React.FC = () => {
  const { labels, config, data: slides } = getBannerSection();
  const { aria } = getAccessibilityLabels();

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  const totalSlides = slides.length;

  // Auto-play logic
  React.useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (50 / config.autoPlayInterval) * 100;
        
        if (newProgress >= 100) {
          setCurrentSlide(current => (current + 1) % totalSlides);
          return 0;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, config.autoPlayInterval, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const ariaLabel = formatString(labels.slideOf, {
    current: currentSlide + 1,
    total: totalSlides,
  });

  return (
    <div className="carousel" aria-label={aria.carousel}>
      {/* Slides */}
      <div className="carousel-slides" aria-live="polite" aria-atomic="true">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className={index === currentSlide ? 'active' : 'hidden'}
            aria-hidden={index !== currentSlide}
          />
        ))}
        <div className="sr-only">{ariaLabel}</div>
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? aria.pauseCarousel : aria.playCarousel}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        {/* Navigation */}
        <div className="carousel-navigation">
          <button onClick={prevSlide} aria-label={aria.previousSlide}>
            <ChevronLeft />
          </button>

          {/* Progress Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={formatString(aria.goToSlide, { number: index + 1 })}
                aria-current={index === currentSlide ? 'true' : 'false'}
                className="indicator"
              >
                <div
                  className="indicator-progress"
                  style={{
                    width: index === currentSlide ? `${progress}%` : 
                           index < currentSlide ? '100%' : '0%'
                  }}
                />
              </button>
            ))}
          </div>

          <button onClick={nextSlide} aria-label={aria.nextSlide}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
```

## Layout Components

### Header Component

```tsx
import * as React from 'react';
import { getCompleteHeader, getAccessibilityLabels } from './data/content-loader';
import { Search, Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  const { labels, user } = getCompleteHeader();
  const { aria } = getAccessibilityLabels();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="site-header">
      {/* Skip Links */}
      <a href="#main-content" className="skip-link">
        {aria.skipToContent}
      </a>

      {/* Logo */}
      <div className="logo">
        <a href="/" aria-label={labels.navigation.home}>
          <img src="/logo.svg" alt="České dráhy" />
        </a>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav" aria-label={aria.mainNavigation}>
        <a href="/">{labels.navigation.home}</a>
        <a href="/news">{labels.navigation.newsAndMedia}</a>
        <a href="/employees">{labels.navigation.forEmployees}</a>
        <a href="/company">{labels.navigation.ourCompany}</a>
        <a href="/documents">{labels.navigation.documents}</a>
        <a href="/support">{labels.navigation.support}</a>
      </nav>

      {/* Search */}
      <button
        onClick={() => setIsSearchOpen(true)}
        aria-label={aria.searchForm}
        className="search-toggle"
      >
        <Search />
      </button>

      {/* Notifications */}
      <button
        aria-label={aria.openNotifications}
        className="notifications-toggle"
      >
        <Bell />
        <span className="badge">3</span>
      </button>

      {/* User Menu */}
      <div className="user-menu">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={aria.userMenu}
          aria-expanded={isMenuOpen}
        >
          <img src={user.avatar} alt={user.fullName} />
          <span>{user.fullName}</span>
        </button>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <div className="user-info">
              <p>{labels.userMenu.greeting}, {user.firstName}</p>
              <p className="subtitle">{user.position}</p>
            </div>
            <hr />
            <a href="/profile">{labels.userMenu.profile}</a>
            <a href="/settings">{labels.userMenu.settings}</a>
            <a href="/help">{labels.userMenu.help}</a>
            <hr />
            <button>{labels.userMenu.logout}</button>
          </div>
        )}
      </div>
    </header>
  );
};
```

### Footer Component

```tsx
import * as React from 'react';
import { getFooterContent } from './data/content-loader';

export const Footer: React.FC = () => {
  const footer = getFooterContent();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Company Section */}
        <div className="footer-section">
          <h3>{footer.sections.company.title}</h3>
          <ul>
            <li><a href="/about">{footer.sections.company.about}</a></li>
            <li><a href="/history">{footer.sections.company.history}</a></li>
            <li><a href="/management">{footer.sections.company.management}</a></li>
            <li><a href="/structure">{footer.sections.company.structure}</a></li>
          </ul>
        </div>

        {/* For Employees Section */}
        <div className="footer-section">
          <h3>{footer.sections.forEmployees.title}</h3>
          <ul>
            <li><a href="/intranet">{footer.sections.forEmployees.intranet}</a></li>
            <li><a href="/benefits">{footer.sections.forEmployees.benefits}</a></li>
            <li><a href="/training">{footer.sections.forEmployees.training}</a></li>
            <li><a href="/safety">{footer.sections.forEmployees.safety}</a></li>
          </ul>
        </div>

        {/* Documents Section */}
        <div className="footer-section">
          <h3>{footer.sections.documents.title}</h3>
          <ul>
            <li><a href="/regulations">{footer.sections.documents.regulations}</a></li>
            <li><a href="/forms">{footer.sections.documents.forms}</a></li>
            <li><a href="/manuals">{footer.sections.documents.manuals}</a></li>
            <li><a href="/gdpr">{footer.sections.documents.gdpr}</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>{footer.sections.support.title}</h3>
          <ul>
            <li><a href="/helpdesk">{footer.sections.support.helpDesk}</a></li>
            <li><a href="/faq">{footer.sections.support.faq}</a></li>
            <li><a href="/contact">{footer.sections.support.contact}</a></li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="footer-legal">
        <p>{footer.legal.copyright}</p>
        <div className="legal-links">
          <a href="/privacy">{footer.legal.privacyPolicy}</a>
          <a href="/terms">{footer.legal.termsOfUse}</a>
          <a href="/accessibility">{footer.legal.accessibility}</a>
          <a href="/cookies">{footer.legal.cookies}</a>
        </div>
      </div>
    </footer>
  );
};
```

## Form Components

### Search Form

```tsx
import * as React from 'react';
import { getFormLabels, getCommonText } from './data/content-loader';
import { Search, X } from 'lucide-react';

export const SearchForm: React.FC = () => {
  const form = getFormLabels('search');
  const { labels } = getCommonText();

  const [query, setQuery] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Perform search
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSearching(false);
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form" role="search">
      <div className="search-input-wrapper">
        <Search className="search-icon" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={form.placeholder}
          aria-label={form.placeholder}
          disabled={isSearching}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label={form.clear}
            className="clear-button"
          >
            <X />
          </button>
        )}
      </div>
      <button type="submit" disabled={isSearching || !query}>
        {isSearching ? labels.loading : form.submit}
      </button>
    </form>
  );
};
```

### Contact Form with Validation

```tsx
import * as React from 'react';
import { getFormLabels, getValidationMessages, getCommonText } from './data/content-loader';

export const ContactForm: React.FC = () => {
  const form = getFormLabels('contact');
  const validation = getValidationMessages();
  const { buttons, labels } = getCommonText();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = validation.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = validation.invalidEmail;
    }

    if (!formData.message.trim()) {
      newErrors.message = validation.required;
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Submit form
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <h2>{form.title}</h2>

      {submitSuccess && (
        <div className="alert alert-success">
          {form.success}
        </div>
      )}

      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name">
          {form.name} <span className="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder={form.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && (
          <span id="name-error" className="error-message">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">
          {form.email} <span className="required">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder={form.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && (
          <span id="email-error" className="error-message">
            {errors.email}
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message">
          {form.message} <span className="required">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder={form.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={5}
          required
        />
        {errors.message && (
          <span id="message-error" className="error-message">
            {errors.message}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="form-actions">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? labels.loading : form.send}
        </button>
        <button
          type="button"
          onClick={() => setFormData({ name: '', email: '', phone: '', subject: '', message: '' })}
        >
          {buttons.cancel}
        </button>
      </div>
    </form>
  );
};
```

## Advanced Patterns

### Multi-Language Support (Future)

```tsx
import * as React from 'react';
import { getButtonLabels } from './data/content-loader';

// Context for language
const LanguageContext = React.createContext<'cs' | 'en'>('cs');

export const useLanguage = () => React.useContext(LanguageContext);

// Component using language context
export const MultiLangButton: React.FC = () => {
  const language = useLanguage();
  const buttons = getButtonLabels(language); // Future implementation
  
  return <button>{buttons.save}</button>;
};
```

### Memoized Content Loading

```tsx
import * as React from 'react';
import { getNewsSection, getEventsSection } from './data/content-loader';

export const HomePage: React.FC = () => {
  // Memoize content loading
  const newsSection = React.useMemo(() => getNewsSection(), []);
  const eventsSection = React.useMemo(() => getEventsSection(), []);

  return (
    <div>
      <NewsSection {...newsSection} />
      <EventsSection {...eventsSection} />
    </div>
  );
};
```

### Custom Hook for Content

```tsx
import * as React from 'react';
import { getSectionLabels, getButtonLabels } from './data/content-loader';

export function useSectionContent(section: 'news' | 'events' | 'videos') {
  return React.useMemo(() => ({
    labels: getSectionLabels(section),
    buttons: getButtonLabels(),
  }), [section]);
}

// Usage
export const NewsSection: React.FC = () => {
  const { labels, buttons } = useSectionContent('news');
  
  return (
    <section>
      <h2>{labels.title}</h2>
      <button>{buttons.viewAll}</button>
    </section>
  );
};
```

---

**More examples available in README.md and MIGRATION_GUIDE.md**
