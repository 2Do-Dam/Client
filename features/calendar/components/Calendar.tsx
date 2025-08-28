"use client";
import React from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';
import type { CalendarType } from 'react-calendar';

const GlassCalendar = styled.div`
  background: #fff;
  border: 1px solid #e6e6e9;
  border-radius: 32px;
  padding: 32px 24px 24px 24px;
  width: 300px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.04);

  .react-calendar {
    background: transparent;
    border: none;
    font-family: 'Pretendard Variable', sans-serif;
  }
  .react-calendar__month-view__weekdays {
    margin-bottom: 4px;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 12px;
    color: #000;
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 400;
    text-align: center;
    padding: 0 0 8px 0;
  }
  .react-calendar__tile {
    border-radius: 50%;
    font-size: 16px;
    color: #2b2b2f;
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 400;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: none;
    border: none;
    transition: background 0.2s;
    pointer-events: none; /* 클릭 비활성화 */
  }
  .react-calendar__tile--active {
    background: #4a9b8e33; /* 20% 투명 */
    color: #2b2b2f;
  }
  .react-calendar__tile--now {
    background: #d3eaea; /* 연한 청록색 원 */
    color: #222;
    border: none;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(0,0,0,0.3);
  }
  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    
  }
  .react-calendar__navigation__label {
    flex: none;
    font-size: 28px;
    font-weight: 600;
    color: #2b2b2f;
    pointer-events: none;
    background: none;
  }
  .react-calendar__navigation__arrow {
    background: none;
    border: none;
    box-shadow: none;
    min-width: 32px;
    min-height: 32px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-calendar__navigation__arrow:enabled:hover,
  .react-calendar__navigation__arrow:enabled:focus {
    background: none;
    border: none;
    box-shadow: none;
  }
  
`;

function formatDay(locale: string | undefined, date: Date) {
  return date.getDate().toString().padStart(2, '0');
}

function formatMonthYear(locale: string | undefined, date: Date) {
  // 월만 2자리 숫자로
  return date.toLocaleString('ko-KR', { month: '2-digit' });
}

export default function CustomCalendar(props: CalendarProps) {
  return (
    <GlassCalendar>
      <Calendar
        {...props}
        formatDay={formatDay}
        formatMonthYear={formatMonthYear}
        showNeighboringMonth={true}
        locale="ko-KR"
        next2Label={null} // 연도 이동 화살표 숨김
        prev2Label={null}
        prevLabel={
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polyline points="20,8 12,16 20,24" fill="none" stroke="#bdbdbd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        nextLabel={
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polyline points="12,8 20,16 12,24" fill="none" stroke="#bdbdbd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        navigationLabel={({ date }) => (
          <span style={{ fontSize: 28, fontWeight: 600 }}>
            {String(date.getMonth() + 1).padStart(2, '0')}
          </span>
        )}
        // 요일 한글로 강제
        formatShortWeekday={(_, date) => ['일','월','화','수','목','금','토'][date.getDay()]}
        onClickDay={() => {}} // 클릭 무효
        tileDisabled={() => true} // 클릭 완전 비활성화
        calendarType="gregory" // 일요일부터 시작!
      />
    </GlassCalendar>
  );
}