import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import gameReducer from "./Game/reducer";
import userReducer from "./Users/reducer";
import imageReducer from "./Images/reducer";

const rootReducer = combineReducers({
  imageState: imageReducer,
  userState: userReducer,
  gameState: gameReducer,
});

export default createStore(rootReducer, composeWithDevTools());
