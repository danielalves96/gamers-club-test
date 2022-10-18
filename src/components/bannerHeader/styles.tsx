import {
  blue6,
  opacityWhite2,
  opacityWhite5,
  red1,
  uiDark3,
  uiDark6,
} from '../../styles/colors';
import styled from 'styled-components';

export const Banner = styled.div<{ type: string }>`
  width: 1200px;
  height: 128px;
  background-size: contain !important;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-position-x: center !important;
  background: ${(props) =>
    props.type === `pro`
      ? `linear-gradient(180deg, ${red1} 0%, rgba(251, 75, 86, 0) 100%),
    linear-gradient(
      90deg,
      ${uiDark3} 17.54%,
      ${uiDark6} 51.46%,
      ${uiDark3} 82.67%
    ),
    url('/images/bg-pro.png'), ${uiDark3};`
      : `linear-gradient(180deg, ${blue6} 0%, ${opacityWhite5} 100%),
    linear-gradient(
      90deg,
      ${uiDark3} 17.54%,
      ${uiDark6} 51.46%,
      ${uiDark3} 82.67%
    ),
    url('/images/bg-comp.png'), ${uiDark3};`};
  border-radius: 2px 2px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid ${opacityWhite2};
`;
