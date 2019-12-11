import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { ProductReducer } from "./product";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  ProductReducer,
});

export default rootReducer;