import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

//composeEnhancers,合并一些enhancers 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 应用一些中间件
const storeenhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(storeenhancer));
export default store;



