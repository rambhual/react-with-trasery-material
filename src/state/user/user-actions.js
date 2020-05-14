import {
  SET_CURRENT_USER,
  LOADING_CURRENT_USER,
  LOADED_CURRENT_USER_SUCCESSFULLY,
} from "./user-types";
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const loadingCurrentUser = () => ({
  type: LOADING_CURRENT_USER,
});
export const loadedCurrentUser = () => ({
  type: LOADED_CURRENT_USER_SUCCESSFULLY,
});
