'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import { THEME, Z_INDEX } from '@/styles/theme';
import { Input } from '@/components/ui/Input';
import apiClient from '@/shared/api/client';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  gap: ${THEME.spacing[12]};

  grid-column: 5 / span 2;

  z-index: ${Z_INDEX.modal};
`;

const WellocomeMessage = styled.div`
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

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: ${THEME.spacing[6]};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: ${THEME.spacing[6]};
`;

const ButtonContainer = styled.div`
  padding: ${THEME.spacing[2]};
`;

const OtherAuth = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${THEME.colors.Text.White};
  gap: ${THEME.spacing[3]};
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${THEME.colors.Text.White};
`;

const Or = styled.span`
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: ${THEME.typography.fontSize['base']};
  font-weight: ${THEME.typography.fontWeight.normal};
  line-height: ${THEME.typography.lineHeight.Body};
`;

const PasswordFind = styled.a`
  color: ${THEME.colors.Text.Disabled};
  font-size: ${THEME.typography.fontSize.xs};
  font-family: ${THEME.typography.fontFamily[0]};
  font-weight: ${THEME.typography.fontWeight.normal};
  line-height: ${THEME.typography.lineHeight.Caption};
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
`;

const GoogleOauth = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  line-height: ${THEME.typography.lineHeight.Body};
  font-size: ${THEME.typography.fontSize.base};

  border-radius: ${THEME.borderRadius.lg};

  gap: ${THEME.spacing[2]};
  padding: ${THEME.spacing[3]};

  background: ${THEME.colors.Glass.Background};
  backdrop-filter: blur(10px);
  border: 1px rgba(255, 255, 255, 0.3) solid;
  color: ${THEME.colors.Primary.Dark};
`;

const MovetoSignup = styled.span`
  font-family: ${THEME.typography.fontFamily[0]};
  font-size: ${THEME.typography.fontSize.xs};
  line-height: ${THEME.typography.lineHeight.Caption};
  color: ${THEME.colors.Text.White};
`;

const link = styled.a`
  color: ${THEME.colors.Text.Disabled};
  line-height: ${THEME.typography.lineHeight.Body};
`;
const Sevice = link;
const PersonalInfo = link;
const Signup = link;

const Google = styled.img``;

const Checks = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SignupForm = () => {
  // 이메일, 비밀번호, 비밀번호 확인, 이름 상태 관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter(); // 라우터 사용

  // 회원가입 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== passwordCheck) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    try {
      await apiClient.register({ email, password, name });
      // 회원가입 성공 시 로그인 페이지로 이동
      router.push('/auth/login');
    } catch (err: any) {
      const detail = err?.response?.data?.detail;
      if (Array.isArray(detail)) {
        setError(detail.map((d: any) => d.msg).join(', '));
      } else if (typeof detail === 'string') {
        setError(detail);
      } else {
        setError('회원가입에 실패했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <WellocomeMessage>
        <span>만나세요</span>
        <span>Calyx가 함께 할게요</span>
      </WellocomeMessage>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            fullWidth={true}
            variant="glass"
            placeholder="이메일 또는 아이디"
            IconAlign="right"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            fullWidth={true}
            variant="glass"
            placeholder="비밀번호"
            IconAlign="right"
            Icon="closeEye"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            fullWidth={true}
            variant="glass"
            placeholder="비밀번호 확인"
            IconAlign="right"
            Icon="closeEye"
            value={passwordCheck}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordCheck(e.target.value)}
            type="password"
          />
          {/* 이름 입력 추가 */}
          <Input
            fullWidth={true}
            variant="glass"
            placeholder="이름"
            IconAlign="right"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <Checks>
            <Sevice href="#">서비스 이용약관</Sevice>
            {'\u00A0및\u00A0'}
            <PersonalInfo href="#">개인정보 수집 및 이용</PersonalInfo>에 동의합니다.
          </Checks>
        </InputContainer>
        {/* 에러 메시지 표시 */}
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <ButtonContainer>
          <Button type="submit" disabled={loading}>{loading ? '가입 중...' : '회원가입 하기'}</Button>
        </ButtonContainer>
      </FormContainer>
      <OtherAuth>
        <Line />
        <Or>또는</Or>
        <Line />
      </OtherAuth>
      {/* 컴포넌트화 필요 Card */}
      <GoogleOauth>
        <Google src={`/Google.svg`} />
        구글로 간편 회원가입
      </GoogleOauth>
      <MovetoSignup>
        계정이 있으신가요? <Signup href="/auth/login">로그인 하기</Signup>
      </MovetoSignup>
    </Container>
  );
};
