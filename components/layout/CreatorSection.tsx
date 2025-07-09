import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';
import s from '../../public/ss.svg';
import flower from '../../public/Icons/flower.svg';
import { color } from 'three/tsl';

// 섹션 전체 래퍼
const SectionWrapper = styled.section`
  width: 100vw;
  min-height: 716px;
  background: #ebece3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url(${s.src});
`;

// 타이틀/서브타이틀 래퍼
const TitleBlock = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 48px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 48px;
  font-weight: 700;
  color: #1a3632;
  line-height: 1.125;
  margin-bottom: 12px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 16px;
  font-weight: 400;
  color: #1a3632;
  line-height: 1.125;
  text-align: center;
`;

// 카드 리스트를 감싸는 뷰포트(오버플로우 숨김)
const CarouselViewport = styled.div`
  width: 100vw;
  max-width: 1800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

// 가로 슬라이드 트랙
const CarouselTrack = styled.div<{translateX: number}>`
  display: flex;
  flex-direction: row;
  gap: 24px;
  transform: translateX(${({translateX}) => translateX}px);
  will-change: transform;
`;

// Card 컴포넌트를 forwardRef로 변경
const Card = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => (
  <div ref={ref} {...props} />
));

const StyledCard = styled(Card)`
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

const CardTitle = styled.h3`
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

const CardDesc = styled.p`
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  font-size: 16px;
  font-weight: 400;
  color: #1a3632;
  line-height: 1.125;
  margin: 0;
  text-align: left;
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

// 동그란 사용자 후기 배지 (glass 효과 추가)
const CircleBadge = styled.div`
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
    </SectionWrapper>
  );
};

export default CreatorSection;
