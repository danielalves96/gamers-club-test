import { useBannedPlayers } from '@/contexts/BannedPlayersContext';
import { opacityWhite7 } from '@/styles/colors';
import { DropdownProps } from '@/utilts/types';
import React, { useEffect } from 'react';
import { IconEyeOff, IconUserPlus } from '../icons';
import {
  DropdownContainer,
  DropdownArrow,
  DropdownSpan,
  DropdownAligner,
} from './styles';

export function Dropdown({
  open,
  setOpen,
  changeAvatarData,
  hideBannedData,
}: DropdownProps) {
  const {
    isHiddenBanPlayersData,
    setIsHiddenBanPlayersData,
    setButtonText,
    buttonText,
  } = useBannedPlayers();

  useEffect(() => {
    setButtonText(hideBannedData.label);
  }, []);

  function handleHiddenBanPlayers() {
    setIsHiddenBanPlayersData(!isHiddenBanPlayersData);

    if (isHiddenBanPlayersData === false) {
      setButtonText(`Exibir Cheaters Banidos`);
    } else {
      setButtonText(hideBannedData.label);
    }

    setOpen(false);
  }

  function handleChangeAvatar() {
    alert(`Esta função não está disponível no momento.`);
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <>
          <DropdownArrow />
          <DropdownContainer>
            <DropdownAligner>
              <IconUserPlus color={opacityWhite7} size={24} />
              <DropdownSpan
                onClick={() => {
                  handleChangeAvatar();
                }}
              >
                {changeAvatarData.label}
              </DropdownSpan>
            </DropdownAligner>
            <DropdownAligner>
              <IconEyeOff color={opacityWhite7} size={24} />
              <DropdownSpan
                onClick={() => {
                  handleHiddenBanPlayers();
                }}
              >
                {buttonText}
              </DropdownSpan>
            </DropdownAligner>
          </DropdownContainer>
        </>
      ) : null}
    </>
  );
}
