import { BannerHeaderProps } from '@/utilts/types';
import { AvatarAndCredentials } from '../avatarAndCredentials';
import { ExpertiseProgressBar } from '../expertiseProgressBar';
import { FeatureMedal } from '../featureMedal';
import { Banner } from './styles';

const BannerHeader = ({
  ranked,
  player,
  featuredMedal,
  expertiseProgress,
}: BannerHeaderProps) => {
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
