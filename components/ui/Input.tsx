import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';
import { useState } from 'react';

interface InputProps {
  InputType?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  placeholder?: string;
  Icon?: string;
  IconAlign?: string;
  //readonly?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const _Icon = styled.img``;

const TextBox = styled.input<InputProps>`
  all: unset;
  width: 410px;

  padding-top: calc(${THEME.spacing[4]} + 1px);
  padding-bottom: calc(${THEME.spacing[4]} - 1px);

  line-height: ${THEME.typography.lineHeight.Body};
  font-size: ${THEME.typography.fontSize.base};

  &:focus {
    outline: none;
  }
`;

const StyledInput = styled.div<InputProps>`
  display: flex;
  align-items: center;

  padding: 0 ${THEME.spacing[3]};
  border-radius: ${THEME.borderRadius.lg};
  gap: ${THEME.spacing[2]};

  /* fullWidth */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ IconAlign = 'right' }) => {
    switch (IconAlign) {
      case 'right':
        return `
          flex-direction: row;
        `;
      case 'left':
        return `
          flex-direction: row-reverse;
        `;
    }
  }}

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
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px #4A9B8E solid;
          color: ${THEME.colors.Text.Dark};
        `;
    }
  }}
`;

export const Input: React.FC<InputProps> = ({
  InputType = 'text',
  variant = 'primary',
  placeholder = 'ADD SOME TEXT',
  Icon = '',
  IconAlign = '',
  className,
  fullWidth = false,
}) => {
  const [icon, setIcon] = useState(Icon);

  const toggleEye = () => {
    setIcon(prev => (prev === 'eye' ? 'closeEye' : 'eye'));
  };

  const inputType = (InputType = icon === 'eye' ? 'password' : 'text');

  return (
    <StyledInput
      variant={variant}
      className={className}
      fullWidth={fullWidth}
      IconAlign={IconAlign}
    >
      <TextBox placeholder={placeholder} type={inputType} />
      {Icon && <_Icon onClick={toggleEye} src={`/Icons/${icon}.svg`} />}
    </StyledInput>
  );
};
