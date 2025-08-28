import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';

const SIDEBAR_WIDTH = 70;
const HEADER_HEIGHT = 70;
const PRIMARY_COLOR = '#4A9B8E';

const HeaderWrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1020;
  background: #f6f6f7;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
  padding: 0 40px 0 ${SIDEBAR_WIDTH + 24}px;
  /* 좌측 사이드바 공간 확보 */
`;

const HeaderTitle = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2b2b2f;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SidebarWrapper = styled.aside`
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  background: #f6f6f7;
  border-right: 1px solid rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
  box-sizing: border-box;
  
  overflow: visible;
`;

const SidebarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH + 16}px;
  height: ${HEADER_HEIGHT}px;
  background: #fff;
  border-top-right-radius: 24px;
  z-index: 1150;
  pointer-events: none;
`;

const SidebarLogo = styled.div`
  width: 27px;
  height: 27px;
  margin-bottom: 24px;
`;

const SidebarDivider = styled.div`
  width: 27px;
  height: 1px;
  background: #4a9b8e;
  margin: 16px 0;
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const SidebarMenuItem = styled.li<{selected?: boolean}>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  user-select: none;
  
`;

const SidebarBottom = styled.div`
  margin-top: auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LayoutWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.main`
  margin-left: ${SIDEBAR_WIDTH}px;
  margin-top: ${HEADER_HEIGHT}px;
  width: calc(100vw - ${SIDEBAR_WIDTH}px);
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  background: #f8fafc;
  padding: 32px;
`;

const sidebarIcons = [
  { name: '대시보드', src: '/Icons/dashboard.svg', alt: '대시보드' },
  { name: '캘린더', src: '/Icons/calendar.svg', alt: '캘린더' },
  { name: '해시태그', src: '/Icons/hashtag.svg', alt: '해시태그' },
  { name: '제목 분석', src: '/Icons/title.svg', alt: '제목 분석' },
  { name: '하루 일정', src: '/Icons/today.svg', alt: '하루 일정' },
  { name: '피드백', src: '/Icons/feedback.svg', alt: '피드백' },
];

interface LayoutProps {
  children?: ReactNode;
}


const primaryFilter =
  'invert(54%) sepia(16%) saturate(1012%) hue-rotate(120deg) brightness(90%) contrast(90%)';

const SidebarHeaderLayout: React.FC<LayoutProps> = ({ children }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>DashBoard</HeaderTitle>
        <HeaderRight>
          <img src="/Icons/notifications.svg" alt="알림" width={24} height={24} />
        </HeaderRight>
      </HeaderWrapper>
      <LayoutWrapper>
        <SidebarWrapper>
          <SidebarLogo>
            <img src="/logo.svg" alt="Logo" width={27} height={27} style={{ marginTop: '20px' }} />
          </SidebarLogo>
          <SidebarDivider />
          <SidebarMenu>
            {sidebarIcons.map((item, idx) => (
              <SidebarMenuItem
                key={item.name}
                selected={selectedIdx === idx}
                onClick={() => setSelectedIdx(idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  style={{
                    filter: selectedIdx === idx ? primaryFilter : 'none',
                    transition: 'filter 0.2s',
                  }}
                />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          <SidebarBottom>
            <img src="/Icons/setting.svg" alt="설정" width={24} height={24} />
            <img src="/Icons/logout.svg" alt="로그아웃" width={24} height={24} />
          </SidebarBottom>
        </SidebarWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    </>
  );
};

export default SidebarHeaderLayout;
