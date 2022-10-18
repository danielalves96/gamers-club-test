import { PlayerDataResponse } from '@/utilts/types';
import React from 'react';
import { AvatarAndCredentials } from '../avatarAndCredentials';
import { ExpertiseProgressBar } from '../expertiseProgressBar';
import { FeatureMedal } from '../featureMedal';
import { Banner } from './styles';

const BannerHeader = ({
  ranked,
  player,
  featuredMedal,
  expertiseProgress,
}: PlayerDataResponse) => {
  return (
    <>
      <Banner type={ranked.type}>
        <AvatarAndCredentials {...player} />
        <ExpertiseProgressBar
          ranked={ranked}
          player={player}
          expertiseProgress={expertiseProgress}
        />
        <FeatureMedal ranked={ranked} featuredMedal={featuredMedal} />
      </Banner>
    </>
  );
};

export default BannerHeader;
