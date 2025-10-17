import * as React from 'react';
import { PageTemplate } from './ui/page-template';
import {
  ShowcaseLayout,
  ShowcaseSidebar,
  ShowcaseContent,
  ShowcaseHeader,
  ShowcaseSection,
  ShowcaseCard,
  ShowcaseSectionContent,
  useShowcaseScroll
} from './ui/showcase';
import { showcaseContent } from '../content/showcase-content';

// Component Imports
import { CustomButton } from './ui/custom-button';
import { ContentCard } from './ui/content-card';
import { NewsArticleCard } from './ui/news-article-card';
import { VideoArticleCard } from './ui/video-article-card';
import { EventCard } from './ui/event-card';
import { NotificationCard } from './ui/notification-card';
import { LinkCard, LinkCardIcon } from './ui/link-card';
import { PageBlockHeader } from './ui/page-block-header';
import { PageHeader } from './ui/page-header';
import { HeaderNavButton } from './ui/header-nav-button';
import { UserNavButton } from './ui/user-nav-button';
import { NotificationBadge } from './NotificationBadge';
import { MegaMenuContainer, MegaMenu, defaultMegaMenusData } from './ui/mega-menu';
import { DropdownMenuItem, DropdownMenuDivider } from './ui/dropdown-menu-item';
import { SearchInput, HeaderSearchInput } from './ui/search-input';
import { User, Settings, LogOut, Newspaper, Calendar } from 'lucide-react';
import { HorizontalTabs } from './ui/horizontal-tabs';
import { SecondaryTabs } from './ui/secondary-tabs';
import { BannerCarousel } from './ui/banner-carousel';
import { ImagePlaceholder } from './ui/image-placeholder';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Textarea } from './ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { ContactCard } from './ui/contact-card';
import { FileItem } from './ui/file-item';
import { QuickLink } from './ui/quick-link';
import { DepartmentBanner } from './ui/department-banner';
import { MyDepartmentWidget } from './ui/my-department-widget';
import { MyContactsWidget } from './ui/my-contacts-widget';
import { MyDocumentsWidget } from './ui/my-documents-widget';
import { RightSidebar } from './ui/sidebar-right';
import { sidebarWidgets as sidebarData } from '../content/sidebar-widgets';

// Icon Imports
import {
  Home,
  FileText,
  Calendar,
  Video,
  Bell,
  Link as LinkIcon,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Share2,
  AlertCircle,
  CheckCircle,
  Info,
  X
} from 'lucide-react';

export function ComponentsShowcase() {
  const { activeSection, scrollToSection } = useShowcaseScroll('buttons');
  const { sections } = showcaseContent.components;

  return (
    <>
      <PageHeader 
        title="Components Showcase"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Showcase', href: '#' },
          { label: 'Components' }
        ]}
      />
      <ShowcaseLayout>
        <ShowcaseSidebar
          title="Components"
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <ShowcaseContent>
          {/* Buttons Section */}
          <ShowcaseSection
            id="buttons"
            title="Buttons"
            description="Button components with various variants, sizes, and states"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="CustomButton Variants">
                <div className="flex flex-wrap gap-3">
                  <CustomButton variant="primary">Primary</CustomButton>
                  <CustomButton variant="secondary">Secondary</CustomButton>
                  <CustomButton variant="tertiary">Tertiary</CustomButton>
                  <CustomButton variant="outline">Outline</CustomButton>
                  <CustomButton variant="outline-secondary">Outline Secondary</CustomButton>
                  <CustomButton variant="ghost">Ghost</CustomButton>
                  <CustomButton variant="destructive">Destructive</CustomButton>
                  <CustomButton variant="destructive-outline">Destructive Outline</CustomButton>
                  <CustomButton variant="link-color" leftIcon={<ArrowRight size={20} />}>
                    Link Color
                  </CustomButton>
                  <CustomButton variant="link">Link</CustomButton>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="CustomButton Sizes">
                <div className="flex flex-wrap items-center gap-3">
                  <CustomButton size="sm">Small</CustomButton>
                  <CustomButton size="md">Medium</CustomButton>
                  <CustomButton size="lg">Large</CustomButton>
                  <CustomButton size="xl">Extra Large</CustomButton>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="CustomButton with Icons">
                <div className="flex flex-wrap gap-3">
                  <CustomButton leftIcon={<Home size={20} />}>Left Icon</CustomButton>
                  <CustomButton rightIcon={<ArrowRight size={20} />}>Right Icon</CustomButton>
                  <CustomButton leftIcon={<Home size={20} />} rightIcon={<ArrowRight size={20} />}>
                    Both Icons
                  </CustomButton>
                  <CustomButton variant="icon" size="icon">
                    <Home size={20} />
                  </CustomButton>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="CustomButton States">
                <div className="flex flex-wrap gap-3">
                  <CustomButton>Normal</CustomButton>
                  <CustomButton disabled>Disabled</CustomButton>
                  <CustomButton loading>Loading</CustomButton>
                </div>
                <div className="mt-4">
                  <CustomButton fullWidth>Full Width</CustomButton>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="HeaderNavButton">
                <div className="bg-[color:var(--color-brand-secondary)] p-4 rounded-lg">
                  <div className="flex gap-2">
                    <HeaderNavButton>Novinky</HeaderNavButton>
                    <HeaderNavButton>Pro zaměstnance</HeaderNavButton>
                    <HeaderNavButton>Dokumenty</HeaderNavButton>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="UserNavButton">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex justify-end">
                    <UserNavButton
                      name="Jan Novotný"
                      role="Technik kolejových vozidel"
                      onEditProfile={() => alert('Upravit profil')}
                      onSettings={() => alert('Nastavení')}
                      onLogout={() => alert('Odhlásit se')}
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      Najeďte myší na tlačítko pro zobrazení menu s následujícími funkcemi:
                    </p>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Dropdown menu se zobrazuje při najetí myší (hover)</li>
                      <li>Možnosti: Upravit profil, Nastavení, Odhlásit se</li>
                      <li>Automatické zavření při odjetí myší s 150ms zpožděním</li>
                      <li>Zobrazení avataru, jména a role uživatele</li>
                      <li>Hover stav s elevation shadow</li>
                      <li>Keyboard support (Escape pro zavření)</li>
                    </ul>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="NotificationBadge">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex justify-end">
                    <NotificationBadge />
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      Najeďte myší na ikonu zvonku pro zobrazení oznámení s následujícími funkcemi:
                    </p>
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                      <li>Badge counter zobrazující počet nepřečtených oznámení</li>
                      <li>Dropdown menu se zobrazuje při najetí myší (hover)</li>
                      <li>Možnost odstranit jednotlivá oznámení křížkem</li>
                      <li>Používá globální CustomButton komponentu (variant="link-color", size="sm")</li>
                      <li>Tlačítko "Vymazat vše" pro smazání všech oznámení</li>
                      <li>Tlačítko "Zobrazit všechna oznámení" v patičce</li>
                      <li>Automatické zavření při odjetí myší s 150ms zpožděním</li>
                      <li>Používá Roboto:Medium pro nadpisy a Roboto:Regular pro text</li>
                      <li>Brand Secondary (#002664) barva pro názvy oznámení</li>
                    </ul>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="MegaMenu">
                <div className="bg-[var(--color-brand-secondary)] p-6 rounded-lg">
                  <div className="flex justify-center">
                    <MegaMenuContainer menuData={defaultMegaMenusData}>
                      <HeaderNavButton hasDropdown={true}>Novinky a média</HeaderNavButton>
                      <HeaderNavButton hasDropdown={true}>Pro zaměstnance</HeaderNavButton>
                      <HeaderNavButton hasDropdown={true}>Naše firma</HeaderNavButton>
                    </MegaMenuContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-white">
                      Najeďte myší na tlačítka pro zobrazení mega menu s následujícími funkcemi:
                    </p>
                    <ul className="text-sm text-white list-disc list-inside space-y-1">
                      <li>Dropdown mega menu se zobrazuje při najetí myší (hover)</li>
                      <li>Multi-column grid layout s různými typy sloupců</li>
                      <li>Standard columns: Menu items s ikonami a odkazy</li>
                      <li>Featured cards: Karty s obrázky a popisem</li>
                      <li>Promo cards: Propagační karty s accent stylingem</li>
                      <li>CTA cards: Call-to-action karty s gradientním pozadím</li>
                      <li>Automatické zavření při odjetí myší s 150ms zpožděním</li>
                      <li>Používá globální CSS proměnné a design tokeny</li>
                      <li>Icon support přes lucide-react</li>
                      <li>Border: var(--border) pro konzistentní styling</li>
                    </ul>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="DropdownMenuItem">
                <div className="space-y-6">
                  {/* Example 1: Standard Menu Items */}
                  <div>
                    <h4 className="mb-3">Standard Menu Items (Mega Menu Style)</h4>
                    <div className="bg-white border border-[var(--border)] rounded-lg p-1 max-w-xs">
                      <DropdownMenuItem icon="newspaper" label="Všechny novinky" href="#" iconSize="md" />
                      <DropdownMenuItem icon="zap" label="Aktuálně z ČD" href="#" iconSize="md" />
                      <DropdownMenuItem icon="calendar" label="Kalendář akcí" href="#" iconSize="md" />
                    </div>
                  </div>

                  {/* Example 2: User Menu Items */}
                  <div>
                    <h4 className="mb-3">User Menu Items (Compact Style)</h4>
                    <div className="bg-white border border-[var(--border)] rounded-lg p-1 max-w-xs">
                      <DropdownMenuItem icon={User} label="Upravit profil" onClick={() => alert('Edit Profile')} iconSize="sm" textSize="sm" />
                      <DropdownMenuItem icon={Settings} label="Nastavení" onClick={() => alert('Settings')} iconSize="sm" textSize="sm" />
                      <DropdownMenuDivider />
                      <DropdownMenuItem icon={LogOut} label="Odhlásit se" onClick={() => alert('Logout')} variant="destructive" iconSize="sm" textSize="sm" />
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Vlastnosti:</p>
                    <ul className="text-sm text-[var(--foreground-muted)] list-disc list-inside space-y-1">
                      <li>Light blue background na hover (var(--color-blue-50))</li>
                      <li>Ikony a text mění barvu na primary při hoveru</li>
                      <li>Konzistentní Lucide ikony (strokeWidth: 1.5)</li>
                      <li>Podpora pro odkazy (href) i tlačítka (onClick)</li>
                      <li>Destructive variant pro nebezpečné akce</li>
                      <li>Dvě velikosti: md (mega menu) a sm (user menu)</li>
                      <li>Globální CSS proměnné a design tokeny</li>
                      <li>Plně přístupné s ARIA rolemi</li>
                    </ul>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Button (ShadCN)">
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Cards Section */}
          <ShowcaseSection
            id="cards"
            title="Cards"
            description="Card components for displaying content like news, videos, events, and links"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="ContentCard">
                <div className="grid grid-cols-1 gap-4 max-w-2xl">
                  <ContentCard
                    variant="news"
                    image="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=400"
                    date="14. 10. 2025"
                    category="Aktuality"
                    title="Důležitá informace o novém projektu"
                    description="Krátký popis obsahu karty s obrázkem a všemi potřebnými informacemi pro uživatele."
                    href="#"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="NewsArticleCard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <NewsArticleCard
                    title="Nová strategie společnosti pro rok 2025"
                    excerpt="Představujeme hlavní pilíře naší strategie a plány do budoucna."
                    date="14. 10. 2025"
                    category="Aktuality"
                    image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
                    href="#"
                  />
                  <NewsArticleCard
                    title="Úspěšné dokončení projektu Q3"
                    excerpt="Tým dosáhl výborných výsledků a překonal všechna očekávání."
                    date="12. 10. 2025"
                    category="Projekty"
                    image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400"
                    href="#"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="VideoArticleCard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <VideoArticleCard
                    title="Rozhovor s CEO - vize společnosti"
                    duration="15:32"
                    date="10. 10. 2025"
                    thumbnail="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400"
                    href="#"
                  />
                  <VideoArticleCard
                    title="Workshop: Efektivní týmová spolupráce"
                    duration="45:18"
                    date="08. 10. 2025"
                    thumbnail="https://images.unsplash.com/photo-1552581234-26160f608093?w=400"
                    href="#"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="EventCard">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EventCard
                    title="Firemní večírek 2025"
                    date="2025-12-15"
                    time="18:00"
                    location="Grand Hotel Praha"
                    description="Tradiční vánoční setkání všech zaměstnanců s bohatým programem."
                    href="#"
                  />
                  <EventCard
                    title="Školení: Nové technologie"
                    date="2025-11-20"
                    time="09:00"
                    location="Konferenční místnost A"
                    description="Praktické workshopy zaměřené na nejnovější trendy v oboru."
                    href="#"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="LinkCard">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <LinkCard
                    title="Dokumenty"
                    href="#"
                    icon={<LinkCardIcon><FileText /></LinkCardIcon>}
                  />
                  <LinkCard
                    title="Kalendář"
                    href="#"
                    icon={<LinkCardIcon><Calendar /></LinkCardIcon>}
                  />
                  <LinkCard
                    title="Videa"
                    href="#"
                    icon={<LinkCardIcon><Video /></LinkCardIcon>}
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="NotificationCard">
                <div className="space-y-4 max-w-md">
                  <NotificationCard
                    title="Nová zpráva od vedení"
                    message="Důležité oznámení týkající se změn v organizaci."
                    time="před 5 minutami"
                    isNew
                  />
                  <NotificationCard
                    title="Schválený dokument"
                    message="Váš dokument byl schválen a je připraven ke stažení."
                    time="před 2 hodinami"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="ShadCN Card">
                <div className="max-w-sm">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content with any elements you need.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Media Components Section */}
          <ShowcaseSection
            id="media"
            title="Media Components"
            description="Components for handling images and media content"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="ImagePlaceholder">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ImagePlaceholder width={300} height={200} text="16:9 Placeholder" />
                  <ImagePlaceholder width={300} height={300} text="1:1 Placeholder" />
                  <ImagePlaceholder width={300} height={400} text="3:4 Placeholder" />
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Layout Components Section */}
          <ShowcaseSection
            id="layout"
            title="Layout Components"
            description="Components for page structure and layout"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="PageBlockHeader">
                <PageBlockHeader
                  title="Aktuality a novinky"
                  viewAllText="Zobrazit vše"
                  viewAllHref="#"
                />
              </ShowcaseCard>

              <ShowcaseCard title="BannerCarousel">
                <BannerCarousel
                  slides={[
                    {
                      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
                      title: 'Vítejte na našem intranetu',
                      description: 'Váš centrální bod pro všechny firemní informace'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
                      title: 'Nové projekty na obzoru',
                      description: 'Podívejte se na naše nejnovější iniciativy'
                    }
                  ]}
                />
              </ShowcaseCard>

              <ShowcaseCard title="Header & Footer">
                <p className="text-sm text-muted-foreground">
                  Header and Footer components are visible at the top and bottom of this page.
                </p>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Sidebar Widgets Section */}
          <ShowcaseSection
            id="sidebar"
            title="Sidebar Widgets"
            description="Reusable sidebar components and widgets"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="ContactCard">
                <div className="max-w-xs">
                  <ContactCard
                    name="Jan Novák"
                    position="Vedoucí oddělení IT"
                    email="jan.novak@company.cz"
                    phone="+420 123 456 789"
                    avatar="https://i.pravatar.cc/150?img=12"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="FileItem">
                <div className="space-y-2 max-w-sm">
                  <FileItem
                    name="Prezentace Q4 2025.pptx"
                    type="PDF"
                    date="14. 10. 2025"
                    href="#"
                  />
                  <FileItem
                    name="Rozpočet 2026.xlsx"
                    type="XLSX"
                    date="12. 10. 2025"
                    href="#"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="QuickLink">
                <div className="space-y-2 max-w-sm">
                  <QuickLink href="#" icon={<FileText size={16} />}>
                    Dokumenty
                  </QuickLink>
                  <QuickLink href="#" icon={<Calendar size={16} />}>
                    Kalendář událostí
                  </QuickLink>
                  <QuickLink href="#" icon={<BookOpen size={16} />}>
                    Firemní knihovna
                  </QuickLink>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="DepartmentBanner">
                <div className="max-w-sm">
                  <DepartmentBanner
                    title="IT oddělení"
                    description="Technická podpora a vývoj"
                    image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400"
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="My Department Widget">
                <div className="max-w-sm">
                  <MyDepartmentWidget
                    title={sidebarData.myDepartment.title}
                    banner={{
                      image: sidebarData.myDepartment.banner.image,
                      departmentName: sidebarData.myDepartment.banner.departmentName,
                      location: sidebarData.myDepartment.banner.location,
                      icon: sidebarData.myDepartment.banner.icon,
                    }}
                    keyContacts={{
                      title: sidebarData.myDepartment.keyContacts.title,
                      contacts: sidebarData.myDepartment.keyContacts.contacts.map(contact => ({
                        id: contact.id,
                        name: contact.name,
                        position: contact.position,
                        phone: contact.phone,
                        avatar: contact.avatar,
                        badge: contact.badge,
                      })),
                    }}
                    quickLinks={{
                      title: sidebarData.myDepartment.quickLinks.title,
                      links: sidebarData.myDepartment.quickLinks.links,
                    }}
                    cta={{
                      text: sidebarData.myDepartment.cta.text,
                      href: sidebarData.myDepartment.cta.href,
                    }}
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="My Contacts Widget">
                <div className="max-w-sm">
                  <MyContactsWidget
                    title={sidebarData.myContacts.title}
                    tabs={sidebarData.myContacts.tabs}
                    defaultTab={sidebarData.myContacts.defaultTab}
                    contacts={sidebarData.myContacts.contacts.map(contact => ({
                      id: contact.id,
                      name: contact.name,
                      position: contact.position,
                      phone: contact.phone,
                      avatar: contact.avatar,
                      initials: contact.initials,
                    }))}
                    viewAll={{
                      text: sidebarData.myContacts.viewAll.text,
                      href: sidebarData.myContacts.viewAll.href,
                    }}
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="My Documents Widget">
                <div className="max-w-sm">
                  <MyDocumentsWidget
                    title={sidebarData.myDocuments.title}
                    tabs={sidebarData.myDocuments.tabs}
                    defaultTab={sidebarData.myDocuments.defaultTab}
                    files={sidebarData.myDocuments.files.map(file => ({
                      id: file.id,
                      name: file.name,
                      type: file.type as 'PDF' | 'DOC' | 'XLSX' | 'PNG' | 'JPG' | 'IMG',
                      date: file.date,
                      href: file.href,
                      badge: file.badge ? {
                        text: file.badge.text,
                        variant: file.badge.variant,
                      } : undefined,
                      isExternal: file.isExternal,
                    }))}
                    viewAll={{
                      text: sidebarData.myDocuments.viewAll.text,
                      href: sidebarData.myDocuments.viewAll.href,
                    }}
                  />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Right Sidebar (Complete)">
                <div className="max-w-sm">
                  <RightSidebar />
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Navigation Section */}
          <ShowcaseSection
            id="navigation"
            title="Navigation"
            description="Navigation components including tabs and breadcrumbs"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="HorizontalTabs">
                <HorizontalTabs
                  tabs={[
                    { id: 'tab1', label: 'Všechny', badge: 12 },
                    { id: 'tab2', label: 'Aktivní', badge: 5 },
                    { id: 'tab3', label: 'Dokončené' },
                    { id: 'tab4', label: 'Archivované', disabled: true }
                  ]}
                  activeTab="tab1"
                  onTabChange={() => {}}
                />
              </ShowcaseCard>

              <ShowcaseCard title="SecondaryTabs">
                <SecondaryTabs
                  tabs={[
                    { id: 'recent', label: 'Nedávné' },
                    { id: 'popular', label: 'Populární' },
                    { id: 'archived', label: 'Archivované' }
                  ]}
                  activeTab="recent"
                  onTabChange={() => {}}
                />
              </ShowcaseCard>

              <ShowcaseCard title="ShadCN Tabs">
                <Tabs defaultValue="account" className="w-full max-w-md">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <p className="text-sm">Account settings content</p>
                  </TabsContent>
                  <TabsContent value="password">
                    <p className="text-sm">Password settings content</p>
                  </TabsContent>
                </Tabs>
              </ShowcaseCard>

              <ShowcaseCard title="Breadcrumb">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Form Components Section */}
          <ShowcaseSection
            id="forms"
            title="Form Components"
            description="Form inputs and controls"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="SearchInput">
                <div className="space-y-6">
                  {/* Basic Search Input */}
                  <div>
                    <h4 className="mb-3">Basic Search Input</h4>
                    <SearchInput 
                      placeholder="Hledejte kolegu, dokument nebo novinku..."
                      onSearch={(value) => console.log('Search:', value)}
                    />
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="mb-3">Sizes</h4>
                    <div className="space-y-3">
                      <SearchInput 
                        size="sm"
                        placeholder="Small size..."
                        onSearch={(value) => console.log('Search:', value)}
                      />
                      <SearchInput 
                        size="md"
                        placeholder="Medium size (default)..."
                        onSearch={(value) => console.log('Search:', value)}
                      />
                      <SearchInput 
                        size="lg"
                        placeholder="Large size..."
                        onSearch={(value) => console.log('Search:', value)}
                      />
                    </div>
                  </div>

                  {/* States */}
                  <div>
                    <h4 className="mb-3">States</h4>
                    <div className="space-y-3">
                      <SearchInput 
                        placeholder="With clear button..."
                        showClearButton={true}
                        onSearch={(value) => console.log('Search:', value)}
                      />
                      <SearchInput 
                        placeholder="Loading state..."
                        isLoading={true}
                        onSearch={(value) => console.log('Search:', value)}
                      />
                      <SearchInput 
                        placeholder="Disabled state..."
                        disabled={true}
                      />
                      <SearchInput 
                        placeholder="Invalid state..."
                        isInvalid={true}
                        errorMessage="Please enter a valid search term"
                        onSearch={(value) => console.log('Search:', value)}
                      />
                    </div>
                  </div>

                  {/* Icon Position */}
                  <div>
                    <h4 className="mb-3">Icon Position</h4>
                    <div className="space-y-3">
                      <SearchInput 
                        placeholder="Icon on left (default)..."
                        iconPosition="left"
                        onSearch={(value) => console.log('Search:', value)}
                      />
                      <SearchInput 
                        placeholder="Icon on right..."
                        iconPosition="right"
                        onSearch={(value) => console.log('Search:', value)}
                      />
                    </div>
                  </div>

                  {/* Header Variant */}
                  <div>
                    <h4 className="mb-3">Header Search Input (with border)</h4>
                    <HeaderSearchInput 
                      placeholder="Hledejte kolegu, dokument nebo novinku..."
                      onSearch={(value) => console.log('Header search:', value)}
                    />
                  </div>

                  {/* Features List */}
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Vlastnosti:</p>
                    <ul className="text-sm text-[var(--foreground-muted)] list-disc list-inside space-y-1">
                      <li>Search icon with proper spacing and styling</li>
                      <li>Focus state with border color transition</li>
                      <li>Optional clear button (X) when input has value</li>
                      <li>Loading state with spinner animation</li>
                      <li>Disabled and invalid states</li>
                      <li>Three size variants (sm, md, lg)</li>
                      <li>Icon position (left or right)</li>
                      <li>Enter key triggers search</li>
                      <li>Escape key clears input and blurs</li>
                      <li>Controlled and uncontrolled modes</li>
                      <li>Full accessibility with ARIA labels</li>
                      <li>Uses global CSS variables</li>
                      <li>Consistent Lucide icons (strokeWidth: 1.67)</li>
                    </ul>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Input">
                <div className="space-y-4 max-w-sm">
                  <div>
                    <Label htmlFor="input1">Default Input</Label>
                    <Input id="input1" placeholder="Enter text..." />
                  </div>
                  <div>
                    <Label htmlFor="input2">Disabled Input</Label>
                    <Input id="input2" placeholder="Disabled" disabled />
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Textarea">
                <div className="max-w-sm">
                  <Label htmlFor="textarea">Message</Label>
                  <Textarea id="textarea" placeholder="Type your message here..." />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Checkbox">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check1" />
                    <Label htmlFor="check1">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check2" disabled />
                    <Label htmlFor="check2">Disabled checkbox</Label>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Switch">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="switch1" />
                    <Label htmlFor="switch1">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch2" disabled />
                    <Label htmlFor="switch2">Disabled switch</Label>
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Select">
                <div className="max-w-sm">
                  <Label>Choose an option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Slider">
                <div className="max-w-sm">
                  <Label>Volume</Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Label">
                <div className="space-y-2">
                  <Label>Default Label</Label>
                  <Label htmlFor="input3">Label for Input</Label>
                </div>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Feedback Components Section */}
          <ShowcaseSection
            id="feedback"
            title="Feedback Components"
            description="Components for user feedback and status indication"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="Alert">
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Badge">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Progress">
                <div className="space-y-4 max-w-sm">
                  <div>
                    <Label>25% Complete</Label>
                    <Progress value={25} className="mt-2" />
                  </div>
                  <div>
                    <Label>75% Complete</Label>
                    <Progress value={75} className="mt-2" />
                  </div>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Skeleton">
                <div className="space-y-2 max-w-sm">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Tooltip">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>

          {/* Data Display Section */}
          <ShowcaseSection
            id="data"
            title="Data Display"
            description="Components for displaying structured data"
          >
            <ShowcaseSectionContent>
              <ShowcaseCard title="Table">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Project Alpha</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>2025-10-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Project Beta</TableCell>
                      <TableCell>Completed</TableCell>
                      <TableCell>2025-09-28</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ShowcaseCard>

              <ShowcaseCard title="Avatar">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JN</AvatarFallback>
                  </Avatar>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Separator">
                <div className="space-y-4">
                  <p className="text-sm">Content above separator</p>
                  <Separator />
                  <p className="text-sm">Content below separator</p>
                </div>
              </ShowcaseCard>

              <ShowcaseCard title="Accordion">
                <Accordion type="single" collapsible className="w-full max-w-md">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match your design system.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ShowcaseCard>
            </ShowcaseSectionContent>
          </ShowcaseSection>
        </ShowcaseContent>
      </ShowcaseLayout>
    </>
  );
}
