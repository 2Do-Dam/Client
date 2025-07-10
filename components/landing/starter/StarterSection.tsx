import React from 'react';
import { SectionWrapper, TitleBlock, Title, Subtitle, ButtonRow, GrowButton, DemoButton } from './style';


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
