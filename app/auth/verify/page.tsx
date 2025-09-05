'use client';
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { THEME, Z_INDEX } from '@/styles/theme';
import Header from '@/components/layout/header/Header';
import { useRouter } from 'next/navigation';
import apiClient from '../../../shared/api/client';
import axios from 'axios';

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

const MainSvg = styled.img`
  position: absolute;
  left: 0;
  z-index: ${Z_INDEX.dropdown};
`;

const EmailVerifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  gap: ${THEME.spacing[12]};

  grid-column: 5 / span 2;

  z-index: ${Z_INDEX.modal};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2;

  gap: ${THEME.spacing[1]};
  line-height: ${THEME.typography.lineHeight.Display};
  font-size: ${THEME.typography.fontSize['5xl']};
  font-weight: ${THEME.typography.fontWeight.bold};
  color: ${THEME.colors.Primary.Dark};
`;

const CodeInputContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const CodeInput = styled.input`
  width: 64px;
  height: 64px;
  border: 2px solid #e6e6e9;
  border-radius: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #2b2b2f;
  background: #fff;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: ${THEME.colors.Primary.Normal};
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const ResendContainer = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const ResendText = styled.span`
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: ${THEME.typography.fontSize.xs};
  color: ${THEME.colors.Text.Disabled};
`;

const ResendLink = styled.button`
  background: none;
  border: none;
  color: ${THEME.colors.Primary.Normal};
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: ${THEME.typography.fontSize.xs};
  font-weight: ${THEME.typography.fontWeight.medium};
  cursor: pointer;
  text-decoration: underline;
  margin-left: 4px;
`;

const Button = styled.button`
  all: unset;
  color: #f9f9fb;
  width: 100%;
  text-align: center;

  background-color: ${THEME.colors.Primary.Normal};
  padding: ${THEME.spacing[3]} 0;
  border-radius: ${THEME.borderRadius.lg};
  outline: 1px ${THEME.colors.Primary.Light} solid;
  outline-offset: -1px;

  font-size: ${THEME.typography.fontSize.lg};
  line-height: ${THEME.typography.lineHeight.Button};
  font-weight: ${THEME.typography.fontWeight.medium};
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default function Verify() {
  const [codes, setCodes] = useState(['', '', '', '']);
  const [email, setEmail] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // URL 파라미터에서 이메일 가져오기
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailFromUrl = urlParams.get('email');
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newCodes = [...codes];
    newCodes[index] = value.slice(-1);
    setCodes(newCodes);
    
    // 다음 인풋으로 포커스 이동
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    // TODO: 재발송 API 호출
    alert('인증번호를 재발송했습니다.');
  };

  const handleVerify = async () => {
    const verificationCode = codes.join('');
    if (verificationCode.length !== 4) {
      alert('4자리 인증번호를 모두 입력해주세요.');
      return;
    }
    
    try {
      await apiClient.verifyEmailCode({ email: email, code: verificationCode });
      router.push('/auth/login');
    } catch (error: any) {
      console.error('인증 요청 실패:', error);
      alert('인증 요청에 실패했습니다.');
    }
  };

  const isComplete = codes.every(code => code !== '');

  return (
    <Mian>
      <Header />
      <Container>
        <MainSvg src="/loginSvgs/Main.svg" />
        <EmailVerifyContainer>
          <Title>
            <span>이메일로</span>
            <span>인증번호를 보냈어요</span>
          </Title>
          <CodeInputContainer>
            {codes.map((code, index) => (
              <CodeInput
                key={index}
                ref={el => { inputRefs.current[index] = el; }}
                type="number"
                value={code}
                onChange={e => handleInputChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                maxLength={1}
              />
            ))}
          </CodeInputContainer>
          <ResendContainer>
            <ResendText>인증번호가 오지 않았나요?</ResendText>
            <ResendLink onClick={handleResend}>재발송</ResendLink>
          </ResendContainer>
          <Button onClick={handleVerify} disabled={!isComplete}>
            인증하기
          </Button>
        </EmailVerifyContainer>
        <Circle src="/loginSvgs/Circle.svg" />
      </Container>
    </Mian>
  );
}
