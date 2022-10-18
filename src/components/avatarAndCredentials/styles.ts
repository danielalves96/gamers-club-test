import styled from 'styled-components';
import { lime4, opacityWhite6, uiDark1, white } from '../../styles/colors';

export const Avatar = styled.img`
  border-radius: 100px;
  border: 4px solid ${uiDark1};
  outline: 2px solid ${lime4};
`;

export const PlayerData = styled.div`
  gap: 16px;
  display: flex;
`;

export const PlayerCredentials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Nickname = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${white};
`;

export const PlayerID = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${opacityWhite6};
`;
