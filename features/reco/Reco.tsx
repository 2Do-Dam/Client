import React from 'react';
import styled from '@emotion/styled';

const GlassFrame = styled.div`
  width: 440px;
  height: 270px;
  background: #fff;
  border-radius: 32px;
  border: 1px solid #e6e6e9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 32px 24px 32px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2b2b2f;
`;

const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 26px;
`;

const RankBox = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const ContentName = styled.div`
  flex: 1;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #2b2b2f;
  text-align: left;
`;

const TagBox = styled.div`
  min-width: 100px;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #2b2b2f;
  text-align: right;
`;

export default function RecoCard() {
  const items = [
    { rank: <img src="/Icons/crown.svg" alt="crown" width={18} height={18} />, name: '브이로그', tags: '#브이로그 #일상' },
    { rank: '2', name: '먹방', tags: '#먹방 #리뷰' },
    { rank: '3', name: '게임', tags: '#게임 #내전' },
    { rank: '4', name: '안다미로', tags: '#전공 #동아리' },
  ];
  return (
    <GlassFrame>
      <TopRow>
        <Title>추천 콘텐츠</Title>
        <InfoIcon src="/Icons/info.svg" alt="info" />
      </TopRow>
      <List>
        {items.map((item, idx) => (
          <ListItem key={idx}>
            <RankBox>{item.rank}</RankBox>
            <ContentName>{item.name}</ContentName>
            <TagBox>{item.tags}</TagBox>
          </ListItem>
        ))}
      </List>
    </GlassFrame>
  );
}
