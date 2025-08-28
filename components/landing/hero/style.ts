import styled from '@emotion/styled';
import { THEME } from '../../../styles/theme';
import { Button } from '../../ui/Button';
import hero_bg from '../../../public/background/hero_bg.svg';
import { keyframes } from '@emotion/react';

export const bounceArrow = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(24px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

export const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #ebece3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background-image: url(${hero_bg.src});
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
`;                      

export const HeroContent = styled.div`
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

export const HeroTitle = styled.h1`
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

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 8px;
`;

export const GrowButton = styled(Button)`
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

export const DemoButton = styled(Button)`
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



export const DownArrow = styled.div`
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