import { opacityWhite2 } from '../../styles/colors';
import styled from 'styled-components';

export const SectionMatches = styled.div`
  width: 100%;
  outline: 1px solid ${opacityWhite2};
  padding: 16px;
`;
export const SectionHeader = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const SectionHeaderTitle = styled.span`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  color: white;
`;

export const SectionBody = styled.div`
  display: flex;
  margin-top: 17px;
  gap: 8px;
  justify-content: space-between;
`;

export const SectionFooter = styled.div`
  margin-top: 24px;
`;
