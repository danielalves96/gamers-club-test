import { FooterProps } from '@/utilts/types';
import React from 'react';
import { FooterDefault } from './styles';
import { Reports } from '@/components/reports';
import { FooterButtons } from '@/components/footerButtons';

export function Footer({ config, anticheat, reports }: FooterProps) {
  const [onlinePlayers] = reports.filter((item) => item.type === `online`);
  const [bannedPlayers] = reports.filter((item) => item.type === `banned`);

  const [changeAvatarData] = config.filter(
    (item) => item.action === `changeAvatar`,
  );

  const [hideBannedData] = config.filter(
    (item) => item.action === `hideBanned`,
  );

  return (
    <FooterDefault>
      <FooterButtons
        anticheat={anticheat}
        changeAvatarData={changeAvatarData}
        hideBannedData={hideBannedData}
      />
      <Reports onlinePlayers={onlinePlayers} bannedPlayers={bannedPlayers} />
    </FooterDefault>
  );
}
