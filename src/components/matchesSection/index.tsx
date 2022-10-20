import { lime4, red3 } from '../../styles/colors';
import { MatchesSectionProps } from '@/utilts/types';
import { Button } from '../button';
import { MatchesCard } from '../matchesCard';
import {
  SectionMatches,
  SectionBody,
  SectionFooter,
  SectionHeader,
  SectionHeaderTitle,
} from './styles';

export function MatchesSection({
  color,
  matchData,
  icon,
  buttonTextColor,
  buttonIcon,
}: MatchesSectionProps) {
  function handleButtonClick(url: string) {
    const newWindow = window.open(url, `_blank`, `noopener,noreferrer`);
    if (newWindow) newWindow.opener = null;
  }
  return (
    <SectionMatches data-testid="matches-section">
      <SectionHeader>
        {icon}
        <SectionHeaderTitle>{matchData.label}</SectionHeaderTitle>
      </SectionHeader>
      <SectionBody>
        <MatchesCard color={color} total={matchData.matches} label="Partidas" />
        <MatchesCard color={lime4} total={matchData.wins} label="Vitórias" />
        <MatchesCard color={red3} total={matchData.losses} label="Derrotas" />
      </SectionBody>
      <SectionFooter>
        <Button
          color={color}
          width="100%"
          icon={buttonIcon}
          textColor={buttonTextColor}
          text={matchData.action.label}
          onClick={() => {
            handleButtonClick(matchData.action.link);
          }}
        />
      </SectionFooter>
    </SectionMatches>
  );
}
