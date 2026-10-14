/**
 * Centralized Design Tokens for the Landing Page
 * Allows quick aesthetic adjustments across the entire app
 */

export const THEME_TOKENS = {
  colors: {
    // Primary Midnight Navy
    brand: {
      primary: '#0F2642',
      hover: '#183B5E',
      dark: '#091728',
      light: '#1E436C',
    },
    // Golden Celestial Accents
    accent: {
      gold: '#C5A869',
      goldLight: '#E6CD8C',
      goldDark: '#B89647',
      goldMuted: 'rgba(197, 168, 105, 0.4)',
    },
    // Canvas & Watercolor surfaces
    canvas: {
      bg: '#F4F9FD',
      surface: '#FFFFFF',
      subtle: '#F0F7FC',
      border: '#D0E4F5',
      borderSubtle: '#E2EFF8',
    },
    // Text Hierarchy
    text: {
      primary: '#0F2642',
      secondary: '#2E4F73',
      muted: '#52779D',
      light: '#C9E5F8',
    },
    // Status
    success: '#2E8B57',
    error: '#DC2626',
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  borders: {
    radius: {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      full: 'rounded-full',
    },
  },
  shadows: {
    card: 'shadow-md hover:shadow-lg transition-shadow',
    prominent: 'shadow-xl hover:shadow-2xl transition-shadow',
  },
} as const;
