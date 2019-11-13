const selectedPlanReducer = (selectedPlan = null, action) => {
    if (action.type === 'SELECT_PLAN'){
        return action.payload;
    }

    return selectedPlan;
 };