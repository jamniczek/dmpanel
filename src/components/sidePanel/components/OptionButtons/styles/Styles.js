import styled from 'styled-components';
import { defaultBorderRadius } from '../../../../common/styles/mixins';
import { slightMovement } from '../../../../common/styles/keyframes/keyframes';

export const Container = styled.div`
  ${defaultBorderRadius}
  display: flex;
  margin: 20px;
  justify-content: space-around;
  align-items: center;
  max-height: 80px;
`;

export const Button = styled.button`
  display: flex;
  position: relative;
  border: 0;
  background-color: transparent;
  margin: 5px 0;
  transition: all 0.5s;
  animation: ${slightMovement} 1.5s linear infinite;
  outline: none;

  &:focus {
    outline: none;
  }

  & .mouseOver {
    transform: scale(1.05);
  }

  & > span {
    color: #000000;
    padding: 2px;
    font-size: 20px;
    font-weight: bold;
  }
`;
