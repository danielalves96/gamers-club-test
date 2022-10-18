import { opacityWhite2 } from '../../styles/colors';
import styled from 'styled-components';

export const TabsDefault = styled.div`
  display: flex;
  justify-content: space-between;
  background: #212335;
  box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.16);
  height: 236px;
  flex-direction: row;

  div {
    width: 100%;
    outline: 1px solid ${opacityWhite2};
    padding: 18px;
  }
`;
