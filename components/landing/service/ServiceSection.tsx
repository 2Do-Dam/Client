import React from 'react';
import { THEME } from '../../../styles/theme';
import { SectionWrapper, TitleBlock, Title, Subtitle, CardRow, Card, CardTitleRow, CardTitle, CardIcon, CardDesc, DownArrow } from './style';


const ArrowSvg = () => (
  <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8V32M32 32L16 16M32 32L48 16" stroke={THEME.colors.Primary.Normal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// 카드 데이터
const cards = [
  {
    title: '해시태그 추천',
    desc: '키워드 기반 AI 추천으로\n트렌드에 맞는 해시태그를 추천해 줍니다.',
  },
  {
    title: '제목 분석',
    desc: '썸네일과 제목을 분석하여\n클릭률을 높이는 최적의 조합을 제안해 줍니다.',
  },
  {
    title: '콘텐츠 캘린더',
    desc: '요일별 맞춤 일정 추천으로\n규칙적인 콘텐츠 업로드 및 관리를 돕습니다.',
  },
  {
    title: 'AI 콘텐츠 피드백',
    desc: '개선점과 반응 예측을 통해\n더 나은 양질의 콘텐츠를 제작하도록 돕습니다.',
  },
];

const ServiceSection: React.FC = () => (
  <SectionWrapper>
    <TitleBlock>
      <Title>함께 성장하는 도구들</Title>
      <Subtitle>씨앗부터 만개까지, 여러분의 콘텐츠 제작 여정을 함께하는 여섯 가지 강력한 도구입니다.</Subtitle>
    </TitleBlock>
    <CardRow>
      {cards.map((card, idx) => (
        <Card key={card.title}>
          <CardTitleRow>
            <CardTitle>{card.title}</CardTitle>
            <CardIcon>→</CardIcon>
          </CardTitleRow>
          <CardDesc>{card.desc}</CardDesc>
        </Card>
      ))}
    </CardRow>
    <DownArrow>
      <ArrowSvg />
    </DownArrow>
  </SectionWrapper>
);

export default ServiceSection;
