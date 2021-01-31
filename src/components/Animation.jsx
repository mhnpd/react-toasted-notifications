import { keyframes, css } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translate(0,-10px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideOut = keyframes`
0% {
    opacity: 1;

  }
  100% {
    transform: translate(0,-10px);
    opacity:0;
    display:none;

  }
`;

export const show = css`
  animation: ${slideIn} 0.5s ease-in forwards;
`;

export const hidden = css`
  animation: ${slideOut} 0.5s ease-in forwards;
`;
