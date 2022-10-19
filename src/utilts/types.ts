import { ReactNode } from 'react';

export type IconsProps = {
  size: number;
  color?: string;
  reverse?: boolean;
};

export type DefaultError = {
  error: {
    message: string;
  };
};

export type PlayerDataProps = {
  playerData: PlayerDataResponse;
};

export type PlayerDataResponse = {
  player: PlayerProps;
  expertiseProgress: ExpertiseProgressProps[];
  featuredMedal: FeaturedMedalProps;
  tournaments: TournamentProps;
  lobby: LobbyProps;
  ranked: RankedProps;
  anticheat: AntiCheatProps;
  reports: ReportsProps[];
  config: ConfigProps[];
};

export type ConfigProps = {
  action: string;
  label: string;
};

export type ReportsProps = {
  type: string;
  total: number;
  label: string;
};

export type AntiCheatProps = {
  label: string;
  download: string;
};

export type RankedProps = LobbyProps & {
  type: string;
};

export type LobbyProps = {
  label: string;
  matches: number;
  wins: number;
  losses: number;
  action: ActionProps;
};

export type ActionProps = {
  label: string;
  link: string;
};

export type PlayerProps = {
  id: number;
  nickname: string;
  avatar: string;
  reputation: number;
  expertise: number;
};

export type ExpertiseProgressProps = {
  key: string;
  limit: number;
  label: string;
};

export type FeaturedMedalProps = {
  name: string;
  image: string;
};

export type TournamentProps = {
  label: string;
  nextTournament: NextTournamentProps;
};

export type NextTournamentProps = {
  id: number;
  name: string;
  status: string;
  currentTeams: number;
  maxTeams: number;
};

export type FeaturedMedalComponentProps = {
  ranked: RankedProps;
  featuredMedal: FeaturedMedalProps;
};

export type ExpertiseProgressBarProps = {
  ranked: RankedProps;
  expertiseProgress: ExpertiseProgressProps[];
  player: PlayerProps;
};

export type BannerHeaderProps = {
  ranked: RankedProps;
  expertiseProgress: ExpertiseProgressProps[];
  player: PlayerProps;
  featuredMedal: FeaturedMedalProps;
};

export type ButtonProps = {
  color: string;
  textColor: string;
  icon?: JSX.Element;
  width: number;
  text?: string;
  onClick?: () => void;
};

export type FooterProps = {
  config: ConfigProps[];
  anticheat: AntiCheatProps;
  reports: ReportsProps[];
};

export type DropdownProps = {
  open: boolean;
  setOpen: (boolean: boolean) => void;
  changeAvatarData: ConfigProps;
  hideBannedData: ConfigProps;
};

export type ReportsDataProps = {
  onlinePlayers: ReportsProps;
  bannedPlayers: ReportsProps;
};

export type FooterButtonsProps = {
  anticheat: AntiCheatProps;
  changeAvatarData: ConfigProps;
  hideBannedData: ConfigProps;
};

export type BannedPlayersContextType = {
  isHiddenBanPlayersData: boolean;
  setIsHiddenBanPlayersData: (isHiddenBanPlayersData: boolean) => void;
  buttonText: string;
  setButtonText: (isHiddenBanPlayersData: string) => void;
};

export type ReactNodeProps = {
  children: ReactNode;
};

export type DataTabsProps = {
  ranked: RankedProps;
  lobby: LobbyProps;
  tournaments: TournamentProps;
};

export type MatchesSectionProps = {
  color: string;
  matchData: LobbyProps;
  icon: JSX.Element;
  buttonTextColor: string;
  buttonIcon: JSX.Element;
};

export type MatchesCardProps = {
  color: string;
  total: number;
  label: string;
};

export type UsersDataProps = {
  total: number;
  label: string;
  color: string;
};
