import styled from 'styled-components';
import { opacityWhite2, uiDark3 } from '../../styles/colors';

export const FooterDefault = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${uiDark3};
  border-radius: 0px 0px 2px 2px;
  outline: 1px solid ${opacityWhite2};
  padding: 16px;
  align-items: center;
  gap: 8px;

  @media (max-width: 700px) {
    font-size: 18px;
    flex-direction: column;
    gap: 16px;
  }
`;
