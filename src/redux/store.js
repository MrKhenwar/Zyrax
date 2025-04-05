import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import classReducer from './reducers/classReducer';

const rootReducer = combineReducers({
  user: userReducer,
  classes: classReducer
});

const store = createStore(rootReducer);

export default store;