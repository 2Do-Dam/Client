import React from 'react';
import { THEME } from '../../../styles/theme';
import { HeroSectionWrapper, HeroContent, HeroTitle, ButtonRow, GrowButton, DemoButton, DownArrow } from './style';
import Link from 'next/link';



const ArrowSvg = () => (
  <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8V32M32 32L16 16M32 32L48 16" stroke={THEME.colors.Primary.Normal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeroSection: React.FC = () => (
  <HeroSectionWrapper>
    <HeroContent>
      <HeroTitle>
        콘텐츠를 피우세요<br />
        성장을 수확하세요
      </HeroTitle>
      <ButtonRow>
        <Link href="/auth/login" style={{ textDecoration: 'none' }}>
          <GrowButton className="pill">
            성장 수확하기
            <span style={{ fontSize: 20, marginLeft: 4 }}>→</span>
          </GrowButton>
        </Link>
        <DemoButton className="pill">
          <span style={{ fontSize: 20, marginRight: 4 }}>▶</span>
          데모 보기
        </DemoButton>
      </ButtonRow>
    </HeroContent>
    <DownArrow>
      <ArrowSvg />
    </DownArrow>
  </HeroSectionWrapper>
);

export default HeroSection;