import styled from 'styled-components';

export const UsersDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DataValue = styled.span<{ color: string }>`
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

export const DataTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DefaultText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const ColorText = styled.span<{ color: string }>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.color};
`;
