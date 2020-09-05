import React from 'react'

import NavBarContext from './NavBarContext'
import {
  SWITCH_MENU_VISIBILITY,
  SWITCH_PROFILE_VISIBILITY,
} from './NavBarTypes'

export const useNavBar = (): any => {
  const {
    state: { hideMenu, hideProfile },
    dispatch,
  } = React.useContext(NavBarContext)

  const changeProfileVisibility = async () => {
    dispatch({ type: SWITCH_PROFILE_VISIBILITY })
  }

  const changeMenuVisibility = async () => {
    dispatch({ type: SWITCH_MENU_VISIBILITY })
  }

  return {
    hideMenu,
    hideProfile,
    changeProfileVisibility,
    changeMenuVisibility,
  }
}

export default useNavBar
