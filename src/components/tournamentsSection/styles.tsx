import {
  blue4,
  blue7,
  opacityWhite2,
  opacityWhite3,
  uiDark4,
  white,
} from '../../styles/colors';
import styled from 'styled-components';
export const Section = styled.div`
  width: 100%;
  outline: 1px solid ${opacityWhite2};
  padding: 16px;
`;

export const TournamentsCard = styled.div`
  width: 100%;
  height: 156px;
  left: 16px;
  top: 56px;
  background: ${uiDark4};
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 2px;
  padding: 16px;
  margin-top: 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const SectionHeaderTitle = styled.span`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  color: white;
`;

export const BadgeTournament = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 12px;
  gap: 10px;
  width: 136px;
  height: 20px;
  left: 32px;
  top: 72px;
  border: 1px solid ${(props) => props.color};
  border-radius: 2px;
  justify-content: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.color};
  margin-bottom: 18px;
`;

export const TournamentTitle = styled.span`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: white;

  @media (max-width: 1240px) {
    font-size: 18px;
  }
`;

export const TournamentCurrentTeams = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

export const TournamentMaxTeams = styled.span`
  color: ${opacityWhite3};
`;

export const TournamentTeams = styled.span`
  color: ${white};
`;

export const TournamentTeamsData = styled.div`
  display: flex;
`;

export const TournamentBar = styled.div`
  width: 100%;
  height: 8px;
  top: 188px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  margin-top: 4px;
`;

export const TournamentStatusBar = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 6px;
  background: linear-gradient(90deg, ${blue7} 0%, ${blue4} 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 2px 4px rgb(0 0 0 / 16%),
    inset 0px 1px 0px rgb(255 255 255 / 24%);
  border-radius: 16px;
`;
