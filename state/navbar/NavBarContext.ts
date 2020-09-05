import React from 'react'

import { initialState } from './NavBarReducer'
import { NavBarActions, NavBarState } from './NavBarTypes'

export const NavBarContext = React.createContext<{
  state: NavBarState
  dispatch: (action: NavBarActions) => void
}>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
})

export default NavBarContext
