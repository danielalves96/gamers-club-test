import styled from 'styled-components';

export const ExpertiseBar = styled.div`
  width: 480px;
  height: 16px;
  background: #1c1d2c;
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
      ? `linear-gradient(90deg, #fb4b56 0%, #fc6973 100%);`
      : `linear-gradient(90deg, #49A3FD 0%, #61B3FA 100%);`};
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
`;

export const ExpertisePinSpacer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;
