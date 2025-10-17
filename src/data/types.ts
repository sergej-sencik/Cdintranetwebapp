/**
 * TypeScript type definitions for content JSON files
 * This ensures type safety when consuming the JSON data
 */

// ============================================================================
// META TYPES
// ============================================================================

export interface ContentMeta {
  version: string;
  lastUpdated: string;
  language: string;
  description: string;
}

// ============================================================================
// DYNAMIC CONTENT TYPES
// ============================================================================

export interface User {
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  department: string;
  workplace: string;
  region: string;
  avatar: string;
}

export interface BannerSlide {
  id: string;
  image: string;
  title: string;
  description: string | null;
  link: string | null;
  order: number;
}

export interface Badge {
  text: string;
  variant: 'blue' | 'orange' | 'green' | 'purple';
}

export interface EventBadge {
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

export interface NewsArticle {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
  description: string | null;
  badge: Badge | null;
  href: string;
}

export interface NewsContent {
  all: NewsArticle[];
  department: NewsArticle[];
  region: NewsArticle[];
}

export interface Event {
  id: string;
  dateDay: string;
  dateMonth: string;
  title: string;
  time: string;
  location: string;
  badge: EventBadge | null;
  href: string;
}

export interface Video {
  id: string;
  image: string;
  date: string;
  title: string;
  description: string;
  duration: string | null;
  href: string;
}

export interface Notification {
  id: string;
  type: 'alert' | 'info' | 'success' | 'warning';
  icon: string;
  title: string;
  description: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  read: boolean;
  href: string;
}

export interface DynamicContent {
  meta: ContentMeta;
  user: User;
  banners: BannerSlide[];
  news: NewsContent;
  events: Event[];
  videos: Video[];
  notifications: Notification[];
}

// ============================================================================
// STATIC CONTENT TYPES
// ============================================================================

export interface CommonButtons {
  viewAll: string;
  readMore: string;
  save: string;
  cancel: string;
  close: string;
  submit: string;
  edit: string;
  delete: string;
  confirm: string;
  back: string;
  next: string;
  previous: string;
  search: string;
  filter: string;
  sort: string;
  export: string;
  import: string;
  download: string;
  upload: string;
  print: string;
}

export interface CommonLabels {
  loading: string;
  noResults: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  required: string;
  optional: string;
  all: string;
  none: string;
  other: string;
  more: string;
  less: string;
  new: string;
  draft: string;
  published: string;
}

export interface CommonTime {
  today: string;
  yesterday: string;
  tomorrow: string;
  thisWeek: string;
  thisMonth: string;
  thisYear: string;
  minutes: string;
  hours: string;
  days: string;
  weeks: string;
  months: string;
  years: string;
  ago: string;
  in: string;
}

export interface CommonValidation {
  required: string;
  invalidEmail: string;
  invalidPhone: string;
  tooShort: string;
  tooLong: string;
  invalidFormat: string;
  passwordMismatch: string;
  minLength: string;
  maxLength: string;
}

export interface CommonContent {
  buttons: CommonButtons;
  labels: CommonLabels;
  time: CommonTime;
  validation: CommonValidation;
}

export interface HeaderNavigation {
  home: string;
  newsAndMedia: string;
  forEmployees: string;
  ourCompany: string;
  documents: string;
  support: string;
  toolsAndApps: string;
  contacts: string;
}

export interface HeaderSearch {
  placeholder: string;
  noResults: string;
  suggestions: string;
  recentSearches: string;
  popularSearches: string;
}

export interface HeaderUserMenu {
  profile: string;
  settings: string;
  notifications: string;
  messages: string;
  help: string;
  logout: string;
  greeting: string;
  myAccount: string;
  preferences: string;
  security: string;
}

export interface HeaderNotifications {
  title: string;
  markAsRead: string;
  markAllAsRead: string;
  clearAll: string;
  viewAll: string;
  noNotifications: string;
  unreadCount: string;
}

export interface HeaderQuickLinks {
  title: string;
  vacation: string;
  scheduling: string;
  documents: string;
  phoneBook: string;
  benefits: string;
  training: string;
  payroll: string;
  'it-support': string;
}

export interface HeaderContent {
  navigation: HeaderNavigation;
  search: HeaderSearch;
  userMenu: HeaderUserMenu;
  notifications: HeaderNotifications;
  quickLinks: HeaderQuickLinks;
}

export interface FooterSection {
  title: string;
  about?: string;
  history?: string;
  management?: string;
  structure?: string;
  careers?: string;
  press?: string;
  intranet?: string;
  email?: string;
  benefits?: string;
  training?: string;
  union?: string;
  safety?: string;
  regulations?: string;
  forms?: string;
  manuals?: string;
  procedures?: string;
  policies?: string;
  gdpr?: string;
  helpDesk?: string;
  faq?: string;
  technicalSupport?: string;
  feedback?: string;
  reportProblem?: string;
  contact?: string;
}

export interface FooterLegal {
  copyright: string;
  privacyPolicy: string;
  termsOfUse: string;
  accessibility: string;
  cookies: string;
}

export interface FooterContact {
  phone: string;
  email: string;
  address: string;
  headquarters: string;
}

export interface FooterContent {
  sections: {
    company: FooterSection;
    forEmployees: FooterSection;
    documents: FooterSection;
    support: FooterSection;
  };
  legal: FooterLegal;
  contact: FooterContact;
}

export interface MegaMenuSection {
  title: string;
  [key: string]: string;
}

export interface MegaMenuContent {
  newsAndMedia: MegaMenuSection;
  forEmployees: MegaMenuSection;
  ourCompany: MegaMenuSection;
  documents: MegaMenuSection;
  support: MegaMenuSection;
  toolsAndApps: MegaMenuSection;
  contacts: MegaMenuSection;
}

export interface BreadcrumbsContent {
  home: string;
  separator: string;
}

export interface PaginationContent {
  previous: string;
  next: string;
  first: string;
  last: string;
  page: string;
  of: string;
  itemsPerPage: string;
}

export interface NavigationContent {
  megaMenu: MegaMenuContent;
  breadcrumbs: BreadcrumbsContent;
  pagination: PaginationContent;
}

export interface NewsTabs {
  all: string;
  department: string;
  region: string;
}

export interface NewsCategories {
  fromCD: string;
  fromRegions: string;
  ourTips: string;
  employeeStories: string;
}

export interface NewsSection {
  title: string;
  tabs: NewsTabs;
  categories: NewsCategories;
  noArticles: string;
  loadMore: string;
  viewAll: string;
}

export interface EventsSection {
  title: string;
  noEvents: string;
  viewAll: string;
  addToCalendar: string;
  register: string;
  moreInfo: string;
  location: string;
  time: string;
  organizer: string;
  capacity: string;
  registered: string;
}

export interface VideosSection {
  title: string;
  noVideos: string;
  viewAll: string;
  watchNow: string;
  duration: string;
  views: string;
  published: string;
}

export interface BannerSection {
  previous: string;
  next: string;
  pause: string;
  play: string;
  slideOf: string;
}

export interface NotificationsSection {
  title: string;
  noNotifications: string;
  markAsRead: string;
  dismiss: string;
}

export interface QuickAccessSection {
  title: string;
  customize: string;
}

export interface SectionsContent {
  news: NewsSection;
  events: EventsSection;
  videos: VideosSection;
  banner: BannerSection;
  notifications: NotificationsSection;
  quickAccess: QuickAccessSection;
}

export interface SearchForm {
  placeholder: string;
  submit: string;
  clear: string;
  filters: string;
  sortBy: string;
  showResults: string;
}

export interface ContactForm {
  title: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  send: string;
  success: string;
  error: string;
}

export interface LoginForm {
  title: string;
  username: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  login: string;
  logout: string;
}

export interface ProfileForm {
  title: string;
  personalInfo: string;
  contactInfo: string;
  jobInfo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  workplace: string;
  manager: string;
  employeeId: string;
  startDate: string;
}

export interface FeedbackForm {
  title: string;
  rating: string;
  comment: string;
  submit: string;
  thankYou: string;
}

export interface FormsContent {
  search: SearchForm;
  contact: ContactForm;
  login: LoginForm;
  profile: ProfileForm;
  feedback: FeedbackForm;
}

export interface AriaLabels {
  mainNavigation: string;
  userMenu: string;
  searchForm: string;
  carousel: string;
  previousSlide: string;
  nextSlide: string;
  pauseCarousel: string;
  playCarousel: string;
  goToSlide: string;
  openMenu: string;
  closeMenu: string;
  toggleMenu: string;
  openNotifications: string;
  closeDialog: string;
  loading: string;
  newWindow: string;
  externalLink: string;
  currentPage: string;
  pageOf: string;
}

export interface ScreenReaderLabels {
  skipToContent: string;
  skipToNavigation: string;
  skipToFooter: string;
}

export interface AccessibilityContent {
  aria: AriaLabels;
  screenReader: ScreenReaderLabels;
}

export interface ErrorContent {
  title: string;
  message: string;
  retry?: string;
  goHome?: string;
}

export interface ErrorsContent {
  general: ErrorContent;
  '404': ErrorContent;
  '403': ErrorContent;
  '500': ErrorContent;
  network: ErrorContent;
}

export interface PageHeaderContent {
  greeting: string;
  dateFormat: string;
}

export interface CarouselConfig {
  autoPlayInterval: number;
  transitionDuration: number;
}

export interface StaticContent {
  meta: ContentMeta;
  common: CommonContent;
  header: HeaderContent;
  footer: FooterContent;
  navigation: NavigationContent;
  sections: SectionsContent;
  forms: FormsContent;
  accessibility: AccessibilityContent;
  errors: ErrorsContent;
  pageHeader: PageHeaderContent;
  carousel: CarouselConfig;
}

// ============================================================================
// COMBINED CONTENT TYPE
// ============================================================================

export interface AllContent {
  static: StaticContent;
  dynamic: DynamicContent;
}
