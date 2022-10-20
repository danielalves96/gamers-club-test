import { UsersDataProps } from '@/utilts/types';
import React from 'react';
import {
  ColorText,
  DataTexts,
  DataValue,
  DefaultText,
  UsersDataContainer,
} from './styles';
import CountUp from 'react-countup';

export function UsersData({ total, label, color }: UsersDataProps) {
  const splitedLabel = label.split(`**`).filter((element) => {
    return element !== ``;
  });

  return (
    <UsersDataContainer data-testid="users-data">
      <DataValue color={color}>
        <CountUp start={0} end={total} duration={2.5} />
      </DataValue>
      <DataTexts>
        <DefaultText>{splitedLabel[0]}</DefaultText>
        <ColorText color={color}>{splitedLabel[1]}</ColorText>
      </DataTexts>
    </UsersDataContainer>
  );
}
