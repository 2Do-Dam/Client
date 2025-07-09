import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';
import l from '../../public/ll.svg';

// 섹션 전체 래퍼
const SectionWrapper = styled.section`
  width: 100vw;
  min-height: 524px;
  background: #e3eded;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: url('${l.src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// 타이틀/서브타이틀 래퍼
const TitleBlock = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 32px auto;
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

// 버튼 행
const ButtonRow = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  margin: 40px auto 0 auto;
`;

// 성장 수확하기 버튼 (Primary, glass 효과)
const GrowButton = styled.button`
  background: ${THEME.colors.Primary.Dark};
  color: #f9f9fb;
  border-radius: 500px;
  border: 2px solid ${THEME.colors.Primary.Normal};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  padding: 0 36px;
  height: 48px;
  min-width: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${THEME.colors.Primary.Normal};
  }
`;

// 데모 보기 버튼 (Glass, border)
const DemoButton = styled.button`
  background: rgba(240,240,240,0.1);
  color: ${THEME.colors.Primary.Dark};
  border-radius: 500px;
  border: 2px solid ${THEME.colors.Primary.Dark};
  font-size: 18px;
  font-weight: 500;
  font-family: 'Pretendard Variable', 'SF Pro', ${THEME.typography.fontFamily.join(', ')};
  padding: 0 36px;
  height: 48px;
  min-width: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(240,240,240,0.3);
    color: ${THEME.colors.Primary.Normal};
  }
`;

const StarterSection: React.FC = () => (
  <SectionWrapper>
    <TitleBlock>
      <Title>당신의 루틴, Calyx로 시작해 보세요</Title>
      <Subtitle>Calyx는 여러분의 만개를 응원합니다.</Subtitle>
    </TitleBlock>
    <ButtonRow>
      <GrowButton>
        성장 수확하기
        <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
      </GrowButton>
      <DemoButton>
        <span style={{ fontSize: 20, marginRight: 8 }}>▶</span>
        데모 보기
      </DemoButton>
    </ButtonRow>
  </SectionWrapper>
);

export default StarterSection;
