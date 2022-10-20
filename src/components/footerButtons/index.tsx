import { FooterButtonsProps } from '@/utilts/types';
import { useState } from 'react';
import { Dropdown } from '../../components/dropdown';
import { uiDark5, white } from '../../styles/colors';
import { Button } from '../button';
import { IconCog, IconDownload } from '../icons';
import { FooterSpacerButtons } from './styles';

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
      <FooterSpacerButtons data-testid="footer-buttons">
        <Button
          icon={<IconCog size={24} />}
          color={uiDark5}
          width="40px"
          textColor={white}
          onClick={handleOpen}
        />
        <Dropdown
          changeAvatarData={changeAvatarData}
          hideBannedData={hideBannedData}
          open={open}
          setOpen={setOpen}
        />

        <Button
          icon={<IconDownload size={24} />}
          color={uiDark5}
          width="281px"
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
