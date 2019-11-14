// Actions Creator

const planTitles = ["Basico Individual", "Basico Familiar", "Plus Individual", "Plus Familiar"]

export const selectPlan = (plan = null) => {
    if(plan){
        return {
            type: 'SELECT_PLAN',
            payload: {
                id: plan,
                title: planTitles[plan]
            }
        };
    }
    return{
        type: ''
    }
} ;