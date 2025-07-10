
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { THEME } from '../../../styles/theme';
import s from '../../../public/ss.svg';



export const bounceArrow = keyframes`
  0% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(24px); }
  100% { transform: translateX(-50%) translateY(0); }
`;

// 섹션 전체 래퍼
export const SectionWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #ebece3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url(${s.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
`;

// 카드 리스트를 감싸는 뷰포트(오버플로우 숨김)
export const CarouselViewport = styled.div`
  width: 100vw;
  max-width: 1800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

// 가로 슬라이드 트랙
export const CarouselTrack = styled.div<{translateX: number}>`
  display: flex;
  flex-direction: row;
  gap: 24px;
  transform: translateX(${({translateX}) => translateX}px);
  will-change: transform;
`;




export const CardTitle = styled.h3`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 24px;
  font-weight: 600;
  color: #2b2b2f;
  line-height: 1.1;
  margin-bottom: 8px;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDesc = styled.p`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 16px;
  font-weight: 400;
  color: #1a3632;
  line-height: 1.125;
  margin: 0;
  text-align: left;
`;

// 동그란 사용자 후기 배지 (glass 효과 추가)
export const CircleBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 38px;
  border-radius: 19px;
  background: rgba(255,255,255,0.3);
  color: ${THEME.colors.Primary.Dark};
  font-family: 'Pretendard Variable', 'SF Pro', sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin: 0 auto 16px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1.5px solid rgba(255,255,255,0.4);
  backdrop-filter: blur(8px);
`;