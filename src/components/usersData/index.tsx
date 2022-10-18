import React from 'react';
import {
  ColorText,
  DataTexts,
  DataValue,
  DefaultText,
  UsersDataContainer,
} from './styles';

export type UsersDataProps = {
  total: number;
  label: string;
  color: string;
};

export function UsersData({ total, label, color }: UsersDataProps) {
  const splitedLabel = label.split(`**`).filter((element) => {
    return element !== ``;
  });

  return (
    <UsersDataContainer>
      <DataValue color={color}>{total}</DataValue>
      <DataTexts>
        <DefaultText>{splitedLabel[0]}</DefaultText>
        <ColorText color={color}>{splitedLabel[1]}</ColorText>
      </DataTexts>
    </UsersDataContainer>
  );
}
