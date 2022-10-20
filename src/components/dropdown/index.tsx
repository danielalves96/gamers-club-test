import { DropdownProps } from '@/utilts/types';
import { useEffect } from 'react';
import { useBannedPlayers } from '../../contexts/BannedPlayersContext';
import { opacityWhite7 } from '../../styles/colors';
import { IconEyeOff, IconUserPlus } from '../icons';
import {
  DropdownAligner,
  DropdownArrow,
  DropdownContainer,
  DropdownSpan,
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
          <DropdownContainer data-testid="dropdown">
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
