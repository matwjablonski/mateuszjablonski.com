import React from 'react';

export const unloggedUser = {
  name: '',
};

export const UserContext = React.createContext(unloggedUser);

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;
