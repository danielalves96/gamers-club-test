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
