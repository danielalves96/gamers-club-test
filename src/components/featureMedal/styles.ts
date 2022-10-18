import { blue4, red2, red5, uiDark2 } from '../../styles/colors';
import styled from 'styled-components';

export const FeatureMedalImage = styled.div`
  margin-top: 8px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureMedalTop = styled.div<{ type: string }>`
  position: relative;
  width: 100%;
  height: 0px;
  left: 0px;
  right: 0px;
  top: 8px;
  border: 1px dashed
    ${(props) => (props.type === `pro` ? `${red5}` : `${blue4}`)};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const FeatureMedalBox = styled.div<{ type: string }>`
  width: 60px;
  height: 80px;
  right: 16px;
  top: calc(50% - 80px / 2);
  background: ${(props) =>
    props.type === `pro`
      ? `linear-gradient(180deg, rgba(251, 75, 86, 0) 50%, ${red2} 98.7%), ${uiDark2};`
      : `linear-gradient(
      180deg,
      rgba(89, 104, 248, 0) 50%,
      rgba(89, 104, 248, 0.16) 98.7%
    ),
    #1c1d2c;`};
  border: 1px solid
    ${(props) => (props.type === `pro` ? `${red5}` : `${blue4}`)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

export const MedalImage = styled.img`
  width: 56px;
`;
