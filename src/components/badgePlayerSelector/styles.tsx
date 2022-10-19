import { uiDark5 } from '../../styles/colors';
import styled from 'styled-components';

export const PlayerSelector = styled.div`
  position: fixed;
  width: fit-content;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2rem;
  bottom: 2rem;
  background: ${uiDark5};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 16px 32px rgb(0 0 0 / 24%), 0px 8px 16px rgb(0 0 0 / 24%);
  border-radius: 2px;
  justify-content: space-between;
  padding: 0.8rem;
  gap: 2rem;

  @media (max-width: 830px) {
    display: none;
  }
`;

export const SelectedPlayer = styled.div<{ color: string }>`
  color: ${(props) => props.color}; ;
`;
