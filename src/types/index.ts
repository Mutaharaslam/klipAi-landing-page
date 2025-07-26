// Global type definitions for the application

/**
 * Common component props that extend HTML attributes
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

/**
 * API Response wrapper type
 */
export interface ApiResponse<T = any> {
  data: T
  message: string
  success: boolean
  error?: string
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  meta: PaginationMeta
}

/**
 * User type definition
 */
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'user'
  createdAt: string
  updatedAt: string
}

/**
 * Navigation item type
 */
export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
  label?: string
  description?: string
}

/**
 * Site configuration type
 */
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

/**
 * Theme configuration
 */
export type Theme = 'light' | 'dark' | 'system'

/**
 * Breakpoint types for responsive design
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

/**
 * Form field error type
 */
export interface FieldError {
  message: string
  type: string
}

/**
 * Form state type
 */
export interface FormState<T = Record<string, any>> {
  values: T
  errors: Record<keyof T, FieldError | undefined>
  touched: Record<keyof T, boolean>
  isSubmitting: boolean
  isValid: boolean
}

/**
 * Modal props type
 */
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Toast notification type
 */
export interface Toast {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

/**
 * Loading state type
 */
export interface LoadingState {
  isLoading: boolean
  error: string | null
  data: any
}

/**
 * Search params type for URL search parameters
 */
export interface SearchParams {
  [key: string]: string | string[] | undefined
}

/**
 * Page props type for Next.js pages
 */
export interface PageProps {
  params: { [key: string]: string }
  searchParams: SearchParams
}

/**
 * Layout props type
 */
export interface LayoutProps {
  children: React.ReactNode
  params?: { [key: string]: string }
}

/**
 * Metadata generation props
 */
export interface MetadataProps {
  params: { [key: string]: string }
  searchParams: SearchParams
}

/**
 * Feature flag type
 */
export interface FeatureFlag {
  key: string
  enabled: boolean
  description?: string
  rolloutPercentage?: number
}

/**
 * Analytics event type
 */
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  userId?: string
  timestamp?: Date
}

/**
 * SEO metadata type
 */
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}
