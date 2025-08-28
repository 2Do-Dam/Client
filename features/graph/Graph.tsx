'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: '5월', value: 12000 },
  { month: '6월', value: 15000 },
  { month: '7월', value: 18000 },
  { month: '8월', value: 23700 },
];

const GlassFrame = styled.div`
  background: #fff;
  border-radius: 32px;
  border: 1px solid #e6e6e9;
  width: 800px;
  height: 460px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const FilterRow = styled.div`
  display: flex;
  width: 360px;
  margin: 20px auto 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.03);
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  z-index: 2;
`;

const FilterButton = styled.button<{ selected?: boolean }>`
  background: ${({ selected }) => (selected ? '#f9f9fb' : 'transparent')};
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  width: 33.33%;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 15px;
  color: #2b2b2f;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 64px 32px 16px 32px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #2b2b2f;
  margin-bottom: 12px;
`;

const SubLabel = styled.div`
  color: #bdbdbd;
  font-size: 18px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StatValue = styled.div`
  color: #2b2b2f;
  font-size: 20px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 700;
  text-align: right;
`;

const StatDate = styled.div`
  color: #2b2b2f;
  font-size: 16px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  text-align: right;
`;

const InfoIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url('/Icons/info.svg') no-repeat center/contain;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 160px;
  background: transparent;
  margin-bottom: 0;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 0;
`;

const ChangeBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const ChangeSign = styled.span`
  font-size: 24px;
  font-weight: 700;
  
`;

const ChangeValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #2b2b2f;
`;

const ChangePercent = styled.span`
  font-size: 18px;
  color: #bdbdbd;
  font-weight: 400;
  margin-left: 2px;
`;

const UpdateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

const UpdateLabel = styled.span`
  color: #bdbdbd;
  font-size: 13px;
`;

const UpdateDate = styled.span`
  color: #2b2b2f;
  font-size: 15px;
  font-weight: 500;
`;

const ReplayIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url('/Icons/replay.svg') no-repeat center/contain;
  margin-top: 2px;
`;

export default function OverviewGraph() {
  const [selected, setSelected] = useState('1달');
  return (
    <GlassFrame>
      <FilterRow>
        <FilterButton selected={selected === '24시간'} onClick={() => setSelected('24시간')}>24시간</FilterButton>
        <FilterButton selected={selected === '7일'} onClick={() => setSelected('7일')}>7일</FilterButton>
        <FilterButton selected={selected === '1달'} onClick={() => setSelected('1달')}>1달</FilterButton>
      </FilterRow>
      <ContentWrapper>
        <TopRow>
          <TitleBox>
            <Title>개요</Title>
            <SubLabel>최대 팔로워</SubLabel>
            <SubLabel>달성일</SubLabel>
          </TitleBox>
          <InfoBox>
            <StatBox>
              <StatValue>23.7K</StatValue>
              <StatDate>2025년 05월 5일</StatDate>
            </StatBox>
            <InfoIcon />
          </InfoBox>
        </TopRow>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 24, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00A3FF" stopOpacity={0.18}/>
                  <stop offset="100%" stopColor="#00A3FF" stopOpacity={0.03}/>
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={{ stroke: "#e6e6e9" }}
                tickLine={false}
                tick={{ fontSize: 16, fill: "#bdbdbd", fontFamily: "Pretendard Variable" }}
              />
              <Tooltip content={({ active, payload }) =>
                active && payload && payload.length ? (
                  <div style={{background:'#fff',border:'1px solid #e6e6e9',borderRadius:8,padding:'8px 12px',fontSize:14,color:'#222'}}>
                    {payload[0].payload.month}: {payload[0].value.toLocaleString()}
                  </div>
                ) : null
              } />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00A3FF"
                fill="url(#colorValue)"
                strokeWidth={2}
                dot={false}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
        <BottomRow>
          <ChangeBox>
            <ChangeSign>+</ChangeSign>
            <ChangeValue>27.37</ChangeValue>
            <ChangePercent>%</ChangePercent>
          </ChangeBox>
          <UpdateBox>
            <UpdateLabel>마지막 업데이트</UpdateLabel>
            <UpdateDate>2027.05.05</UpdateDate>
            <ReplayIcon />
          </UpdateBox>
        </BottomRow>
      </ContentWrapper>
    </GlassFrame>
  );
}