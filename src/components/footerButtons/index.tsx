import { white } from '@/styles/colors';
import React, { useState } from 'react';
import { Button } from '../button';
import { IconCog, IconDownload } from '../icons';
import { Dropdown } from '@/components/dropdown';
import { FooterSpacerButtons } from './styles';
import { FooterButtonsProps } from '@/utilts/types';

export function FooterButtons({
  anticheat,
  hideBannedData,
  changeAvatarData,
}: FooterButtonsProps) {
  function downloadAnticheat(url: string) {
    const newWindow = window.open(url, `_blank`, `noopener,noreferrer`);
    if (newWindow) newWindow.opener = null;
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <FooterSpacerButtons>
        <Button
          icon={<IconCog size={24} />}
          color="#383B51"
          width={40}
          textColor={white}
          onClick={handleOpen}
        />
        <Dropdown
          changeAvatarData={changeAvatarData}
          hideBannedData={hideBannedData}
          open={open}
        />

        <Button
          icon={<IconDownload size={24} />}
          color="#383B51"
          width={281}
          textColor={white}
          text={anticheat.label}
          onClick={() => {
            downloadAnticheat(anticheat.download);
          }}
        />
      </FooterSpacerButtons>
    </>
  );
}
