import React from 'react';

import NavBarContext from './NavBarContext';
import reducer, { initialState } from './NavBarReducer';

interface Props {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <NavBarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};
