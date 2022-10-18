import { FeaturedMedalComponentProps } from '@/utilts/types';

export const mockFeatureMedal: FeaturedMedalComponentProps = {
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
  featuredMedal: {
    name: `2k20 na Cabeça`,
    image: `https://gamersclub.com.br/images/medalhas/268.png`,
  },
};

export const mockFeatureMedalPro: FeaturedMedalComponentProps = {
  ranked: {
    label: `Ranked Open`,
    type: `pro`,
    matches: 45,
    wins: 12,
    losses: 33,
    action: {
      label: `Entrar na Fila`,
      link: `https://gamersclub.com.br/lobby#open`,
    },
  },
  featuredMedal: {
    name: `2k20 na Cabeça`,
    image: `https://gamersclub.com.br/images/medalhas/11.png`,
  },
};
