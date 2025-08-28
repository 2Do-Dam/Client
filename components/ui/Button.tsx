import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${THEME.spacing[2]};
  border: none;
  border-radius: ${THEME.borderRadius['2xl']};
  font-family: ${THEME.typography.fontFamily.join(', ')};
  font-weight: ${THEME.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${THEME.transitions.smooth};
  position: relative;
  overflow: hidden;

  /* 사이즈 variant */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${THEME.spacing[2]} ${THEME.spacing[4]};
          font-size: ${THEME.typography.fontSize.sm};
          min-height: 36px;
        `;
      case 'lg':
        return `
          padding: ${THEME.spacing[4]} ${THEME.spacing[8]};
          font-size: ${THEME.typography.fontSize.lg};
          min-height: 56px;
        `;
      default:
        return `
          padding: ${THEME.spacing[3]} ${THEME.spacing[6]};
          font-size: ${THEME.typography.fontSize.base};
          min-height: 44px;
        `;
    }
  }}

  /* fullWidth */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  /* variant별 스타일 */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${THEME.colors.Primary.Normal};
          color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          &:hover:not(:disabled) {
            background: ${THEME.colors.Primary.Dark};
          }
        `;
      case 'secondary':
        return `
          background: ${THEME.colors.Secondary.Normal};
          color: ${THEME.colors.Text.Dark};
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          &:hover:not(:disabled) {
            background: ${THEME.colors.Secondary.Dark};
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${THEME.colors.Primary.Normal};
          border: 2px solid ${THEME.colors.Primary.Light};
          &:hover:not(:disabled) {
            background: ${THEME.colors.Primary.Light};
            color: ${THEME.colors.Primary.Dark};
          }
        `;
      case 'glass':
        return `
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          color: ${THEME.colors.Text.Dark};
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          &:hover:not(:disabled) {
            background: rgba(255,255,255,0.1);
          }
        `;
    }
  }}

  /* 비활성화 상태 */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  /* Pulse animation for CTA buttons */
  &.pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(96, 113, 241, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(96, 113, 241, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(96, 113, 241, 0);
    }
  }

  /* pill 형태 강제 적용 */
  &.pill {
    border-radius: 9999px !important;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
