'use client';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #fff;
  border: 1px solid #e6e6e9;
  border-radius: 32px;
  width: 620px;
  min-height: 70px;
  padding: 32px 24px;
  box-sizing: border-box;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;

const YoutubeIcon = styled.img`
  width: 26px;
  height: 26px;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000;
  line-height: 26px;
`;

const HashtagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
`;

const Pill = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  background: #e4f0ee;
  border-radius: 64px;
  height: 26px;
  padding: 0 18px;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  gap: 6px;
  ${({ width }) => width && `width: ${width}px;`}
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const hashtagData = [
  {
    platform: '유튜브',
    icon: '/Icons/youtube.svg',
    title: '유튜브의 인기 해시태그',
    hashtags: [
      { text: '#인기급상승동영상돼라', icon: '/Icons/crown.svg' },
      { text: '#알고리즘떠라' },
      { text: '#우와아아아앙', icon: '/Icons/south.svg', iconRight: true },
      { text: '#프론트엔드' },
      { text: '#해시태그디자인이에욤' },
      { text: '#백엔드어떻게하나요', icon: '/Icons/north.svg', iconRight: true },
      { text: '#리엑트잘하는법', icon: '/Icons/south.svg', iconRight: true },
    ]
  },
  {
    platform: '인스타그램',
    icon: '/Icons/instagram.svg',
    title: '인스타그램의 인기 해시태그',
    hashtags: [
      { text: '#인기급상승동영상돼라', icon: '/Icons/crown.svg' },
      { text: '#알고리즘떠라' },
      { text: '#우와아아아앙', icon: '/Icons/arrow_down.svg' },
      { text: '#프론트엔드' },
      { text: '#해시태그디자인이에욤' },
      { text: '#백엔드어떻게하나요', icon: '/Icons/arrow_up.svg'},
      { text: '#리엑트잘하는법', icon: '/Icons/arrow_down.svg'},
    ]
  }
];

export default function HashtagGenerator() {
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      {hashtagData.map((section, idx) => (
        <Container key={section.platform}>
          <TitleRow>
            <YoutubeIcon src={section.icon} alt={section.platform} />
            <Title>{section.title}</Title>
          </TitleRow>
          <HashtagList>
            {section.hashtags.map((tag, i) => (
              <Pill key={i}>
                {tag.text}
              </Pill>
            ))}
          </HashtagList>
        </Container>
      ))}
    </div>
  );
}
