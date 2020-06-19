import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer, productDetailsReducer, productsaveReducer, productDeleteReducer } from './reducers/productReducers';
import Cookie from 'js-cookie'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart:{cartItems, shipping:{}, payment:{}}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productsaveReducer,
    productDelete: productDeleteReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;