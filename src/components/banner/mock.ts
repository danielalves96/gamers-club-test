import { BannerHeaderProps } from '@/utilts/types';

export const mockBannerHeader: BannerHeaderProps = {
  ranked: {
    label: `Ranked Open`,
    type: `open`,
    matches: 45,
    wins: 12,
    losses: 33,
    action: {
      label: `Entrar na Fila`,
      link: `https://gamersclub.com.br/lobby#open`,
    },
  },
  expertiseProgress: [
    { key: `casual`, limit: 25, label: `Casual` },
    { key: `competitive`, limit: 50, label: `Competitivo` },
    { key: `amateur`, limit: 75, label: `Amador` },
    { key: `pro`, limit: 100, label: `Pro` },
  ],
  player: {
    id: 737335,
    nickname: `GC.Muleklizzo`,
    avatar: `https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg`,
    reputation: 100,
    expertise: 52,
  },
  featuredMedal: {
    name: `Membro Premium`,
    image: `https://gamersclub.com.br/images/medalhas/11.png`,
  },
};
