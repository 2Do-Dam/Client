// Common values
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

export const FONT_FAMILY = {
  SFPro: 'SF Pro',
  Pretendard: 'Pretendard Variable',
  Inter: 'Inter',
  Playfair: 'Playfair Display, serif',
  InterSans: 'Inter, system-ui, sans-serif',
} as const;

export const THEME = {
  colors: {
    Primary: {
      Light: '#EDF5F4',
      Light_hover: '#E4F0EE',
      Light_active: '#C7E0DC',
      Normal: '#4A9B8E',
      Normal_hover: '#438C80',
      Normal_active: '#3B7C72',
      Dark: '#38746B',
      Dark_hover: '#2C5D55',
      Dark_active: '#214640',
      Darker: '#1A3632',
    },
    Secondary: {
      Light: '#FDFBF8',
      Light_hover: '#FBF9F4',
      Light_active: '#F7F2E9',
      Normal: '#E6D5B7',
      Normal_hover: '#CFC0A5',
      Normal_active: '#B8AA92',
      Dark: '#ADA089',
      Dark_hover: '#8A806E',
      Dark_active: '#676052',
      Darker: '#514B40',
    },
    Semantic: {
      Success: {},
      Warning: {},
      Error: {},
      Info: {},
    },
    Neutral: {},
    Text: {
      Dark: '#000000',
      White: '#2B2B2F',
      Disabled: 'rgba(0, 0, 0, 0.3)',
    },
    Glass: {
      Background: 'rgba(255, 255, 255, 0.1)',
      Surface: 'rgba(255, 255, 255, 0.3)',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  typography: {
    fontFamily: [FONT_FAMILY.Pretendard, FONT_FAMILY.SFPro, FONT_FAMILY.Inter],
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
    smooth: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export type ThemeType = typeof THEME;

import '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof THEME.colors;
    spacing: typeof THEME.spacing;
    typography: typeof THEME.typography;
    borderRadius: typeof THEME.borderRadius;
    transitions: typeof THEME.transitions;
  }
}
