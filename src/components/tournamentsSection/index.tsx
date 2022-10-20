import { lime4, red4 } from '../../styles/colors';
import { TournamentProps } from '@/utilts/types';
import React, { useEffect, useState } from 'react';
import { IconTrophy } from '../icons';
import {
  BadgeTournament,
  Section,
  SectionHeader,
  SectionHeaderTitle,
  TournamentBar,
  TournamentCurrentTeams,
  TournamentMaxTeams,
  TournamentsCard,
  TournamentStatusBar,
  TournamentTeams,
  TournamentTeamsData,
  TournamentTitle,
} from './styles';

export function TournamentsSection(tournaments: TournamentProps) {
  const [maxWidthBar, setMaxWidthBar] = useState(334);

  useEffect(() => {
    const width = document.getElementById(`box`) as HTMLElement;

    if (width != null) {
      const offsetWidth = width.offsetWidth;
      setMaxWidthBar(offsetWidth);
    }
  }, []);

  const isOpenTournament =
    tournaments.nextTournament.status === `openRegistration` ? true : false;

  const registrationLabel = isOpenTournament
    ? `Incrições Abertas`
    : `Incrições encerradas`;

  const partialPercentage = `${
    (tournaments.nextTournament.currentTeams /
      tournaments.nextTournament.maxTeams) *
    maxWidthBar
  }px`;

  return (
    <Section data-testid="tounaments-section">
      <SectionHeader>
        <IconTrophy size={25} color={lime4} />
        <SectionHeaderTitle>{tournaments.label}</SectionHeaderTitle>
      </SectionHeader>
      <TournamentsCard>
        <BadgeTournament color={isOpenTournament ? lime4 : red4}>
          {registrationLabel}
        </BadgeTournament>
        <TournamentTitle>{tournaments.nextTournament.name}</TournamentTitle>
        <TournamentCurrentTeams>
          Times inscritos
          <TournamentTeamsData>
            <TournamentTeams>
              {tournaments.nextTournament.currentTeams}
            </TournamentTeams>
            <TournamentMaxTeams>{`/${tournaments.nextTournament.maxTeams}`}</TournamentMaxTeams>
          </TournamentTeamsData>
        </TournamentCurrentTeams>
        <TournamentBar id="box">
          <TournamentStatusBar width={partialPercentage} />
        </TournamentBar>
      </TournamentsCard>
    </Section>
  );
}
