import React from 'react';
import styled from '@emotion/styled';

const GlassFrame = styled.div`
  width: 440px;
  height: 140px;
  background: #fff;
  border-radius: 32px;
  border: 1px solid #e6e6e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #214640;
  margin-bottom: 16px;
`;

const ReportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #4a9b8e;
  border: 1px solid #e6e6e9;
  border-radius: 12px;
  padding: 16px 32px;
  color: #f2f2f4;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
`;

const DashboardIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
`;

export default function ReportCard() {
  return (
    <GlassFrame>
      <Title>팔로워 - 23.7K</Title>
      <ReportButton>
        전체 리포트 확인하기
        <DashboardIcon src="/Icons/dashboard.svg" alt="dashboard" />
      </ReportButton>
    </GlassFrame>
  );
}
