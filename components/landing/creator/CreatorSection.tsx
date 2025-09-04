import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../../styles/theme';
import flower from '../../../public/Icons/flower.svg';
import { SectionWrapper, TitleBlock, Title, Subtitle, CarouselViewport, CarouselTrack, CircleBadge, DownArrow, CardTitle, CardDesc } from './style';

const ArrowSvg = () => (
  <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8V32M32 32L16 16M32 32L48 16" stroke={THEME.colors.Primary.Normal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Card 컴포넌트를 forwardRef로 변경
const Card = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => (
  <div ref={ref} {...props} />
));

export const StyledCard = styled(Card)`
  background: rgba(230,213,183,0.2);
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 24px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.04);
  padding: 24px 24px 16px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 120px;
  max-width: 340px;
  width: auto;
  height: 140px;
  margin-bottom: 16px;
  flex-shrink: 0;
  white-space: nowrap;
`;

// 카드 데이터들 넣는 부분
const realCards = [
  { title: 'KINGOFHWAG', desc: 'Instagram · 23' },
  { title: '@DDOTTY', desc: 'Youtube · 2.3M' },
  { title: '@COMODO_PARK', desc: 'Instagram · 47.2K' },
  { title: '@KINGOFHWANG', desc: 'Tiktok · 400' },
  { title: '@HYEWONARCHIVE', desc: 'Instagram · 90K' },
  { title: '@WC._K', desc: 'Instagram · 231' },
  { title: '@H._M1N_', desc: 'Instagram · 229' },
  { title: '@INDEX', desc: 'Instagram · 231' },
];

// 카드 트랙을 4개 복제 계속 나오기 위함
const cardList = [...realCards, ...realCards, ...realCards, ...realCards];

const AUTO_SCROLL_SPEED = 1.2; // px per frame

const CreatorSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const cardRefs = useRef<(HTMLDivElement|null)[]>([]);

  // 트랙 전체 길이(한 세트 길이) 측정
  useEffect(() => {
    setTimeout(() => {
      if (!trackRef.current) return;
      // 한 세트 길이만 측정 (카드 개수/3)
      let oneSet = 0;
      for (let i = 0; i < cardList.length / 3; i++) {
        const el = cardRefs.current[i];
        if (el) oneSet += el.offsetWidth + 24;
      }
      setTrackWidth(oneSet);
    }, 100);
  }, []);

  // 부드럽게 흐르는 무한 캐러셀
  useEffect(() => {
    if (!trackWidth) return;
    let req: number;
    const animate = () => {
      setTranslateX(prev => {
        if (Math.abs(prev) >= trackWidth) {
          // 한 세트만큼 이동하면 0으로 리셋
          return 0;
        }
        return prev - AUTO_SCROLL_SPEED;
      });
      req = requestAnimationFrame(animate);
    };
    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, [trackWidth]);

  return (
    <SectionWrapper>
      <CircleBadge>사용자 후기<img src={flower.src} alt="flower" style={{color: THEME.colors.Primary.Dark, paddingLeft: '4px'}}/></CircleBadge>
      <TitleBlock>
        <Title>Calyx로 루틴을 만드는 크리에이터들</Title>
        <Subtitle>전 세계 수천 명의 크리에이터들이 Calyx와 함께 성장하고 있습니다.</Subtitle>
      </TitleBlock>
      <CarouselViewport>
        <CarouselTrack ref={trackRef} translateX={translateX}>
          {cardList.map((card, idx) => (
            <StyledCard
              key={card.title + idx}
              ref={el => { cardRefs.current[idx] = el; }}
            >
              <CardTitle>{card.title}</CardTitle>
              {card.desc && <CardDesc>{card.desc}</CardDesc>}
            </StyledCard>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <DownArrow>
        <ArrowSvg />
      </DownArrow>
    </SectionWrapper>
  );
};

export default CreatorSection;
