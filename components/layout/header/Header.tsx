import React from 'react';
import styled from '@emotion/styled';
import { THEME, Z_INDEX } from '../../../styles/theme';
import { Button } from '../../ui/Button';
import Image from 'next/image';

// 헤더 전체 래퍼
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: ${Z_INDEX.sticky};
  background: ${THEME.colors.Glass.Background};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.3);
`;


const HeaderContent = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
`;

// 로고
const Logo = styled.div`
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
const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

// 메뉴 텍스트
const MenuItem = styled.a`
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

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>
          <Image src="/logo.svg" alt="Calyx Logo" width={42} height={45} priority />
        </Logo>
        <MenuWrapper>
          <MenuItem href="#">기능</MenuItem>
          <MenuItem href="#">대시보드</MenuItem>
          <MenuItem href="#">사용법</MenuItem>
          <MenuItem href="#">후기</MenuItem>
          <Button variant="primary" size="md" className="pill">시작하기</Button>
        </MenuWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
