
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import productReducer from "../Redux/Reducers/productReducer";
import categoryReducer from "../Redux/Reducers/categoryReducer";


const rootReducer = combineReducers({
  productData: productReducer,
  category: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
