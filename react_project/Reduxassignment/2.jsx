
import React, { useState } from 'react';
import AppContext from './Context';

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
