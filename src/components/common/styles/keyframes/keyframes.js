import styled, { keyframes } from "styled-components";

export const slightMovement = keyframes`
    0% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(1px);
    }
    50% {
        transform: translateY(2px);
    }
    75% {
        transform: translateY(1px);
    }
    100% {
        transform: translateY(0px);
    }
`;
