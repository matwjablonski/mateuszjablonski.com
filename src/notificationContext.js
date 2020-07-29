import React from 'react';

export const defaultNotification = {
  status: null,
  message: null,
};

export const NotificationContext = React.createContext(defaultNotification);

export const NotificationProvider = NotificationContext.Provider;

export const NotificationConsumer = NotificationContext.Consumer;
