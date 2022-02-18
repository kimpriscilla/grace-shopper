import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";

import userReducer from "./users/users";
import petsReducer from "./pets/pets";
import cartsReducer from "./cart/cart";
import ordersReducer from "./order/order";
import breedsReducer from "./pets/breeds";

const reducer = combineReducers({
  pets: petsReducer,
  users: userReducer,
  cartItems: cartsReducer,
  orders: ordersReducer,
  breeds: breedsReducer,
  auth,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
