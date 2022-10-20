import {
  ExpertiseProgressBarProps,
  ExpertiseProgressProps,
} from '@/utilts/types';
import { blue4, red4 } from '../../styles/colors';
import { IconPin } from '../icons';
import {
  ExpertiseBar,
  ExpertisePin,
  ExpertisePinSpacer,
  MainExpertise,
  PinGrid,
  PinLabel,
  PinPosition,
  StatusBar,
} from './styles';

export function ExpertiseProgressBar({
  ranked,
  expertiseProgress,
  player,
}: ExpertiseProgressBarProps) {
  const expertiseProgressData = expertiseProgress.map(
    (item: ExpertiseProgressProps) => {
      if (item.key === `casual` || item.key === `amateur`)
        return {
          limit: Math.abs(50 - item.limit),
          label: item.label,
          key: item.key,
        };
      else if (item.key === `pro`) {
        return { limit: item.limit - 100, label: item.label, key: item.key };
      } else {
        return { limit: 50 - item.limit, label: item.label, key: item.key };
      }
    },
  );

  const topBarData = expertiseProgressData.filter(
    (item: ExpertiseProgressProps) => {
      return item.key === `casual` || item.key === `amateur`;
    },
  );

  const bottomBarData = expertiseProgressData.filter(
    (item: ExpertiseProgressProps) => {
      return item.key === `pro` || item.key === `competitive`;
    },
  );
  return (
    <MainExpertise data-testid="expertise-progress-bar">
      <ExpertisePinSpacer>
        {topBarData.map((item: ExpertiseProgressProps) => (
          <PinPosition
            key={item.key}
            style={{
              paddingRight: `${item.limit}%`,
            }}
          >
            <PinGrid>
              <ExpertisePin>
                <PinLabel>{item.label}</PinLabel>
                <IconPin
                  size={20}
                  color={ranked.type === `pro` ? red4 : blue4}
                />
              </ExpertisePin>
            </PinGrid>
          </PinPosition>
        ))}
      </ExpertisePinSpacer>
      <ExpertiseBar>
        <StatusBar expertise={player.expertise} type={ranked.type} />
      </ExpertiseBar>
      <ExpertisePinSpacer>
        {bottomBarData.map((item: ExpertiseProgressProps) => (
          <PinPosition
            key={item.key}
            style={{
              paddingRight: `${item.limit}%`,
            }}
          >
            <PinGrid>
              <ExpertisePin>
                <PinLabel>{item.label}</PinLabel>
                <IconPin
                  size={20}
                  color={ranked.type === `pro` ? red4 : blue4}
                  reverse
                />
              </ExpertisePin>
            </PinGrid>
          </PinPosition>
        ))}
      </ExpertisePinSpacer>
    </MainExpertise>
  );
}
