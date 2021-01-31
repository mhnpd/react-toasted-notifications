import React from "react";
import styled from "styled-components";

const backgroundColor = "#bd2a2a";

const CloseButtonWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f1eaea;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 5px;
  transform: translate(-50%, -50%);
  background: transparent;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background: ${backgroundColor};
    transform: rotate(-45deg);
  }

  &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background: ${backgroundColor};
    transform: rotate(45deg);
  }
`;

export function CloseButton(props) {
  return (
    <CloseButtonWrapper {...props}>
      <Close />
    </CloseButtonWrapper>
  );
}
