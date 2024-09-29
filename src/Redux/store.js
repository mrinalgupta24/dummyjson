// src/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "../Redux/Reducers/productReducer";
import categoryReducer from "../Redux/Reducers/categoryReducer";

// Combine reducers
const rootReducer = combineReducers({
  productData: productReducer,
  category: categoryReducer,
});

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
