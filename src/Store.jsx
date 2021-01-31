import React from "react";
import globalHook from "use-global-hook";
import { v4 as uuidv4 } from "uuid";

//** Define initial state */
const initialState = {
  notifications: [],
};

/** Create Notification */
const createNotification = (notification) => {
  return {
    id: uuidv4(),
    title: notification?.title || "",
    message: notification?.message || "",
    type: notification?.type || "info",
    timeout: notification?.timeout || null,
    colors: notification?.color || null,
    onClose: notification?.onClose || null,
  };
};

/** Change visibility */
const changeVisibility = (notifications, id) => {
  return notifications.map((item) => {
    if (item.id === id) {
      return { ...item, visible: false };
    }
    return item;
  });
};

/** Remove notification */
const removeNotification = (notifications, id) => {
  return notifications.filter((item) => item.id !== id);
};

/** Actions for global hooks */
const actions = {
  addNotification: (store, notification) => {
    const formattedNotification = createNotification(notification);
    store.setState({
      notifications: [
        ...store.state.notifications,
        createNotification(notification),
      ],
    });
  },
  changeVisibility: (store, id) => {
    store.setState({
      notifications: [...changeVisibility(store.state.notifications, id)],
    });
  },
  removeNotification: (store, id) => {
    store.setState({
      notifications: [...removeNotification(store.state.notifications, id)],
    });
  },
};

// Exporting global hook
export const useGlobal = globalHook(React, initialState, actions);

// Exporting global hook instance
export function useNotification() {
  const [globalState, globalActions] = useGlobal();
  return [globalState, globalActions];
}
