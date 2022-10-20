import { DataTabsProps } from '@/utilts/types';
import { black0, blue5, red5, yellow2 } from '../../styles/colors';
import { IconArrowRight, IconDoor, IconMissions, IconUsers } from '../icons';
import { MatchesSection } from '../matchesSection';
import { TournamentsSection } from '../tournamentsSection';
import { TabsDefault } from './styles';

export function DataTabs({ ranked, lobby, tournaments }: DataTabsProps) {
  const isProPlayer = ranked.type === `pro` ? true : false;

  return (
    <TabsDefault data-testid="data-tabs">
      <TournamentsSection {...tournaments} />
      <MatchesSection
        color={yellow2}
        matchData={lobby}
        buttonTextColor={black0}
        buttonIcon={<IconArrowRight size={24} color={black0} />}
        icon={<IconDoor size={24} color={yellow2} />}
      />
      <MatchesSection
        color={isProPlayer ? red5 : blue5}
        matchData={ranked}
        buttonTextColor="white"
        buttonIcon={<IconUsers size={24} />}
        icon={<IconMissions size={24} color={isProPlayer ? red5 : blue5} />}
      />
    </TabsDefault>
  );
}
