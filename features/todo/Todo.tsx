import React from 'react';
import styled from '@emotion/styled';

const GlassFrame = styled.div`
  width: 300px;
  height: 450px;
  background: #fafafa;
  border-radius: 32px;
  border: 1px solid #e6e6e9;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 24px 24px 24px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1a3632;
`;

const ViewAll = styled.button`
  background: none;
  border: none;
  color: #4a9b8e;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
`;

const DateLabel = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #1a3632;
  margin-bottom: 12px;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const ScheduleCard = styled.div`
  background: #e1f4ec;
  border-radius: 8px;
  padding: 16px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #e6e6e9;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  color: #514b40;
`;

const TimeIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const Memo = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 12px;
  color: #b8aa92;
`;

const AddButton = styled.button`
  margin-top: auto;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #4a9b8e;
  border: 1px solid #e6e6e9;
  border-radius: 12px;
  padding: 12px 32px;
  color: #fff;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
`;

const AddIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function UpcomingSchedule() {
  return (
    <GlassFrame>
      <TopRow>
        <Title>다가오는 일정</Title>
        <ViewAll>전체보기</ViewAll>
      </TopRow>
      <DateLabel>오늘 - 1월 27일</DateLabel>
      <ScheduleList>
        <ScheduleCard>
          <TimeRow>
            <TimeIcon src="/Icons/clock.svg" alt="time" />
            11:00 AM
          </TimeRow>
          <Memo>ㅇ이이이이이이이잉 메모 메모 이이이이이이</Memo>
        </ScheduleCard>
        <ScheduleCard>
          <TimeRow>
            <TimeIcon src="/Icons/clock.svg" alt="time" />
            08:00 PM
          </TimeRow>
          <Memo>캬ㅑ 오후 키야ㅑㅑ</Memo>
        </ScheduleCard>
      </ScheduleList>
      <AddButton>
        추가하기
        <AddIcon src="/Icons/add.svg" alt="add" />
      </AddButton>
    </GlassFrame>
  );
}
