'use client';
import Header from '@/components/layout/header/Header';
import { SignupForm } from '@/features/auth/components/SignupForm';
import { THEME, Z_INDEX } from '@/styles/theme';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Mian = styled.main``;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 20px;
  padding: 0 64px;
  height: 100vh;
  width: 100vw;

  background-color: #f9f9fb;

  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Circle = styled.img`
  grid-column: 6 / span 1;
  position: fixed;
  right: 0;
  z-index: ${Z_INDEX.fixed};
`;

const mainFloatY = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-200px);
  }
`;

const MainSvg = styled.img`
  position: absolute;
  left: 0;
  z-index: ${Z_INDEX.dropdown};
  animation: ${mainFloatY} 2.5s ${THEME.transitions.base} infinite alternate;
`;

export default function Signup() {
  return (
    <Mian>
      <Header />
      <Container>
        <MainSvg src={`/loginSvgs/SignupMain.svg`} />
        <SignupForm />
        <Circle src={`/loginSvgs/Circle.svg`} />
      </Container>
    </Mian>
  );
}
