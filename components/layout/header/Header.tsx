import React from 'react';
import { Button } from '../../ui/Button';
import Image from 'next/image';
import { HeaderWrapper, HeaderContent, Logo, MenuWrapper, MenuItem } from './style';

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
