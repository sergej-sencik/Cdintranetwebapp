import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from './utils';

/**
 * Showcase Color Card Props
 */
export interface ShowcaseColorCardProps {
  name: string;
  cssVar: string;
  value: string;
  textColor?: string;
  copiedColor: string | null;
  onCopy: (cssVar: string, value: string) => void;
  className?: string;
}

/**
 * Showcase Color Card Component
 * 
 * Specialized card for displaying color swatches with copy functionality.
 * Used in ColorStylesShowcase.
 * 
 * @component
 * @example
 * ```tsx
 * <ShowcaseColorCard
 *   name="Brand Primary"
 *   cssVar="--color-brand-primary"
 *   value="#009FDA"
 *   copiedColor={copiedColor}
 *   onCopy={copyToClipboard}
 * />
 * ```
 */
export const ShowcaseColorCard: React.FC<ShowcaseColorCardProps> = ({
  name,
  cssVar,
  value,
  textColor = 'text-white',
  copiedColor,
  onCopy,
  className
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow',
      className
    )}>
      <div 
        className={cn('h-24 flex items-center justify-center', textColor)}
        style={{ backgroundColor: value }}
      >
        <span className="font-mono text-sm drop-shadow-sm">{value}</span>
      </div>
      <div className="p-4">
        <h4 className="text-base mb-1 text-foreground">{name}</h4>
        <div className="flex items-center justify-between">
          <code className="text-sm text-muted-foreground">var({cssVar})</code>
          <button
            onClick={() => onCopy(cssVar, value)}
            className="p-2 hover:bg-muted rounded transition-colors"
            title="Copy color value"
          >
            {copiedColor === cssVar ? (
              <Check className="w-4 h-4 text-success-500" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

ShowcaseColorCard.displayName = 'ShowcaseColorCard';
