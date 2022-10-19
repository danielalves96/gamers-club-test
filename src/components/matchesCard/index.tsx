import { MatchesCardProps } from '@/utilts/types';
import React from 'react';
import { CardBodyData, CardBodyLabel, CardBodyNumber } from './styles';

export function MatchesCard({ color, total, label }: MatchesCardProps) {
  return (
    <CardBodyData>
      <CardBodyNumber color={color}>{total}</CardBodyNumber>
      <CardBodyLabel>{label}</CardBodyLabel>
    </CardBodyData>
  );
}
