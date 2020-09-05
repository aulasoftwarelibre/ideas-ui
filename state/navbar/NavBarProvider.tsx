import React from 'react';

import NavBarContext from './NavBarContext';
import reducer, { initialState } from './NavBarReducer';

export const NavBarProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <NavBarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};
