import { combineReducers } from 'redux';
import landingContentReducer from  './landingContenReducer';
import stepsContentReducer from './stepsContentReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    landingContent: landingContentReducer,
    stepsContent: stepsContentReducer,
    form: formReducer
});