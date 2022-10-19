import styled from 'styled-components';

export const CardBodyData = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  padding: 8px;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const CardBodyNumber = styled.div<{ color: string }>`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: ${(props) => props.color}; ;
`;

export const CardBodyLabel = styled.span`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;
