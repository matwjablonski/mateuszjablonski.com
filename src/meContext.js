import React from 'react';

export const me = {
  name: '',
};

export const MeContext = React.createContext(me);

export const MeProvider = MeContext.Provider;

export const MeConsumer = MeContext.Consumer;
