import React, { useEffect } from "react";
import styled from "styled-components";

/** Local Import */
import { show, hidden } from "./Animation";
import { CloseButton } from "./CloseButton";
import { getIcon } from "../utils/constant";
import { useGlobal } from "../Store";

const Toast = styled.div`
  display: flex;
  justify-content: start;
  width: 580px;
  height: 80px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  ${(p) => (p.visible ? show : hidden)}
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Before = styled.div`
  width: 5px;
  height: 80px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: ${(p) => p.colors[p.type]};
`;

const Text = styled.div`
  width: 400px;
  align-self: flex-start;
  flex-wrap: wrap;
  display: flex;
  align-items: start;
  margin-left: 30px;
  margin-top: 15px;
  text-align: left;
  > * {
    margin: 0;
    width: 400px;
  }
`;

const MessageContainer = styled.p`
  &::first-child {
    font-weight: bold;
    margin-top: 15px;
  }
`;

const Message = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  color: #878787;
`;

const MessageBox = ({
  id,
  visible,
  message,
  title,
  type,
  onClose,
  timeout,
  colors,
}) => {
  const [, globalActions] = useGlobal();
  useEffect(() => {
    let timer1 = setTimeout(() => {
      globalActions.changeVisibility(id);
      let timer2 = setTimeout(() => {
        globalActions.removeNotification(id);
      }, 1000);
    }, timeout);

    return () => {
      [timer1, timer2].map((item) => clearTimeout(item));
    };
  }, []);

  const handleClose = () => {
    globalActions.removeNotification(id);
    onClose(id);
  };
  return (
    <Toast visible={visible}>
      <ToastContent>
        <Before type={type} colors={colors} />
        {getIcon(type, colors)}
        <Text>
          <MessageContainer>{title}</MessageContainer>
          <MessageContainer>
            <Message>{message}</Message>
          </MessageContainer>
        </Text>
        <CloseButton onClick={handleClose} />
      </ToastContent>
    </Toast>
  );
};

MessageBox.defaultProps = {
  visible: true,
  title: "Success",
  type: "info",
  message: "Some Message",
  timeout: 5000,
  onClose: () => {
    console.log("On close is clicked");
  },
};

export { MessageBox };
