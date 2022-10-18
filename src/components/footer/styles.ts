import { opacityWhite2 } from '../../styles/colors';
import styled from 'styled-components';

export const FooterDefault = styled.div`
  display: flex;
  justify-content: space-between;
  background: #212335;
  border-radius: 0px 0px 2px 2px;
  outline: 1px solid ${opacityWhite2};
  height: 72px;
  padding: 16px;
  align-items: center;
  gap: 8px;
`;
