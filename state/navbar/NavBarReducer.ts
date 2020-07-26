import { Reducer } from 'react';

import {
  NavBarActions,
  NavBarState,
  SWITCH_MENU_VISIBILITY,
  SWITCH_PROFILE_VISIBILITY,
} from './NavBarTypes';

export const initialState: NavBarState = {
  hideMenu: true,
  hideProfile: true,
};

export const reducer: Reducer<NavBarState, NavBarActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SWITCH_MENU_VISIBILITY: {
      return {
        ...state,
        hideMenu: !state.hideMenu,
      };
    }
    case SWITCH_PROFILE_VISIBILITY: {
      return {
        ...state,
        hideProfile: !state.hideProfile,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
