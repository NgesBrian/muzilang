import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { languagetion } from './language.reducer';

const rootReducer = combineReducers({
  authentication,
  languagetion
});

export default rootReducer;
