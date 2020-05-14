import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
const middleware = [logger];
export default createStore(rootReducer, applyMiddleware(...middleware));
