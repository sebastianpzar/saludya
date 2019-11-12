import { combineReducers } from 'redux';
import landingContentReducer from  './landingContenReducer';
import stepsContentReducer from './stepsContentReducer';

export default combineReducers({
    landingContent: landingContentReducer,
    stepsContent: stepsContentReducer
});