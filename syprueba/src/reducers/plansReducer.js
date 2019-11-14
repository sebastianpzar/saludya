export default (selectedPlan = {id: null, title: ''}, action) => {
    if (action.type === 'SELECT_PLAN'){
        return action.payload;
    }
    return selectedPlan;
 };