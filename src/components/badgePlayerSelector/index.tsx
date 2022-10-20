import { BadgePlayerSelectorProps } from '@/utilts/types';
import Link from 'next/link';
import { PlayerSelector, SelectedPlayer } from './styles';
import { lime4 } from '../../styles/colors';

export function BadgePLayerSelector({ name }: BadgePlayerSelectorProps) {
  return (
    <PlayerSelector data-testid="player-selector">
      <SelectedPlayer color={name === `fallen` ? lime4 : `white`}>
        <Link href="/player/fallen">FALLEN</Link>
      </SelectedPlayer>
      <SelectedPlayer color={name === `lizzy` ? lime4 : `white`}>
        <Link href="/player/lizzy">LIZZY</Link>
      </SelectedPlayer>
    </PlayerSelector>
  );
}
