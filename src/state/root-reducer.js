import { combineReducers } from "redux";
import UserReducer from "./user/user-reducer";
export default combineReducers({
  users: UserReducer,
});
