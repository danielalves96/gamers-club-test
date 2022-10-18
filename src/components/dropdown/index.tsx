import { DropdownProps } from '@/utilts/types';
import React from 'react';
import { IconEyeOff, IconUserPlus } from '../icons';
import { DropdownContainer, DropdownArrow, DropdownSpan } from './styles';

export function Dropdown({
  open,
  changeAvatarData,
  hideBannedData,
}: DropdownProps) {
  return (
    <>
      {open ? (
        <>
          <DropdownArrow />
          <DropdownContainer>
            <div
              style={{
                display: `flex`,
                gap: 16,
                alignItems: `center`,
                cursor: `pointer`,
              }}
            >
              <IconUserPlus color="#ffffff4d" size={24} />
              <DropdownSpan>{changeAvatarData.label}</DropdownSpan>
            </div>
            <div
              style={{
                display: `flex`,
                gap: 16,
                alignItems: `center`,
                cursor: `pointer`,
              }}
            >
              <IconEyeOff color="#ffffff4d" size={24} />
              <DropdownSpan>{hideBannedData.label}</DropdownSpan>
            </div>
          </DropdownContainer>
        </>
      ) : null}
    </>
  );
}
