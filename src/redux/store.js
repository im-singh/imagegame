import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import gameReducer from "./Game/reducer";
import userReducer from "./Users/reducer";
import imageReducer from "./Images/reducer";
import mysaga from "./Saga/saga";

const rootReducer = combineReducers({
  imageState: imageReducer,
  userState: userReducer,
  gameState: gameReducer,
});
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(mysaga);

export default store;
