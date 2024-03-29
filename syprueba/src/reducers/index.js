import { combineReducers } from 'redux';
import landingContentReducer from  './landingContenReducer';
import stepsContentReducer from './stepsContentReducer';
import plansReducer from './plansReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    plan: plansReducer,
    landingContent: landingContentReducer,
    stepsContent: stepsContentReducer,
    form: formReducer
});