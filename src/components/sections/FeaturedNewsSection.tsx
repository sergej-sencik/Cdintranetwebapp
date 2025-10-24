import * as React from 'react';
import { ChevronRight as LucideChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CustomButton } from '../ui/custom-button';
import { NewsArticleCard } from '../ui/news-article-card';
import { PageBlockHeader, PAGE_BLOCK_HEADER_BUTTON_SIZE } from '../ui/page-block-header';

export interface NewsArticle {
  image: string;
  date: string;
  category: string;
  title: string;
  description?: string;
  badge?: {
    text: string;
    variant?: 'blue' | 'orange' | 'green' | 'purple';
  };
  href?: string;
  /** Tab filter - which tab this article belongs to */
  tabFilter?: 'all' | 'department' | 'region';
}

export interface FeaturedNewsSectionProps {
  /** Section title */
  title?: string;
  /** News articles data for all tabs */
  allArticles?: NewsArticle[];
  /** News articles data for department tab */
  departmentArticles?: NewsArticle[];
  /** News articles data for region tab */
  regionArticles?: NewsArticle[];
  /** Tab configuration */
  tabs?: Array<{ id: string; label: string }>;
  /** Default active tab */
  defaultActiveTab?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
  /** Text for "View All" button */
  viewAllText?: string;
  /** Callback when "View All" is clicked */
  onViewAll?: () => void;
  /** Optional CSS classes */
  className?: string;
}

// Default articles for "Všechny" tab
const defaultAllArticles: NewsArticle[] = [
  {
    image: 'https://images.unsplash.com/photo-1721815487168-622699845b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '20. září 2025',
    category: 'Aktuálně z ČD',
    title: 'Startuje kampaň "Vidět a být viděn" pro práci v kolejišti',
    description: 'Nová celofiremní kampaň se zaměřuje na důležitost používání reflexních prvků a správných postupů při pohybu na všech pracovištích v blízkosti kolejí.',
    badge: { text: 'Bezpečnost', variant: 'blue' },
    href: '#',
    tabFilter: 'all'
  },
  {
    image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '19. září 2025',
    category: 'Naše tipy',
    title: 'Nový týden, nová soutěž! Tentokrát o vstupenky na MS Supermoto národů 2025',
    description: 'Nejlepší supermoto týmy planety zamíří v září 2025 do Vysokého Mýta, aby zde bojovaly o prestižní titul mistrů světa družstev.',
    href: '#',
    tabFilter: 'all'
  },
  {
    image: 'https://images.unsplash.com/photo-1659136021008-1ed2f7ddfe60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '19. září 2025',
    category: 'Z regionů',
    title: 'Naše depo v Plzni získalo ocenění za bezpečnost práce',
    description: 'Depo kolejových vozidel Plzeň bylo oceněno za vynikající výsledky v oblasti BOZP a za zavedení nových preventivních opatření.',
    badge: { text: 'Plzeň', variant: 'orange' },
    href: '#',
    tabFilter: 'all'
  },
  {
    image: 'https://images.unsplash.com/photo-1643798878303-d439b48bbc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '18. září 2025',
    category: 'Naše tipy',
    title: 'Vyzkoušejte virtuální kartu MultiSport zdarma',
    badge: { text: 'Benefity', variant: 'blue' },
    href: '#',
    tabFilter: 'all'
  }
];

// Articles for "Z mého odboru" (Odbor údržby a oprav)
const defaultDepartmentArticles: NewsArticle[] = [
  {
    image: 'https://images.unsplash.com/photo-1643798878303-d439b48bbc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '20. září 2025',
    category: 'Aktuálně z ČD',
    title: 'Nové diagnostické zařízení pro kontrolu brzdových systémů v provozu',
    description: 'Od příštího měsíce budou všechna depa vybavena moderním diagnostickým nástrojem pro rychlou kontrolu stavu brzdových systémů. Školení pro techniky proběhne v říjnu.',
    badge: { text: 'Údržba a opravy', variant: 'green' },
    href: '#',
    tabFilter: 'department'
  },
  {
    image: 'https://images.unsplash.com/photo-1676018367194-64a85fde3389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '18. září 2025',
    category: 'Aktuálně z ČD',
    title: 'Aktualizace postupů pro údržbu klimatizačních jednotek',
    description: 'S příchodem nové generace vlaků RegioPanter přichází i aktualizované postupy pro údržbu klimatizačních systémů. Všechny technické manuály jsou k dispozici v intranetu.',
    badge: { text: 'Údržba a opravy', variant: 'green' },
    href: '#',
    tabFilter: 'department'
  },
  {
    image: 'https://images.unsplash.com/photo-1633805085907-3942402fff77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '17. září 2025',
    category: 'Příběhy zaměstnanců',
    title: 'Úspěšně dokončena revize všech elektrických jednotek 471 na depu',
    description: 'Tým techniků dokončil komplexní revizi všech jednotek řady 471. Vozidla jsou připravena na zimní provoz a splňují všechny bezpečnostní normy.',
    badge: { text: 'Údržba a opravy', variant: 'green' },
    href: '#',
    tabFilter: 'department'
  },
  {
    image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '15. září 2025',
    category: 'Naše tipy',
    title: 'Zápis z odborné konference o údržbě kolejových vozidel 2025',
    description: 'V Praze se konala každoroční konference zaměřená na moderní trendy v údržbě a opravách. Hlavním tématem byly prediktivní diagnostické metody a využití AI v údržbě.',
    badge: { text: 'Údržba a opravy', variant: 'green' },
    href: '#',
    tabFilter: 'department'
  }
];

// Articles for "Z mého regionu" (Plzeň)
const defaultRegionArticles: NewsArticle[] = [
  {
    image: 'https://images.unsplash.com/photo-1659136021008-1ed2f7ddfe60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '20. září 2025',
    category: 'Z regionů',
    title: 'Depo kolejových vozidel Plzeň slaví 50 let provozu',
    description: 'Naše depo letos oslaví významné výročí - 50 let od svého založení. Pro zaměstnance připravujeme speciální den otevřených dveří pro rodiny a slavnostní večer.',
    badge: { text: 'Plzeň', variant: 'orange' },
    href: '#',
    tabFilter: 'region'
  },
  {
    image: 'https://images.unsplash.com/photo-1633805085907-3942402fff77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '19. září 2025',
    category: 'Z regionů',
    title: 'Nové parkovací místa pro zaměstnance u depa v Plzni',
    description: 'Díky spolupráci s městem Plzeň se podařilo vybudovat 40 nových parkovacích míst v bezprostřední blízkosti depa. Místa budou k dispozici od 1. října.',
    badge: { text: 'Plzeň', variant: 'orange' },
    href: '#',
    tabFilter: 'region'
  },
  {
    image: 'https://images.unsplash.com/photo-1643798878303-d439b48bbc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '18. září 2025',
    category: 'Z regionů',
    title: 'Plzeňské depo získalo ocenění za bezpečnost práce 2025',
    description: 'Díky systematickému přístupu k BOZP a pravidelným školením se naše depo stalo nejbezpečnějším pracovištěm v kategorii údržby kolejových vozidel v celé ČR.',
    badge: { text: 'Plzeň', variant: 'orange' },
    href: '#',
    tabFilter: 'region'
  },
  {
    image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    date: '16. září 2025',
    category: 'Z regionů',
    title: 'Rozšíření kapacity školícího střediska v Plzni',
    description: 'Díky rostoucímu zájmu o technická školení jsme rozšířili kapacitu našeho školícího střediska. Nové učebny umožní školit až 30 techniků současně.',
    badge: { text: 'Plzeň', variant: 'orange' },
    href: '#',
    tabFilter: 'region'
  }
];

export const FeaturedNewsSection: React.FC<FeaturedNewsSectionProps> = ({
  title = 'Doporučené novinky',
  allArticles = defaultAllArticles,
  departmentArticles = defaultDepartmentArticles,
  regionArticles = defaultRegionArticles,
  tabs = [
    { id: 'all', label: 'Všechny' },
    { id: 'department', label: 'Z mého odboru' },
    { id: 'region', label: 'Z mého regionu' }
  ],
  defaultActiveTab = 'all',
  onTabChange,
  viewAllText = 'Zobrazit všechny',
  onViewAll,
  className = '',
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);

  // Handle tab changes
  const handleTabChange = React.useCallback((tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  }, [onTabChange]);

  // Get articles based on active tab
  const getArticlesForTab = React.useCallback(() => {
    switch (activeTab) {
      case 'department':
        return departmentArticles;
      case 'region':
        return regionArticles;
      case 'all':
      default:
        return allArticles;
    }
  }, [activeTab, allArticles, departmentArticles, regionArticles]);

  const displayedArticles = getArticlesForTab();

  return (
    <div 
      className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${className}`} 
      data-name="News"
    >
      <PageBlockHeader
        title={title}
        tabs={tabs}
        defaultActiveTab={defaultActiveTab}
        onTabChange={handleTabChange}
        actions={
          <CustomButton 
            variant="link-color" 
            size={PAGE_BLOCK_HEADER_BUTTON_SIZE}
            onClick={onViewAll}
            rightIcon={<LucideChevronRight className="size-[20px]" />}
          >
            {viewAllText}
          </CustomButton>
        }
      />
      <div className="bg-white relative shrink-0 w-full" data-name="Content">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-start p-[16px] sm:p-[24px] relative w-full">
            {displayedArticles.map((article, index) => (
              <NewsArticleCard
                key={`${activeTab}-${index}`}
                image={article.image}
                date={article.date}
                category={article.category}
                title={article.title}
                description={article.description}
                badge={article.badge}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
