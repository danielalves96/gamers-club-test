import styled from 'styled-components';
import { uiDark3 } from '../../styles/colors';

export const TabsDefault = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${uiDark3};
  box-shadow: inset 0px 4px 16px rgba(0, 0, 0, 0.16);
  flex-direction: row;

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;
