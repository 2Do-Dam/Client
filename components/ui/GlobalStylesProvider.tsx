'use client';

import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { THEME } from '@/styles/theme';

// 전역 스타일 프로바이더 컴포넌트
export function GlobalStylesProvider() {
  const { mode } = useTheme();

  useEffect(() => {
    // CSS 변수 설정
    const root = document.documentElement;
    
    // 라이트 모드 CSS 변수
    if (mode === 'light') {
      root.style.setProperty('--color-primary', THEME.colors.Primary.Normal);
      root.style.setProperty('--color-primary-hover', THEME.colors.Primary.Dark_hover);
      root.style.setProperty('--color-secondary', THEME.colors.Secondary.Normal);
      root.style.setProperty('--color-secondary-hover', THEME.colors.Secondary.Dark_hover);
      root.style.setProperty('--color-background', '#fff');
      root.style.setProperty('--color-background-alt', THEME.colors.Secondary.Light);
      root.style.setProperty('--color-text-primary', THEME.colors.Text.White);
      root.style.setProperty('--color-text-secondary', THEME.colors.Text.Dark);
      root.style.setProperty('--color-text-muted', THEME.colors.Text.Disabled);
      root.style.setProperty('--color-text-light', THEME.colors.Text.White);
      root.style.setProperty('--color-accent-green', THEME.colors.Primary.Normal);
      root.style.setProperty('--color-accent-peach', THEME.colors.Secondary.Normal);
      root.style.setProperty('--color-accent-purple', THEME.colors.Primary.Dark);
      root.style.setProperty('--color-accent-blue', THEME.colors.Primary.Light);
      root.style.setProperty('--color-glass-background', THEME.colors.Glass.Background);
      root.style.setProperty('--color-glass-surface', THEME.colors.Glass.Surface);
      root.style.setProperty('--color-glass-border', 'rgba(255,255,255,0.3)');
      root.style.setProperty('--shadow-soft', '0 2px 8px rgba(0,0,0,0.08)');
      root.style.setProperty('--shadow-glow', '0 0 30px rgba(74,155,142,0.2)');
      root.style.setProperty('--shadow-glass', '0 8px 32px rgba(0,0,0,0.08)');
    } else {
      // 다크 모드 CSS 변수 (다크 테마 색상으로 조정)
      root.style.setProperty('--color-primary', THEME.colors.Primary.Dark);
      root.style.setProperty('--color-primary-hover', THEME.colors.Primary.Dark_hover);
      root.style.setProperty('--color-secondary', THEME.colors.Secondary.Dark);
      root.style.setProperty('--color-secondary-hover', THEME.colors.Secondary.Dark_hover);
      root.style.setProperty('--color-background', '#18181b');
      root.style.setProperty('--color-background-alt', THEME.colors.Secondary.Darker);
      root.style.setProperty('--color-text-primary', THEME.colors.Text.White);
      root.style.setProperty('--color-text-secondary', THEME.colors.Text.Dark);
      root.style.setProperty('--color-text-muted', THEME.colors.Text.Disabled);
      root.style.setProperty('--color-text-light', THEME.colors.Text.White);
      root.style.setProperty('--color-accent-green', THEME.colors.Primary.Normal);
      root.style.setProperty('--color-accent-peach', THEME.colors.Secondary.Normal);
      root.style.setProperty('--color-accent-purple', THEME.colors.Primary.Dark);
      root.style.setProperty('--color-accent-blue', THEME.colors.Primary.Light);
      root.style.setProperty('--color-glass-background', THEME.colors.Glass.Background);
      root.style.setProperty('--color-glass-surface', THEME.colors.Glass.Surface);
      root.style.setProperty('--color-glass-border', 'rgba(255,255,255,0.1)');
      root.style.setProperty('--shadow-soft', '0 2px 8px rgba(0,0,0,0.16)');
      root.style.setProperty('--shadow-glow', '0 0 30px rgba(74,155,142,0.3)');
      root.style.setProperty('--shadow-glass', '0 8px 32px rgba(0,0,0,0.16)');
    }

    // 공통 CSS 변수 (폰트 패밀리 구조에 맞게 수정)
    root.style.setProperty('--font-family-sans', THEME.typography.fontFamily.join(', '));
    // serif, mono, display, body 등은 theme에 없으므로 제외

    // 스페이싱 변수
    Object.entries(THEME.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // 폰트 크기 변수
    Object.entries(THEME.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    // 폰트 웨이트 변수
    Object.entries(THEME.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value.toString());
    });

    // 라인 높이 변수
    Object.entries(THEME.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--line-height-${key}`, value.toString());
    });

    // 그림자 변수: theme.shadows가 없으므로 위에서 직접 지정
    // ... existing code ...

    // 테두리 반경 변수
    Object.entries(THEME.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // 트랜지션 변수
    Object.entries(THEME.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });

  }, [mode]);

  // 전역 스타일을 위한 스타일 태그 추가
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        /* 기본 스타일 리셋 */
        box-sizing: border-box;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      
      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family-body);
        font-size: var(--font-size-base);
        line-height: var(--line-height-normal);
        color: var(--color-text-primary);
        background-color: var(--color-background);
        transition: background-color var(--transition-base), color var(--transition-base);
      }
      
      /* 포커스 스타일 */
      :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
      
      /* 선택 텍스트 스타일 */
      ::selection {
        background-color: var(--color-primary);
        color: white;
      }
      
      /* 스크롤바 스타일 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--color-background-alt);
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--color-text-muted);
        border-radius: var(--border-radius-full);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-text-secondary);
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
} 