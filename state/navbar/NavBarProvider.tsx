import * as React from 'react';

import NavBarContext from './NavBarContext';
import navbarReducer, { initialState } from './NavBarReducer';

interface Props {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(navbarReducer, initialState);

  return (
    <NavBarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};
