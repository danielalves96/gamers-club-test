import { blue5, red4 } from '@/styles/colors';
import { ReportsDataProps } from '@/utilts/types';
import React from 'react';
import { UsersData } from '../usersData';
import { ReportsDataSpacer } from './styles';

export function Reports({ onlinePlayers, bannedPlayers }: ReportsDataProps) {
  return (
    <div>
      <ReportsDataSpacer>
        <UsersData
          total={onlinePlayers.total}
          label={onlinePlayers.label}
          color={blue5}
        />
        <UsersData
          total={bannedPlayers.total}
          label={bannedPlayers.label}
          color={red4}
        />
      </ReportsDataSpacer>
    </div>
  );
}
