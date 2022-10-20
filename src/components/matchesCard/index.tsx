import { MatchesCardProps } from '@/utilts/types';
import CountUp from 'react-countup';
import { CardBodyData, CardBodyLabel, CardBodyNumber } from './styles';

export function MatchesCard({ color, total, label }: MatchesCardProps) {
  return (
    <CardBodyData data-testid="mathes-card">
      <CardBodyNumber color={color}>
        <CountUp start={0} end={total} duration={1.75} />
      </CardBodyNumber>
      <CardBodyLabel>{label}</CardBodyLabel>
    </CardBodyData>
  );
}
