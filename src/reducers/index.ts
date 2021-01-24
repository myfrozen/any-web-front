import { user } from 'reducers/user';
import { application } from 'reducers/application';
import { combineReducers } from 'redux';

export type State = typeof initialState;
export const initialState = {
  user: user.initialState,
  application: application.initialState,
};

export type Reducers = typeof reducers;
export const reducers = combineReducers({
  user: user.reducer,
  application: application.reducer,
});
