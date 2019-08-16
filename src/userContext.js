import React from 'react';

const unloggedUser = {
  name: '',
};

export const userContext = React.createContext(unloggedUser);

export const userProvider = userContext.Provider;

export const userConsumer = userContext.Consumer;
