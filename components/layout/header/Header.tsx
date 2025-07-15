import React from 'react';
import styled from '@emotion/styled';

// 헤더 전체 래퍼
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1020;
  background: rgba(250, 250, 250, 0.3); // 피그마 색상
  border-bottom: 1px solid rgba(0,0,0,0.5);
  backdrop-filter: blur(16px);
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

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2b2b2f;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>DashBoard</Title>
        <IconWrapper>
          {/* 알림 아이콘 자리 (임시 이모지) */}
          <span role="img" aria-label="notifications">🔔</span>
        </IconWrapper>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
