import React, { useEffect } from "react";
import { Notification, useNotification } from "../src/";

export default {
  title: "Example",
  component: Implementation,
};

export const Implementation = (props) => {
  const [Message, action] = useNotification();

  const handleNotification = () => {
    action.addNotification({
      title: "Warning",
      type: "warning",
      message: "Choose more strong password.",
    });
  };

  return (
    <p>
      <button onClick={handleNotification}>Click</button>
      <Notification />
    </p>
  );
};

export const ErrorExample = (props) => {
  const [Message, action] = useNotification();

  const handleNotification = () => {
    action.addNotification({
      title: "Error Occurred",
      type: "error",
      message: "Provided value is incorrect",
    });
  };

  return (
    <p>
      <button onClick={handleNotification}>Click</button>
      <Notification />
    </p>
  );
};

export const SuccessExample = (props) => {
  const [Message, action] = useNotification();

  const handleNotification = () => {
    action.addNotification({
      title: "Successes",
      type: "success",
      message: "Operation Completed",
    });
  };

  return (
    <p>
      <button onClick={handleNotification}>Click</button>
      <Notification />
    </p>
  );
};

export const InfoExample = (props) => {
  const [Message, action] = useNotification();

  const handleNotification = () => {
    action.addNotification({
      title: "Info",
      type: "info",
      message: "This is information",
    });
  };

  return (
    <p>
      <button onClick={handleNotification}>Click</button>
      <Notification />
    </p>
  );
};
