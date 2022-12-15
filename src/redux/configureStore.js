import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCategories from './categories/categories';
import reducerBook from './books/books';

const rootReducer = combineReducers({ Books: reducerBook, Categories: reducerCategories });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
