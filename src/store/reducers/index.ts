import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ConfigAction } from '../store';
import { combineReducers } from 'redux';
import noteData from './note';
import theme from './theme';
const config = (state = {}, action: ConfigAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
const reducers = combineReducers({
  config,
  theme,
  noteData,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
// export default todoApp;
