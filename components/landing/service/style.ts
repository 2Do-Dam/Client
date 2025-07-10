import styled from '@emotion/styled';
import { THEME } from '../../../styles/theme';
import z from '../../../public/zz.svg';
import { keyframes } from '@emotion/react';

// 서비스 섹션 전체 래퍼
export const SectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #d5e3e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url(${z.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const bounceArrow = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(24px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

// 타이틀/서브타이틀 래퍼
export const TitleBlock = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 48px;
  font-weight: 700;
  color: #1a3632;
  line-height: 1.125;
  margin-bottom: 12px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 16px;
  font-weight: 400;
  color: #1a3632;
  line-height: 1.125;
  text-align: center;
  padding-bottom: 80px;
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

// 카드 리스트 래퍼
export const CardRow = styled.div`
  width: 100%;
  max-width: 1520px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  margin: 0 auto;
`;


export const Card = styled.div`
  flex: 1 1 0;
  min-width: 280px;
  max-width: 360px;
  height: 160px;
  background: rgba(255,255,255,0.1);
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 24px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.04);
  padding: 8px 28px 28px 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  backdrop-filter: blur(8px);
`;

export const CardTitleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 24px;
  font-weight: 600;
  color: #1a3632;
  line-height: 1.1;
`;

export const CardIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(26,54,50,0.08);
  color: #1a3632;
  font-size: 20px;
  font-weight: 700;
`;

export const CardDesc = styled.p`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 16px;
  font-weight: 400;
  color: #2b2b2f;
  line-height: 1.125;
  margin: 0;
  white-space: pre-line;
`;