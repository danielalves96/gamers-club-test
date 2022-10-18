import { PlayerProps } from '@/utilts/types';
import React from 'react';
import {
  Avatar,
  Nickname,
  PlayerCredentials,
  PlayerData,
  PlayerID,
} from './styles';

export function AvatarAndCredentials(player: PlayerProps) {
  return (
    <PlayerData data-testid="avatar-and-credentials">
      <Avatar
        src={player.avatar}
        alt={player.nickname}
        width={44}
        height={44}
      />
      <PlayerCredentials>
        <Nickname>{player.nickname}</Nickname>
        <PlayerID>{`ID: ${player.id}`}</PlayerID>
      </PlayerCredentials>
    </PlayerData>
  );
}
