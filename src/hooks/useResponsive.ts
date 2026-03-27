import { useState, useEffect } from 'react';

export type ViewportSize = 'desktop' | 'tablet' | 'mobile' | 'smallMobile';

export interface ResponsiveConfig {
  size: ViewportSize;
  width: number;
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  isSmallMobile: boolean;
}

const BREAKPOINTS = {
  desktop: 1440,
  tablet: 820,
  mobile: 480,
  smallMobile: 420,
};

export function useResponsive(): ResponsiveConfig {
  const [config, setConfig] = useState<ResponsiveConfig>(() => getResponsiveConfig());

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return config;
}

function getResponsiveConfig(): ResponsiveConfig {
  const width = window.innerWidth;

  let size: ViewportSize;
  if (width <= BREAKPOINTS.smallMobile) {
    size = 'smallMobile';
  } else if (width <= BREAKPOINTS.mobile) {
    size = 'mobile';
  } else if (width <= BREAKPOINTS.tablet) {
    size = 'tablet';
  } else {
    size = 'desktop';
  }

  return {
    size,
    width,
    isDesktop: size === 'desktop',
    isTablet: size === 'tablet',
    isMobile: size === 'mobile' || size === 'smallMobile',
    isSmallMobile: size === 'smallMobile',
  };
}

export const EllipseConfig: Record<ViewportSize, {
  width: string;
  height: string;
  left: string;
  top: string;
  translateX: string;
  translateY: string;
}> = {
  desktop: {
    width: '25rem',
    height: '30rem',
    left: '2.5rem',
    top: '10%',
    translateX: '-50px',
    translateY: '-70px',
  },
  tablet: {
    width: '20rem',
    height: '30rem',
    left: '20rem',
    top: '-10%',
    translateX: '-40px',
    translateY: '-60px',
  },
  mobile: {
    width: '10rem',
    height: '20rem',
    left: '10rem',
    top: '-25%',
    translateX: '-40px',
    translateY: '-50px',
  },
  smallMobile: {
    width: '10rem',
    height: '18rem',
    left: '10rem',
    top: '-25%',
    translateX: '-30px',
    translateY: '-40px',
  },
};

export const TitleConfig: Record<ViewportSize, {
  fontSize: string;
  subtitleFontSize: string;
  padding: string;
}> = {
  desktop: {
    fontSize: '4.5rem',
    subtitleFontSize: '0.875rem',
    padding: '2.5rem 4rem',
  },
  tablet: {
    fontSize: '3rem',
    subtitleFontSize: '0.8rem',
    padding: '2rem',
  },
  mobile: {
    fontSize: '1.5rem',
    subtitleFontSize: '0.75rem',
    padding: '1rem',
  },
  smallMobile: {
    fontSize: '1.25rem',
    subtitleFontSize: '0.7rem',
    padding: '0.75rem',
  },
};

export const ButtonConfig: Record<ViewportSize, {
  padding: string;
  fontSize: string;
  width: string;
}> = {
  desktop: {
    padding: '0.875rem 2rem',
    fontSize: '0.875rem',
    width: 'auto',
  },
  tablet: {
    padding: '0.75rem 1.5rem',
    fontSize: '0.8rem',
    width: 'auto',
  },
  mobile: {
    padding: '0.65rem 1.25rem',
    fontSize: '0.75rem',
    width: '50%',
  },
  smallMobile: {
    padding: '0.5rem 1rem',
    fontSize: '0.7rem',
    width: '40%',
  },
};

export const GridConfig: Record<ViewportSize, {
  columns: number;
  gap: string;
}> = {
  desktop: {
    columns: 4,
    gap: '1.5rem',
  },
  tablet: {
    columns: 2,
    gap: '0.75rem',
  },
  mobile: {
    columns: 2,
    gap: '0.75rem',
  },
  smallMobile: {
    columns: 2,
    gap: '0.5rem',
  },
};

export const TrendingSectionConfig: Record<ViewportSize, {
  padding: string;
  titleFontSize: string;
  categoryMinHeight: string;
  categoryNameFontSize: string;
  contentPaddingLeft: string;
}> = {
  desktop: {
    padding: '3rem 2rem',
    titleFontSize: '2rem',
    categoryMinHeight: '200px',
    categoryNameFontSize: '1rem',
    contentPaddingLeft: '-2rem',
  },
  tablet: {
    padding: '2rem 1rem',
    titleFontSize: '1.5rem',
    categoryMinHeight: '160px',
    categoryNameFontSize: '0.875rem',
    contentPaddingLeft: '0',
  },
  mobile: {
    padding: '2rem 1rem',
    titleFontSize: '1.5rem',
    categoryMinHeight: '160px',
    categoryNameFontSize: '0.875rem',
    contentPaddingLeft: '0',
  },
  smallMobile: {
    padding: '1.5rem 0.75rem',
    titleFontSize: '1.25rem',
    categoryMinHeight: '140px',
    categoryNameFontSize: '0.8rem',
    contentPaddingLeft: '0',
  },
};

export const InputConfig: Record<ViewportSize, {
  padding: string;
  fontSize: string;
  minHeight: string;
  labelFontSize: string;
}> = {
  desktop: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    minHeight: '2.5rem',
    labelFontSize: '0.875rem',
  },
  tablet: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    minHeight: '2.5rem',
    labelFontSize: '0.875rem',
  },
  mobile: {
    padding: '0.65rem 0.8rem',
    fontSize: '0.95rem',
    minHeight: '2.25rem',
    labelFontSize: '0.85rem',
  },
  smallMobile: {
    padding: '0.6rem 0.7rem',
    fontSize: '0.9rem',
    minHeight: '2rem',
    labelFontSize: '0.8rem',
  },
};

export const ButtonSizeConfig: Record<ViewportSize, {
  small: { padding: string; fontSize: string; minHeight: string };
  medium: { padding: string; fontSize: string; minHeight: string };
  large: { padding: string; fontSize: string; minHeight: string };
  default: { minHeight: string };
}> = {
  desktop: {
    default: { minHeight: '2.5rem' },
    small: { padding: '0.5rem 1rem', fontSize: '0.875rem', minHeight: '2rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem', minHeight: '2.5rem' },
    large: { padding: '1rem 2rem', fontSize: '1.125rem', minHeight: '3rem' },
  },
  tablet: {
    default: { minHeight: '2.25rem' },
    small: { padding: '0.4rem 0.8rem', fontSize: '0.85rem', minHeight: '1.75rem' },
    medium: { padding: '0.65rem 1.25rem', fontSize: '0.95rem', minHeight: '2.25rem' },
    large: { padding: '0.85rem 1.75rem', fontSize: '1rem', minHeight: '2.75rem' },
  },
  mobile: {
    default: { minHeight: '2rem' },
    small: { padding: '0.35rem 0.7rem', fontSize: '0.8rem', minHeight: '1.75rem' },
    medium: { padding: '0.55rem 1rem', fontSize: '0.9rem', minHeight: '2rem' },
    large: { padding: '0.75rem 1.5rem', fontSize: '0.95rem', minHeight: '2.5rem' },
  },
  smallMobile: {
    default: { minHeight: '1.8rem' },
    small: { padding: '0.3rem 0.6rem', fontSize: '0.75rem', minHeight: '1.6rem' },
    medium: { padding: '0.45rem 0.8rem', fontSize: '0.85rem', minHeight: '1.8rem' },
    large: { padding: '0.6rem 1.2rem', fontSize: '0.9rem', minHeight: '2rem' },
  },
};

export const MainLayoutConfig: Record<ViewportSize, {
  headerPadding: string;
  logoFontSize: string;
  navLinkPadding: string;
  navLinkFontSize: string;
  mainPadding: string;
  navbarGap: string;
  navbarDirection: 'row' | 'column';
  navbarPaddingLeft: string;
  navbarWidth: string;
}> = {
  desktop: {
    headerPadding: '1.5rem 2rem',
    logoFontSize: '1.5rem',
    navLinkPadding: '0.5rem 1rem',
    navLinkFontSize: '1rem',
    mainPadding: '0.5rem',
    navbarGap: '2rem',
    navbarDirection: 'row',
    navbarPaddingLeft: '15rem',
    navbarWidth: '75%',
  },
  tablet: {
    headerPadding: '1rem 1rem',
    logoFontSize: '1.25rem',
    navLinkPadding: '0.35rem 0.7rem',
    navLinkFontSize: '0.85rem',
    mainPadding: '1rem',
    navbarGap: '0.75rem',
    navbarDirection: 'row',
    navbarPaddingLeft: '0.5rem',
    navbarWidth: '100%',
  },
  mobile: {
    headerPadding: '0.75rem 1rem',
    logoFontSize: '1.25rem',
    navLinkPadding: '0.35rem 0.7rem',
    navLinkFontSize: '0.85rem',
    mainPadding: '1rem',
    navbarGap: '1rem',
    navbarDirection: 'column',
    navbarPaddingLeft: '0',
    navbarWidth: '100%',
  },
  smallMobile: {
    headerPadding: '0.5rem',
    logoFontSize: '1rem',
    navLinkPadding: '0.25rem 0.5rem',
    navLinkFontSize: '0.8rem',
    mainPadding: '0.75rem',
    navbarGap: '0.75rem',
    navbarDirection: 'column',
    navbarPaddingLeft: '0',
    navbarWidth: '100%',
  },
};

export const HomeConfig: Record<ViewportSize, {
  containerPadding: string;
  wrapperPaddingLeft: string;
  layoutCardJustifyContent: string;
}> = {
  desktop: {
    containerPadding: '1rem',
    wrapperPaddingLeft: '10rem',
    layoutCardJustifyContent: 'flex-start',
  },
  tablet: {
    containerPadding: '0.5rem 0.75rem',
    wrapperPaddingLeft: '1rem',
    layoutCardJustifyContent: 'center',
  },
  mobile: {
    containerPadding: '0.5rem 1rem',
    wrapperPaddingLeft: '2rem',
    layoutCardJustifyContent: 'flex-end',
  },
  smallMobile: {
    containerPadding: '0.25rem 0.5rem',
    wrapperPaddingLeft: '1rem',
    layoutCardJustifyContent: 'center',
  },
};

export const LayoutCardConfig: Record<ViewportSize, {
  flexDirection: 'row' | 'column';
  colLeftWidth: string;
  colMidWidth: string;
  colRightWidth: string;
  colLeftMinHeight: string;
  colMidMinHeight: string;
  colRightMinHeight: string;
  colRightJustifyContent: string;
  colRightPadding: string;
  heroImageHeight: string;
  heroTitleSize: string;
  badgePadding: string;
  countdownFontSize: string;
  countdownPadding: string;
}> = {
  desktop: {
    flexDirection: 'row',
    colLeftWidth: '33.33%',
    colMidWidth: '33.33%',
    colRightWidth: '33.33%',
    colLeftMinHeight: 'auto',
    colMidMinHeight: 'auto',
    colRightMinHeight: 'auto',
    colRightJustifyContent: 'flex-start',
    colRightPadding: '2rem',
    heroImageHeight: '500px',
    heroTitleSize: '2rem',
    badgePadding: '1.5rem 2.5rem 1.5rem 4rem',
    countdownFontSize: '1.5rem',
    countdownPadding: '1rem 2rem',
  },
  tablet: {
    flexDirection: 'column',
    colLeftWidth: '100%',
    colMidWidth: '100%',
    colRightWidth: '100%',
    colLeftMinHeight: 'auto',
    colMidMinHeight: '300px',
    colRightMinHeight: 'auto',
    colRightJustifyContent: 'center',
    colRightPadding: '1rem',
    heroImageHeight: '250px',
    heroTitleSize: '1.25rem',
    badgePadding: '1rem 1.5rem 1rem 2.5rem',
    countdownFontSize: '1.1rem',
    countdownPadding: '0.75rem 1.25rem',
  },
  mobile: {
    flexDirection: 'column',
    colLeftWidth: '100%',
    colMidWidth: '100%',
    colRightWidth: '100%',
    colLeftMinHeight: 'auto',
    colMidMinHeight: '350px',
    colRightMinHeight: 'auto',
    colRightJustifyContent: 'center',
    colRightPadding: '0.5rem',
    heroImageHeight: '180px',
    heroTitleSize: '1.5rem',
    badgePadding: '1rem 1.5rem 1rem 3rem',
    countdownFontSize: '1.2rem',
    countdownPadding: '0.75rem 1.5rem',
  },
  smallMobile: {
    flexDirection: 'column',
    colLeftWidth: '100%',
    colMidWidth: '100%',
    colRightWidth: '100%',
    colLeftMinHeight: '250px',
    colMidMinHeight: '300px',
    colRightMinHeight: 'auto',
    colRightJustifyContent: 'center',
    colRightPadding: '0.75rem',
    heroImageHeight: '150px',
    heroTitleSize: '1.25rem',
    badgePadding: '0.75rem 1rem 0.75rem 2.5rem',
    countdownFontSize: '1rem',
    countdownPadding: '0.5rem 1rem',
  },
};

export const AuthPageConfig: Record<ViewportSize, {
  flexDirection: 'row' | 'column';
  containerHeight: string;
  rightSideHeight: string;
  rightSideWidth: string;
  leftSideWidth: string;
  leftSidePadding: string;
}> = {
  desktop: {
    flexDirection: 'row',
    containerHeight: '100vh',
    rightSideHeight: '100%',
    rightSideWidth: '50%',
    leftSideWidth: '50%',
    leftSidePadding: '4rem 3rem',
  },
  tablet: {
    flexDirection: 'row',
    containerHeight: '100vh',
    rightSideHeight: '100%',
    rightSideWidth: '45%',
    leftSideWidth: '55%',
    leftSidePadding: '3rem 2.5rem',
  },
  mobile: {
    flexDirection: 'column',
    containerHeight: 'auto',
    rightSideHeight: '300px',
    rightSideWidth: '100%',
    leftSideWidth: '100%',
    leftSidePadding: '2rem 1.5rem',
  },
  smallMobile: {
    flexDirection: 'column',
    containerHeight: 'auto',
    rightSideHeight: '250px',
    rightSideWidth: '100%',
    leftSideWidth: '100%',
    leftSidePadding: '1.5rem 1rem',
  },
};