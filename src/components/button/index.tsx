import { ButtonProps } from '@/utilts/types';
import React from 'react';
import { ButtonDefault, ButtonTextAlign } from './styles';

export function Button({
  color,
  textColor,
  icon,
  width,
  text,
  onClick,
}: ButtonProps) {
  return (
    <>
      <ButtonDefault
        color={color}
        width={width}
        textColor={textColor}
        onClick={onClick}
      >
        {icon}
        {text && (
          <ButtonTextAlign style={{ paddingTop: 5 }}>{text}</ButtonTextAlign>
        )}
      </ButtonDefault>
    </>
  );
}
