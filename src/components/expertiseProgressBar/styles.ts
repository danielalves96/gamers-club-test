import styled from 'styled-components';
import { blue3, blue4, red3, red4, uiDark2, white } from '../../styles/colors';

export const ExpertiseBar = styled.div`
  width: 480px;
  height: 16px;
  background: ${uiDark2};
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.04),
    inset 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 4px;
  padding-top: 0.8px;
`;

export const StatusBar = styled.div<{ expertise: number; type: string }>`
  width: ${(props) => `${props.expertise}%`};
  max-width: 99%;
  height: 8px;
  left: 4px;
  top: 28px;
  background: ${(props) =>
    props.type === `pro`
      ? `linear-gradient(90deg, ${red4} 0%, ${red3} 100%);`
      : `linear-gradient(90deg, ${blue4} 0%, ${blue3} 100%);`};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 2px 4px rgb(0 0 0 / 16%),
    inset 0px 1px 0px rgb(255 255 255 / 24%);
  border-radius: 16px;
`;

export const PinGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  min-width: 4%;
`;

export const ExpertisePin = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
`;

export const PinPosition = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 3%;
  justify-content: flex-end;
  min-width: 50%;
`;

export const PinLabel = styled.span`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  text-transform: uppercase;
  color: ${white};
`;

export const ExpertisePinSpacer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
`;

export const MainExpertise = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;

  @media (max-width: 925px) {
    display: none;
  }
`;
