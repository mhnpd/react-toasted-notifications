import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { MessageBox } from "./components/MessageBox";
import { useGlobal } from "./Store";

const topRight = css`
  top: 10px;
  right: 10px;
`;

const bottomRight = css`
  bottom: 10px;
  right: 10px;
`;

const topLeft = css`
  top: 10px;
  left: 10px;
`;

const bottomLeft = css`
  bottom: 10px;
  left: 10px;
`;

export const ToastArea = styled.div`
  position: fixed;
  z-index: 2000;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  > * {
    margin-top: 1em;
  }
  ${(p) => (p.position === "topRight" ? topRight : undefined)}
  ${(p) => (p.position === "bottomRight" ? bottomRight : undefined)}
  ${(p) => (p.position === "topLeft" ? topLeft : undefined)}
  ${(p) => (p.position === "bottomLeft" ? bottomLeft : undefined)}
  
  top:${(p) => p.top};
  left:${(p) => p.left};
  right:${(p) => p.right};
  bottom:${(p) => p.bottom};
`;

/** Notification Components */
export const Notification = (props) => {
  const [globalState] = useGlobal();
  return (
    <ToastArea
      position={props.position}
      left={props.left}
      right={props.right}
      top={props.top}
      bottom={props.bottom}
    >
      {globalState.notifications.map(({ colors, timeout, ...notification }) => (
        <MessageBox
          key={notification.id}
          timeout={timeout || props.timeout}
          colors={colors || props.colors}
          {...notification}
        />
      ))}
    </ToastArea>
  );
};

Notification.propTypes = {
  /**
   * This props will over-ride default global timeout
   */
  timeout: PropTypes.number,
  /**
   * This props will override the global  code for type of messages
   */
  colors: PropTypes.object,
  /**
   * Possible values: ["topRight", bottomRight, topLeft, bottomLeft ]
   */
  position: PropTypes.string,
  /**
   * left property for css
   */
  left: PropTypes.string,
  /**
   * right property for css
   */
  right: PropTypes.string,
  /**
   * left property for css
   */
  top: PropTypes.string,
  /**
   * top property for css
   */
  bottom: PropTypes.string,
};

Notification.defaultProps = {
  timeout: 5000,
  position: "bottomRight",
  colors: {
    error: "#E44D4D",
    warning: "#F1AC12",
    info: "#3090FF",
    success: "#72C51B",
  },
};
