/**
 * Search Suggestions Dropdown Component
 * 
 * A personalized dropdown menu that appears below the search input.
 * Displays categorized suggestions including recent searches, colleagues,
 * documents, and news articles.
 */

import * as React from 'react';
import { cn } from './utils';
import { SearchSuggestionSection } from './search-suggestion-section';
import { SearchSuggestionItem } from './search-suggestion-item';
import { 
  Clock, 
  User, 
  FileText, 
  Newspaper,
  Calendar,
  TrendingUp,
  Search
} from 'lucide-react';

export interface SearchSuggestionsDropdownProps {
  /** Whether the dropdown is open */
  isOpen: boolean;
  /** Search query value */
  query?: string;
  /** Callback when a suggestion is clicked */
  onSuggestionClick?: (suggestion: any) => void;
  /** Custom className */
  className?: string;
}

export const SearchSuggestionsDropdown = React.forwardRef<
  HTMLDivElement,
  SearchSuggestionsDropdownProps
>(({ isOpen, query = '', onSuggestionClick, className }, ref) => {
  if (!isOpen) return null;

  // Mock data - replace with real data from your API
  const recentSearches = [
    { id: 1, label: 'Výroční zpráva 2024', type: 'recent' },
    { id: 2, label: 'IT oddělení', type: 'recent' },
    { id: 3, label: 'Jan Novák', type: 'recent' },
  ];

  const colleagues = [
    { id: 1, name: 'Jan Novák', department: 'IT oddělení', position: 'Senior Developer' },
    { id: 2, name: 'Marie Svobodová', department: 'Marketing', position: 'Marketing Manager' },
    { id: 3, name: 'Petr Dvořák', department: 'HR', position: 'HR Specialist' },
  ];

  const documents = [
    { id: 1, title: 'Výroční zpráva 2024', date: '15. 12. 2024', type: 'PDF' },
    { id: 2, title: 'Firemní politika GDPR', date: '10. 12. 2024', type: 'DOCX' },
    { id: 3, title: 'Organizační struktura', date: '5. 12. 2024', type: 'PDF' },
  ];

  const news = [
    { id: 1, title: 'Nové benefity pro zaměstnance', date: '18. 12. 2024', category: 'HR' },
    { id: 2, title: 'Úspěšné dokončení projektu', date: '17. 12. 2024', category: 'Projekty' },
  ];

  const trending = [
    { id: 1, label: 'Vánoční večírek 2024', badge: 'Populární' },
    { id: 2, label: 'Nová kancelář v Praze', badge: 'Aktuální' },
  ];

  return (
    <div
      ref={ref}
      className={cn(
        // Position
        'absolute top-full left-0 right-0 mt-1',
        // Layout
        'w-full',
        // Styling - matching mega menu design
        'bg-white rounded-[var(--radius-sm)] overflow-hidden',
        // Shadow from design system
        'elevation-lg',
        // Border from design system
        'border border-[var(--border-muted)]',
        // Z-index
        'z-[var(--z-dropdown)]',
        // Max height with scroll
        'max-h-[600px] overflow-y-auto',
        // Animation
        'animate-in fade-in-0 zoom-in-95 duration-200',
        className
      )}
    >
      {/* Empty State - shown when there's a query but no results */}
      {query && query.length > 2 && (
        <div className="px-4 py-8 text-center">
          <Search className="w-12 h-12 mx-auto mb-3 text-[var(--foreground-muted)] opacity-30" />
          <p className="text-[var(--foreground-muted)]">
            Žádné výsledky pro "{query}"
          </p>
          <p className="text-sm text-[var(--foreground-subtle)] mt-1">
            Zkuste změnit vyhledávací dotaz
          </p>
        </div>
      )}

      {/* Default State - shown when input is focused but no query */}
      {(!query || query.length <= 2) && (
        <>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <SearchSuggestionSection 
              title="Poslední vyhledávání"
              actionLabel="Vymazat historii"
              onActionClick={() => console.log('Clear history')}
            >
              {recentSearches.map((search) => (
                <SearchSuggestionItem
                  key={search.id}
                  icon={<Clock className="w-4 h-4" />}
                  label={search.label}
                  onClick={() => onSuggestionClick?.(search)}
                />
              ))}
            </SearchSuggestionSection>
          )}

          {/* Divider */}
          <div className="border-t border-[var(--border-muted)]" />

          {/* Trending */}
          <SearchSuggestionSection 
            title="Populární dnes"
          >
            {trending.map((item) => (
              <SearchSuggestionItem
                key={item.id}
                icon={<TrendingUp className="w-4 h-4" />}
                label={item.label}
                badge={item.badge}
                onClick={() => onSuggestionClick?.(item)}
              />
            ))}
          </SearchSuggestionSection>

          {/* Divider */}
          <div className="border-t border-[var(--border-muted)]" />

          {/* Colleagues */}
          <SearchSuggestionSection 
            title="Kolegové"
            actionLabel="Zobrazit všechny"
            onActionClick={() => console.log('View all colleagues')}
          >
            {colleagues.slice(0, 3).map((colleague) => (
              <SearchSuggestionItem
                key={colleague.id}
                icon={<User className="w-4 h-4" />}
                label={colleague.name}
                subtitle={`${colleague.position} • ${colleague.department}`}
                onClick={() => onSuggestionClick?.(colleague)}
              />
            ))}
          </SearchSuggestionSection>

          {/* Divider */}
          <div className="border-t border-[var(--border-muted)]" />

          {/* Documents */}
          <SearchSuggestionSection 
            title="Nedávné dokumenty"
            actionLabel="Zobrazit všechny"
            onActionClick={() => console.log('View all documents')}
          >
            {documents.slice(0, 3).map((doc) => (
              <SearchSuggestionItem
                key={doc.id}
                icon={<FileText className="w-4 h-4" />}
                label={doc.title}
                subtitle={doc.date}
                badge={doc.type}
                onClick={() => onSuggestionClick?.(doc)}
              />
            ))}
          </SearchSuggestionSection>

          {/* Divider */}
          <div className="border-t border-[var(--border-muted)]" />

          {/* News */}
          <SearchSuggestionSection 
            title="Aktuální novinky"
          >
            {news.map((article) => (
              <SearchSuggestionItem
                key={article.id}
                icon={<Newspaper className="w-4 h-4" />}
                label={article.title}
                subtitle={article.date}
                badge={article.category}
                onClick={() => onSuggestionClick?.(article)}
              />
            ))}
          </SearchSuggestionSection>
        </>
      )}

      {/* Footer - Optional quick actions */}
      <div className="border-t border-[var(--border-muted)] bg-[var(--background-subtle)] px-4 py-3">
        <div className="flex items-center justify-between text-xs text-[var(--foreground-muted)]">
          <span>Stiskněte <kbd className="px-1.5 py-0.5 bg-white border border-[var(--border)] rounded">Enter</kbd> pro vyhledávání</span>
          <span>Stiskněte <kbd className="px-1.5 py-0.5 bg-white border border-[var(--border)] rounded">Esc</kbd> pro zavření</span>
        </div>
      </div>
    </div>
  );
});

SearchSuggestionsDropdown.displayName = 'SearchSuggestionsDropdown';
