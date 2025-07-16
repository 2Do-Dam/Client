"use client";
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Calendar from '@/features/calendar/components/Calendar';
import Graph from '@/features/graph/Graph';
import HashtagGenerator from '@/features/hashtag/components/HashtagGenerator';
import SidebarHeaderLayout from '@/features/sidebar/Sidebar';
import Report from '@/features/report/Report';
import Reco from '@/features/reco/Reco';
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

// zustand user store
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at: string;
}
interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}
export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// React Query fetcher
async function fetchMe() {
  const token = localStorage.getItem('access_token');
  const res = await fetch('/api/users/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #18413a;
  margin: 8px 0 12px 0;
  padding: 0;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const Box = styled.div`
  min-height: 120px;
`;

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

export default function Dashboard() {
  const { user, setUser } = useUserStore();
  const { data, isLoading } = useQuery<User>({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false,
  });
  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

  return (
    <SidebarHeaderLayout>
      <DashboardWrapper>
        <Greeting>
          👋 어서오세요! {isLoading ? '...' : user?.name || '게스트'}님!
        </Greeting>
        <MainGrid>
          {/* 좌측 컬럼 */}
          <LeftCol>
            <Box>
              <SectionTitle>해시태그</SectionTitle>
              <HashtagGenerator />
            </Box>
            <RowGrid>
              <Box>
                <SectionTitle>내 성장 그래프</SectionTitle>
                <Graph />
              </Box>
              <Box>
                <SectionTitle>리포트</SectionTitle>
                <Report />
                <SectionTitle>추천</SectionTitle>
              <Reco />
              </Box>
            </RowGrid>
          </LeftCol>
          {/* 우측 컬럼 */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <Box style={{ marginTop: '-100px' }}>
              <SectionTitle>일정</SectionTitle>
              <Calendar />
            </Box>
            <Box>
              <SectionTitle>다가오는 일정</SectionTitle>
              {/* 임시 일정 리스트 */}
              <div>01/27</div>
              <ul>
                <li>9:00 am - 영상 편집하기</li>
                <li>11:00 am - 앙 기모찌 하기</li>
              </ul>
              <button style={{marginTop: '16px'}}>추가하기 +</button>
            </Box>
          </div>
        </MainGrid>
      </DashboardWrapper>
    </SidebarHeaderLayout>
  );
}