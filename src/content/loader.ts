/**
 * Content Loader Utility
 * Provides functions to load and access both static and dynamic content from JSON
 */

import staticData from './static.json';
import dynamicData from './dynamic.json';
import type { StaticContent, DynamicContent, AllContent } from './types';

// Type-safe content objects
export const staticContent: StaticContent = staticData as StaticContent;
export const dynamicContent: DynamicContent = dynamicData as DynamicContent;

// Combined content object
export const content: AllContent = {
  static: staticContent,
  dynamic: dynamicContent,
};

// ============================================================================
// STATIC CONTENT GETTERS
// ============================================================================

/**
 * Get all static content
 */
export function getStaticContent() {
  return staticContent;
}

/**
 * Get common UI text (buttons, labels, validation)
 */
export function getCommonText() {
  return staticContent.common;
}

/**
 * Get button labels
 */
export function getButtonLabels() {
  return staticContent.common.buttons;
}

/**
 * Get form labels and placeholders
 */
export function getFormLabels(formName?: 'search' | 'contact' | 'login' | 'profile' | 'feedback') {
  if (formName) {
    return staticContent.forms[formName];
  }
  return staticContent.forms;
}

/**
 * Get header content (navigation, search, user menu)
 */
export function getHeaderContent() {
  return staticContent.header;
}

/**
 * Get navigation labels
 */
export function getNavigationLabels() {
  return staticContent.header.navigation;
}

/**
 * Get footer content
 */
export function getFooterContent() {
  return staticContent.footer;
}

/**
 * Get mega menu content
 */
export function getMegaMenuContent() {
  return staticContent.navigation.megaMenu;
}

/**
 * Get section labels (news, events, videos)
 */
export function getSectionLabels(section?: 'news' | 'events' | 'videos' | 'banner' | 'notifications' | 'quickAccess') {
  if (section) {
    return staticContent.sections[section];
  }
  return staticContent.sections;
}

/**
 * Get accessibility labels (ARIA, screen reader)
 */
export function getAccessibilityLabels() {
  return staticContent.accessibility;
}

/**
 * Get error messages
 */
export function getErrorMessages(errorType?: '404' | '403' | '500' | 'network' | 'general') {
  if (errorType) {
    return staticContent.errors[errorType];
  }
  return staticContent.errors;
}

/**
 * Get validation messages
 */
export function getValidationMessages() {
  return staticContent.common.validation;
}

/**
 * Get carousel configuration
 */
export function getCarouselConfig() {
  return staticContent.carousel;
}

/**
 * Get page header configuration
 */
export function getPageHeaderConfig() {
  return staticContent.pageHeader;
}

/**
 * Format interpolated string (e.g., "Stránka {current} z {total}")
 * @param template - String template with placeholders
 * @param values - Object with values to replace
 */
export function formatString(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] || ''));
}

// ============================================================================
// DYNAMIC CONTENT GETTERS
// ============================================================================

/**
 * Get all dynamic content
 */
export function getDynamicContent() {
  return dynamicContent;
}

/**
 * Get user information
 */
export function getUser() {
  return dynamicContent.user;
}

/**
 * Get all banner slides
 */
export function getBanners() {
  return dynamicContent.banners;
}

/**
 * Get news articles by tab
 * @param tab - 'all', 'department', or 'region'
 */
export function getNews(tab: 'all' | 'department' | 'region') {
  return dynamicContent.news[tab];
}

/**
 * Get all news articles (all tabs)
 */
export function getAllNews() {
  return dynamicContent.news;
}

/**
 * Get upcoming events
 */
export function getEvents() {
  return dynamicContent.events;
}

/**
 * Get latest videos
 */
export function getVideos() {
  return dynamicContent.videos;
}

/**
 * Get notifications
 * @param unreadOnly - Filter to show only unread notifications
 */
export function getNotifications(unreadOnly = false) {
  if (unreadOnly) {
    return dynamicContent.notifications.filter(n => !n.read);
  }
  return dynamicContent.notifications;
}

/**
 * Get content metadata
 */
export function getMetadata() {
  return {
    static: staticContent.meta,
    dynamic: dynamicContent.meta,
  };
}

// ============================================================================
// SEARCH AND FILTER FUNCTIONS
// ============================================================================

/**
 * Get a single news article by ID
 * @param id - Article ID
 */
export function getNewsById(id: string) {
  const allArticles = [
    ...dynamicContent.news.all,
    ...dynamicContent.news.department,
    ...dynamicContent.news.region
  ];
  return allArticles.find(article => article.id === id);
}

/**
 * Get a single event by ID
 * @param id - Event ID
 */
export function getEventById(id: string) {
  return dynamicContent.events.find(event => event.id === id);
}

/**
 * Get a single video by ID
 * @param id - Video ID
 */
export function getVideoById(id: string) {
  return dynamicContent.videos.find(video => video.id === id);
}

/**
 * Search news articles by keyword
 * @param keyword - Search term
 */
export function searchNews(keyword: string) {
  const allArticles = [
    ...dynamicContent.news.all,
    ...dynamicContent.news.department,
    ...dynamicContent.news.region
  ];
  
  const lowerKeyword = keyword.toLowerCase();
  
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(lowerKeyword) ||
    article.description?.toLowerCase().includes(lowerKeyword) ||
    article.category.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * Get news articles by category
 * @param category - Category name
 */
export function getNewsByCategory(category: string) {
  const allArticles = [
    ...dynamicContent.news.all,
    ...dynamicContent.news.department,
    ...dynamicContent.news.region
  ];
  
  return allArticles.filter(article => 
    article.category === category
  );
}

/**
 * Get news articles by badge
 * @param badgeText - Badge text to filter by
 */
export function getNewsByBadge(badgeText: string) {
  const allArticles = [
    ...dynamicContent.news.all,
    ...dynamicContent.news.department,
    ...dynamicContent.news.region
  ];
  
  return allArticles.filter(article => 
    article.badge?.text === badgeText
  );
}

// ============================================================================
// COMBINED CONTENT HELPERS
// ============================================================================

/**
 * Get complete news section content (labels + data)
 */
export function getNewsSection() {
  return {
    labels: staticContent.sections.news,
    data: dynamicContent.news,
  };
}

/**
 * Get complete events section content (labels + data)
 */
export function getEventsSection() {
  return {
    labels: staticContent.sections.events,
    data: dynamicContent.events,
  };
}

/**
 * Get complete videos section content (labels + data)
 */
export function getVideosSection() {
  return {
    labels: staticContent.sections.videos,
    data: dynamicContent.videos,
  };
}

/**
 * Get complete banner section content (labels + config + data)
 */
export function getBannerSection() {
  return {
    labels: staticContent.sections.banner,
    config: staticContent.carousel,
    data: dynamicContent.banners,
  };
}

/**
 * Get complete header content (labels + user data)
 */
export function getCompleteHeader() {
  return {
    labels: staticContent.header,
    user: dynamicContent.user,
  };
}

/**
 * Get current language
 */
export function getCurrentLanguage() {
  return staticContent.meta.language;
}

/**
 * Get all content (both static and dynamic)
 */
export function getAllContent() {
  return content;
}

// Export default for convenience
export default {
  static: staticContent,
  dynamic: dynamicContent,
  getStaticContent,
  getDynamicContent,
  getAllContent,
  // Static getters
  getCommonText,
  getButtonLabels,
  getFormLabels,
  getHeaderContent,
  getNavigationLabels,
  getFooterContent,
  getMegaMenuContent,
  getSectionLabels,
  getAccessibilityLabels,
  getErrorMessages,
  getValidationMessages,
  getCarouselConfig,
  getPageHeaderConfig,
  formatString,
  // Dynamic getters
  getUser,
  getBanners,
  getNews,
  getAllNews,
  getEvents,
  getVideos,
  getNotifications,
  getMetadata,
  // Search & filter
  getNewsById,
  getEventById,
  getVideoById,
  searchNews,
  getNewsByCategory,
  getNewsByBadge,
  // Combined helpers
  getNewsSection,
  getEventsSection,
  getVideosSection,
  getBannerSection,
  getCompleteHeader,
  getCurrentLanguage,
};
