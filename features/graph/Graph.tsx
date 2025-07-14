'use client';
import React from 'react';
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
  border-radius: 48px;
  border: 1px solid #e6e6e9;
  width: 100%;
  max-width: 1400px;
  min-width: 900px;
  min-height: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px 56px 0 56px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
`;

const SubLabel = styled.div`
  color: #bdbdbd;
  font-size: 16px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const InfoIcon = styled.div`
  position: absolute;
  top: 48px;
  right: 56px;
  width: 24px;
  height: 24px;
  background: url('/Icons/info.svg') no-repeat center/contain;
`;

const StatValue = styled.div`
  color: #222;
  font-size: 18px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  text-align: right;
`;

const StatDate = styled.div`
  color: #222;
  font-size: 16px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  text-align: right;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 320px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 56px;
  box-sizing: border-box;
`;

const CustomTooltip = styled.div`
  background: #fff;
  border: 1px solid #e6e6e9;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: #222;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 56px 0 56px;
  margin-top: 8px;
`;

const ChangeBox = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

const ChangePercent = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  font-weight: 400;
  margin-left: 2px;
`;

const UpdateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 12px;
`;

const UpdateLabel = styled.span`
  color: #bdbdbd;
`;

const UpdateDate = styled.span`
  color: #222;
  font-size: 14px;
  font-weight: 500;
`;

const ReplayIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url('/Icons/replay.svg') no-repeat center/contain;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 0;
  width: 404px;
  margin: 32px auto 0 auto;
  background: #f9f9fb;
  border-radius: 12px;
  overflow: hidden;
`;

const FilterButton = styled.button<{ selected?: boolean }>`
  background: ${({ selected }) => (selected ? '#fff' : 'transparent')};
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #222;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
`;

export default function OverviewGraph() {
  return (
    <GlassFrame>
      <TopRow>
        <TitleBox>
          <Title>개요</Title>
          <SubLabel>최대 팔로워<br />달성일</SubLabel>
        </TitleBox>
        <InfoBox>
          <StatValue>23.7K</StatValue>
          <StatDate>2025년 05월 5일</StatDate>
        </InfoBox>
        <InfoIcon />
      </TopRow>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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
                <CustomTooltip>
                  {payload[0].payload.month}: {payload[0].value.toLocaleString()}
                </CustomTooltip>
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
          +27.37<ChangePercent>%</ChangePercent>
        </ChangeBox>
        <UpdateBox>
          <UpdateLabel>마지막 업데이트</UpdateLabel>
          <UpdateDate>2027.05.05</UpdateDate>
          <ReplayIcon />
        </UpdateBox>
      </BottomRow>
      <FilterRow>
        <FilterButton>24시간</FilterButton>
        <FilterButton>7일</FilterButton>
        <FilterButton selected>1달</FilterButton>
      </FilterRow>
    </GlassFrame>
  );
}