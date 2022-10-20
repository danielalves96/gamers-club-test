import { PlayerDataResponse } from '@/utilts/types';

export const mockPlayerDataResponse: PlayerDataResponse = {
  player: {
    id: 94,
    nickname: `OPDV.BabaYaga`,
    avatar: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/ac6fd3610257492db106bc30892bf213aa4a0689_full.jpg`,
    reputation: 100,
    expertise: 100,
  },
  expertiseProgress: [
    {
      key: `casual`,
      limit: 25,
      label: `Casual`,
    },
    {
      key: `competitive`,
      limit: 50,
      label: `Competitivo`,
    },
    {
      key: `amateur`,
      limit: 75,
      label: `Amador`,
    },
    {
      key: `pro`,
      limit: 100,
      label: `Pro`,
    },
  ],
  featuredMedal: {
    name: `Membro Premium`,
    image: `https://gamersclub.com.br/images/medalhas/11.png`,
  },
  tournaments: {
    label: `Campeonatos`,
    nextTournament: {
      id: 4321,
      name: `Minor em Las Vegas nos Estados Unidos da América`,
      status: `openRegistration`,
      currentTeams: 10,
      maxTeams: 32,
    },
  },
  lobby: {
    label: `Lobby`,
    matches: 120,
    wins: 100,
    losses: 20,
    action: {
      label: `Ir para a Lobby`,
      link: `https://gamersclub.com.br/lobby`,
    },
  },
  ranked: {
    label: `Ranked Pro`,
    type: `pro`,
    matches: 954,
    wins: 602,
    losses: 352,
    action: {
      label: `Entrar na Fila`,
      link: `https://gamersclub.com.br/lobby#pro`,
    },
  },
  anticheat: {
    label: `Baixar Gamers Club Anti-Cheat`,
    download: `http://acupdate.gamersclub.com.br/download`,
  },
  reports: [
    {
      type: `online`,
      total: 12509,
      label: `Jogadores **Online**`,
    },
    {
      type: `banned`,
      total: 238,
      label: `Cheaters Banidos **nos últimos 7 dias**`,
    },
  ],
  config: [
    {
      action: `changeAvatar`,
      label: `Alterar Avatar`,
    },
    {
      action: `hideBanned`,
      label: `Ocultar Cheaters Banidos`,
    },
  ],
};
