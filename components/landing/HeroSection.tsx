import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';
import { Button } from '../ui/Button';
import union from '../../public/Union.svg';
import { keyframes } from '@emotion/react';

// 아래 화살표 애니메이션 keyframes
const bounceArrow = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(24px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #ebece3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-image: url(${union.src});
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
  
`;                      

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 700px;
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 64px;
  font-weight: 700;
  color: ${THEME.colors.Text.White};
  line-height: 1.4;
  padding-top: 180px;
  margin: 0;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 8px;
`;

const GrowButton = styled(Button)`
  background: ${THEME.colors.Primary.Normal};
  color: #fff;
  border-radius: 9999px;
  font-size: 18px;
  font-weight: 500;
  padding: 0 28px;
  height: 48px;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  &:hover {
    background: ${THEME.colors.Primary.Dark};
  }
`;

const DemoButton = styled(Button)`
  background: ${THEME.colors.Glass.Background};
  color: ${THEME.colors.Primary.Dark};
  border: 1.5px solid ${THEME.colors.Primary.Dark};
  border-radius: 9999px;
  font-size: 18px;
  font-weight: 500;
  padding: 0 36px;
  height: 48px;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  transition: background 0.2s;
  &:hover {
    background: ${THEME.colors.Glass.Surface};
    color: ${THEME.colors.Primary.Light};
  }
`;



const DownArrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 2;
  width: 64px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  animation: ${bounceArrow} 1.8s infinite cubic-bezier(0.4,0,0.2,1);
`;

const ArrowSvg = () => (
  <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8V32M32 32L16 16M32 32L48 16" stroke={THEME.colors.Primary.Normal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeroSection: React.FC = () => (
  <HeroSectionWrapper>
    <HeroContent>
      <HeroTitle>
        콘텐츠를 피우세요<br />
        성장을 수확하세요
      </HeroTitle>
      <ButtonRow>
        <GrowButton className="pill">
          성장 수확하기
          <span style={{ fontSize: 20, marginLeft: 4 }}>→</span>
        </GrowButton>
        <DemoButton className="pill">
          <span style={{ fontSize: 20, marginRight: 4 }}>▶</span>
          데모 보기
        </DemoButton>
      </ButtonRow>
    </HeroContent>
    <DownArrow>
      <ArrowSvg />
    </DownArrow>
  </HeroSectionWrapper>
);

export default HeroSection;