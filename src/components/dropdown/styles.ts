import styled from 'styled-components';
import { uiDark5 } from '../../styles/colors';

export const DropdownContainer = styled.div`
  position: absolute;
  margin-top: 3rem;
  width: 280px;
  height: 96px;
  background: ${uiDark5};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 16px 32px rgb(0 0 0 / 24%), 0px 8px 16px rgb(0 0 0 / 24%);
  border-radius: 2px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
`;

export const DropdownArrow = styled.div`
  width: 14px;
  height: 14px;
  margin-top: 44px;
  margin-left: 13px;
  background: ${uiDark5};
  border: 1px solid rgba (255, 255, 255, 0.08);
  box-shadow: 0px 16px 32px rgb (0 0 0 / 24%), 0px 8px 16px rgb (0 0 0 / 24%);
  position: absolute;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 0;
`;

export const DropdownSpan = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: white;
`;

export const DropdownAligner = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
`;
