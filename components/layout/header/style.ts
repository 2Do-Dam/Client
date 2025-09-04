import styled from '@emotion/styled';
import { THEME, Z_INDEX } from '../../../styles/theme';


// 헤더 전체 래퍼
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: ${Z_INDEX.sticky};
  background: ${THEME.colors.Glass.Background};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.3);
`;


export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
`;

// 로고
export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: 2rem;
  font-weight: 700;
  color: ${THEME.colors.Primary.Normal};
  letter-spacing: 0.05em;
  cursor: pointer;
`;

// 메뉴 래퍼
export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

// 메뉴 텍스트
export const MenuItem = styled.a`
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: 1rem;
  font-weight: 400;
  color: ${THEME.colors.Text.White};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${THEME.colors.Primary.Normal};
  }
`;