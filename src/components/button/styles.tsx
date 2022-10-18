import styled from 'styled-components';

export const ButtonDefault = styled.button<{
  color: string;
  width: number;
  textColor: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: ${(props) => `${props.width}px`};
  height: 40px;
  background: ${(props) => props.color};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.16),
    inset 0px 1px 0px rgba(255, 255, 255, 0.24);
  border-radius: 2px;
  font-family: 'Teko';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  justify-content: center;
  cursor: pointer;
  gap: 12px;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.85;
  }
`;

export const ButtonTextAlign = styled.div`
  padding-top: 5px;
`;
