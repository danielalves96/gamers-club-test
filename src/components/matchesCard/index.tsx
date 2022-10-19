import { MatchesCardProps } from '@/utilts/types';
import React from 'react';
import { CardBodyData, CardBodyLabel, CardBodyNumber } from './styles';
import CountUp from 'react-countup';

export function MatchesCard({ color, total, label }: MatchesCardProps) {
  return (
    <CardBodyData>
      <CardBodyNumber color={color}>
        <CountUp start={0} end={total} duration={1.75} />
      </CardBodyNumber>
      <CardBodyLabel>{label}</CardBodyLabel>
    </CardBodyData>
  );
}
