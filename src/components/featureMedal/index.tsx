import { FeaturedMedalComponentProps } from '@/utilts/types';
import React from 'react';
import {
  FeatureMedalBox,
  FeatureMedalImage,
  FeatureMedalTop,
  MedalImage,
} from './styles';

export function FeatureMedal({
  ranked,
  featuredMedal,
}: FeaturedMedalComponentProps) {
  return (
    <FeatureMedalBox type={ranked.type} data-testid="feature-medal">
      <FeatureMedalTop type={ranked.type} />
      <FeatureMedalImage>
        <MedalImage src={featuredMedal.image} alt={featuredMedal.name} />
      </FeatureMedalImage>
    </FeatureMedalBox>
  );
}
