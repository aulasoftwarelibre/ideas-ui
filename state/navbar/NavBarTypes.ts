export const SWITCH_MENU_VISIBILITY = "@@ideas/SWITCH_MENU_VISIBILITY";
export const SWITCH_PROFILE_VISIBILITY = "@@ideas/SWITCH_PROFILE_VISIBILITY";

export interface NavBarState {
  hideMenu: boolean;
  hideProfile: boolean;
}

export interface SwitchMenuVisibilityAction {
  type: typeof SWITCH_MENU_VISIBILITY;
}

export interface SwitchProfileVisibilityAction {
  type: typeof SWITCH_PROFILE_VISIBILITY;
}

export type NavBarActions =
  | SwitchMenuVisibilityAction
  | SwitchProfileVisibilityAction;
