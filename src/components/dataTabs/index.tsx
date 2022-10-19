import { blue5, red5, yellow2 } from '@/styles/colors';
import { DataTabsProps } from '@/utilts/types';
import React from 'react';
import { IconArrowRight, IconDoor, IconUsers } from '../icons';
import { MatchesSection } from '../matchesSection';
import { TabsDefault } from './styles';
import { TournamentsSection } from '../tournamentsSection';

export function DataTabs({ ranked, lobby, tournaments }: DataTabsProps) {
  const isProPlayer = ranked.type === `pro` ? true : false;

  return (
    <TabsDefault>
      <TournamentsSection {...tournaments} />
      <MatchesSection
        color={yellow2}
        matchData={lobby}
        buttonTextColor="#000"
        buttonIcon={<IconArrowRight size={24} color="#000" />}
        icon={<IconDoor size={24} color={yellow2} />}
      />
      <MatchesSection
        color={isProPlayer ? red5 : blue5}
        matchData={ranked}
        buttonTextColor="white"
        buttonIcon={<IconUsers size={24} />}
        icon={<IconDoor size={24} color={isProPlayer ? red5 : blue5} />}
      />
    </TabsDefault>
  );
}
